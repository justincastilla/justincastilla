#!/usr/bin/env bash
# fetch-repos.sh
# Fetches GitHub repos tagged "talk" or "article", looks up each repo's
# last commit date, and writes them to src/data/repos.ts
# Requirements: gh CLI authenticated, jq
# Usage: bash scripts/fetch-repos.sh  (or: npm run fetch-repos)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT="$PROJECT_DIR/src/data/repos.ts"

echo "Fetching repos from GitHub..."

JSON=$(gh api "users/justincastilla/repos?per_page=100&sort=updated" \
  --jq '[.[] | select(.topics | any(. == "talk" or . == "article")) | {name, description, html_url, topics, language, stargazers_count}]')

COUNT=$(echo "$JSON" | jq 'length')
echo "Found $COUNT repos with 'talk' or 'article' topic."

# Build array with last commit dates
echo "Fetching last commit dates..."
REPOS_WITH_DATES="[]"

for row in $(echo "$JSON" | jq -r '.[] | @base64'); do
  _jq() { echo "$row" | base64 --decode | jq -r "$1"; }

  name=$(_jq '.name')
  commit_date=$(gh api "repos/justincastilla/$name/commits?per_page=1" --jq '.[0].commit.committer.date[:10]' 2>/dev/null || echo "unknown")
  echo "  $name -> last commit: $commit_date"

  REPOS_WITH_DATES=$(echo "$REPOS_WITH_DATES" | jq \
    --argjson repo "$(echo "$row" | base64 --decode)" \
    --arg date "$commit_date" \
    '. + [$repo + {last_commit: $date}]')
done

# Sort by last commit descending
REPOS_WITH_DATES=$(echo "$REPOS_WITH_DATES" | jq 'sort_by(.last_commit) | reverse')

# Generate TypeScript
cat > "$OUTPUT" << 'HEADER'
export interface Repo {
  name: string;
  description: string;
  url: string;
  topics: string[];
  language: string | null;
  stars: number;
  lastCommit: string;
}

export const repos: Repo[] = [
HEADER

echo "$REPOS_WITH_DATES" | jq -c '.[]' | while IFS= read -r repo; do
  name=$(echo "$repo" | jq -r '.name')
  desc=$(echo "$repo" | jq -r '.description // "No description"')
  url=$(echo "$repo" | jq -r '.html_url')
  topics=$(echo "$repo" | jq -c '.topics')
  lang=$(echo "$repo" | jq -r '.language // "null"')
  stars=$(echo "$repo" | jq -r '.stargazers_count')
  last_commit=$(echo "$repo" | jq -r '.last_commit')

  if [ "$lang" = "null" ]; then
    lang_val="null"
  else
    lang_val="\"$lang\""
  fi

  cat >> "$OUTPUT" << ENTRY
  {
    name: "$name",
    description: "$desc",
    url: "$url",
    topics: $topics,
    language: $lang_val,
    stars: $stars,
    lastCommit: "$last_commit"
  },
ENTRY
done

cat >> "$OUTPUT" << 'FOOTER'
];

/** Get all unique topics across repos for filtering */
export function getAllRepoTags(r: Repo[] = repos): string[] {
  const tagSet = new Set<string>();
  r.forEach((repo) => {
    repo.topics.forEach((t) => tagSet.add(t));
    if (repo.language) tagSet.add(repo.language);
  });
  return [...tagSet].sort();
}
FOOTER

echo "Written to $OUTPUT"
