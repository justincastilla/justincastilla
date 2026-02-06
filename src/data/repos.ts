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
  {
    name: "DevRel-DeepAgent",
    description: "A technology research DeepAgent w/ Elastic Agent as a search provider",
    url: "https://github.com/justincastilla/DevRel-DeepAgent",
    topics: ["talk"],
    language: "Python",
    stars: 0,
    lastCommit: "2026-01-30"
  },
  {
    name: "elastic-newsroom",
    description: "A demonstration of A2A agents with MCP working together",
    url: "https://github.com/justincastilla/elastic-newsroom",
    topics: ["a2a", "agentic-ai", "article", "elastic", "mcp"],
    language: "Python",
    stars: 2,
    lastCommit: "2025-11-10"
  },
  {
    name: "kitsap_commute_MCP_py",
    description: "Learning MCP through creating a commute assistant in Western Washington",
    url: "https://github.com/justincastilla/kitsap_commute_MCP_py",
    topics: ["elastic", "mcp", "python", "talk"],
    language: "Python",
    stars: 6,
    lastCommit: "2025-11-08"
  },
  {
    name: "symptomMinder",
    description: "A proof of concept MCP server designed to record medical symptoms for pattern and correlation",
    url: "https://github.com/justincastilla/symptomMinder",
    topics: ["elasticsearch", "mcp", "talk"],
    language: "Python",
    stars: 2,
    lastCommit: "2025-10-23"
  },
  {
    name: "Introduction-to-OpenTelemetry-with-JS",
    description: "Demo of OpenTelemetry in action",
    url: "https://github.com/justincastilla/Introduction-to-OpenTelemetry-with-JS",
    topics: ["elastic", "observability", "talk"],
    language: "CSS",
    stars: 3,
    lastCommit: "2025-01-08"
  },
  {
    name: "elastic-bird",
    description: "A demonstration of vector similarity search with embedded vectors of images",
    url: "https://github.com/justincastilla/elastic-bird",
    topics: ["elastic", "embedding", "similarity-search", "talk", "vector-database"],
    language: "Python",
    stars: 1,
    lastCommit: "2024-10-10"
  }
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
