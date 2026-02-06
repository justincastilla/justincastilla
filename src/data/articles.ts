export interface Article {
  title: string;
  description: string;
  url: string;
  publisher: string;
  topics: string[];
  date?: string;
}

export const articles: Article[] = [
  {
    title: 'A2A Protocol: Building a Multi-Agent Newsroom with MCP and Elasticsearch',
    description:
      'Learn how to build an AI-powered newsroom using the Agent-to-Agent protocol, Model Context Protocol, and Elasticsearch as the knowledge store.',
    url: 'https://www.elastic.co/search-labs/blog/a2a-protocol-mcp-llm-agent-newsroom-elasticsearch',
    publisher: 'Elastic Search Labs',
    topics: ['AI/ML', 'Search', 'MCP'],
    date: '2025',
  },
  {
    title: 'A2A Protocol: Agent Workflow with MCP and Elasticsearch',
    description:
      'Deep dive into agent workflow orchestration using A2A protocol, connecting multiple LLM agents through MCP servers backed by Elasticsearch.',
    url: 'https://www.elastic.co/search-labs/blog/a2a-protocol-mcp-llm-agent-workflow-elasticsearch',
    publisher: 'Elastic Search Labs',
    topics: ['AI/ML', 'Search', 'MCP'],
    date: '2025',
  },
  {
    title: 'MCP Intelligent Search with Elasticsearch',
    description:
      'Connecting AI assistants to Elasticsearch through the Model Context Protocol for intelligent, context-aware search.',
    url: 'https://www.elastic.co/search-labs/blog/mcp-intelligent-search',
    publisher: 'Elastic Search Labs',
    topics: ['AI/ML', 'Search', 'MCP'],
    date: '2025',
  },
  {
    title: 'Elasticsearch as a Vector Database: A Practical Example',
    description:
      'A hands-on guide to using Elasticsearch as a vector database for semantic search and similarity matching.',
    url: 'https://www.elastic.co/search-labs/blog/elastic-vector-database-practical-example',
    publisher: 'Elastic Search Labs',
    topics: ['AI/ML', 'Search', 'Development'],
    date: '2024',
  },
  {
    title: 'How to Check if a String Contains a Substring in Elasticsearch',
    description:
      'Practical techniques for substring matching and text analysis in Elasticsearch, covering wildcards, regex, and more.',
    url: 'https://www.elastic.co/search-labs/blog/elasticsearch-string-contains-substring',
    publisher: 'Elastic Search Labs',
    topics: ['Search', 'Development'],
    date: '2024',
  },
];

export function getAllArticleTags(arts: Article[] = articles): string[] {
  const tagSet = new Set<string>();
  arts.forEach((a) => {
    tagSet.add(a.publisher);
    a.topics.forEach((t) => tagSet.add(t));
  });
  return [...tagSet].sort();
}
