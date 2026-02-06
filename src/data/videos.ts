export interface Video {
  title: string;
  description: string;
  url: string;
  company: string;
  type: 'tutorial' | 'talk' | 'demo' | 'explainer' | 'workshop';
  topics: string[];
  views?: string;
}

export const videos: Video[] = [
  // ── Elastic ──────────────────────────────────────────────
  {
    title: 'Build an MCP Server with Elasticsearch & Claude AI',
    description:
      'Build a Model Context Protocol server that connects Claude AI to Elasticsearch, enabling natural language queries over real Apple Watch health data. Covers Resources, Tools, and Prompts with a full Python implementation.',
    url: 'https://www.youtube.com/watch?v=GMMx3g_Op5o',
    company: 'Elastic',
    type: 'tutorial',
    topics: ['AI/ML', 'MCP', 'Search'],
    views: '2.4K',
  },
  {
    title: 'AI Agent with n8n & Elasticsearch MCP Server',
    description:
      'Create an AI agent with n8n that leverages the Elasticsearch MCP server. Walk through deploying the server, configuring n8n, and running the full workflow end to end.',
    url: 'https://www.youtube.com/watch?v=lm1WVZGG78w',
    company: 'Elastic',
    type: 'tutorial',
    topics: ['AI/ML', 'MCP', 'Search'],
    views: '880',
  },
  {
    title: 'Agentic AI for Real-World Route Planning (PyData Talk)',
    description:
      'Conference talk on building an agentic AI system that creates and compares optimal routes using ferry schedules, costs, driving distances, and live traffic — powered by MCP and real-world APIs.',
    url: 'https://www.youtube.com/watch?v=Lypf_qNaeQs',
    company: 'Elastic',
    type: 'talk',
    topics: ['AI/ML', 'MCP'],
    views: '137',
  },
  {
    title: 'Frontend Observability: Instrumenting Production UIs',
    description:
      'Dive into the tools and techniques for instrumenting, monitoring, and diagnosing issues in production frontend applications. Covers RUM agents, combining frontend and backend tracing, and observability platforms.',
    url: 'https://www.youtube.com/watch?v=EiGZnG1m5mk',
    company: 'Elastic',
    type: 'talk',
    topics: ['Observability', 'Development'],
    views: '95',
  },

  // ── Redis ────────────────────────────────────────────────
  {
    title: 'Redis Strings Explained',
    description:
      'An introduction to the essential Redis Strings data structure. Learn SET, GET, and INCRBY commands, then use Redis Strings to cache serialized JSON for fast API responses.',
    url: 'https://www.youtube.com/watch?v=7CUt4yWeRQE',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures', 'Caching'],
    views: '29K',
  },
  {
    title: 'Redis Hashes Explained',
    description:
      'Introduction to Redis Hashes — one of the most useful data structures. Learn HSET, HGET, and HINCRBY while modeling a domain object for an imaginary online role-playing game.',
    url: 'https://www.youtube.com/watch?v=-KdITaRkQ-U',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '51K',
  },
  {
    title: 'Redis Lists Explained',
    description:
      'Explore Redis Lists with RPUSH, LPOP, LLEN, and LRANGE. Build a playlist system for an imaginary radio station to see Lists in action.',
    url: 'https://www.youtube.com/watch?v=PB5SeOkkxQc',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '20K',
  },
  {
    title: 'Redis Sorted Sets Explained',
    description:
      'Master Redis Sorted Sets with ZADD, ZINCRBY, ZRANGE, and ZRANK. Build and maintain an online gaming leaderboard as a practical example.',
    url: 'https://www.youtube.com/watch?v=MUKlxdBQZ7g',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '52K',
  },
  {
    title: 'Redis Streams Explained',
    description:
      'Learn how Redis Streams aggregate numerous sources of information into one easily consumable source of truth. Covers the utility and power of the Streams data structure.',
    url: 'https://www.youtube.com/watch?v=Z8qcpXyMAiA',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '56K',
  },
  {
    title: 'Redis Bitmaps Explained',
    description:
      'Redis Bitmaps encode immense amounts of boolean data in a small space. Learn SETBIT, GETBIT, and BITCOUNT while implementing a map exploration system for an online game.',
    url: 'https://www.youtube.com/watch?v=oj8LdJQjhJo',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '14K',
  },
  {
    title: 'Redis HyperLogLog Explained',
    description:
      'A HyperLogLog is a probabilistic data structure that estimates set cardinality. Build a privacy-preserving traffic heat map for San Francisco using PFADD and PFCOUNT.',
    url: 'https://www.youtube.com/watch?v=MunL8nnwscQ',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '19K',
  },
  {
    title: 'Redis Geospatial Indexes Explained',
    description:
      'Track distances between locations with Redis Geospatial Indexes. Learn GEOADD and GEOSEARCH while building a local attraction app for Yosemite National Park.',
    url: 'https://www.youtube.com/watch?v=qftiVQraxmI',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures'],
    views: '22K',
  },
  {
    title: 'RedisJSON: Store & Manipulate JSON in Redis',
    description:
      'Store and efficiently manipulate nested JSON documents in Redis without deserialization. A quick dive into the RedisJSON module and its capabilities.',
    url: 'https://www.youtube.com/watch?v=V0wmD_y03iM',
    company: 'Redis',
    type: 'explainer',
    topics: ['Data Structures', 'Development'],
    views: '26K',
  },
  {
    title: 'RedisTimeSeries: Time Series Data in Redis',
    description:
      'Explore the RedisTimeSeries module for ingesting and querying time series data. Learn TS.CREATE, TS.ADD, TS.RANGE, TS.CREATERULE, and TS.QUERYINDEX.',
    url: 'https://www.youtube.com/watch?v=SzcpwtLRgyk',
    company: 'Redis',
    type: 'tutorial',
    topics: ['Data Structures', 'Development'],
    views: '13K',
  },
  {
    title: 'Redis Stack: JSON Documents & Search Indexes',
    description:
      'Create and update JSON documents in Redis Stack, then build secondary search indexes with RediSearch to query for text, tags, and numeric ranges.',
    url: 'https://www.youtube.com/watch?v=I-ohlZXXaxs',
    company: 'Redis',
    type: 'tutorial',
    topics: ['Search', 'Data Structures', 'Development'],
    views: '14K',
  },
  {
    title: 'Vector Search with Redis',
    description:
      'A quick overview of the powerful vector storage and search capabilities Redis has to offer. Great starting point for integrating vector search into your application.',
    url: 'https://www.youtube.com/watch?v=xhLXZ0Hqudk',
    company: 'Redis',
    type: 'explainer',
    topics: ['AI/ML', 'Search'],
    views: '8.5K',
  },
  {
    title: 'What is Caching? How Redis Can Help',
    description:
      'First in a three-part series exploring what caching is, how it works, and how Redis can supercharge your application performance.',
    url: 'https://www.youtube.com/watch?v=Tqaqdfxi-J4',
    company: 'Redis',
    type: 'explainer',
    topics: ['Caching'],
    views: '103K',
  },
  {
    title: 'Implement a Look-Aside Cache with Redis & Node.js',
    description:
      'Fix slow response times caused by complex database aggregations. Implement a look-aside caching solution with Node.js, SQLite, and Redis for sub-millisecond results.',
    url: 'https://www.youtube.com/watch?v=krSgKN-5DHs',
    company: 'Redis',
    type: 'tutorial',
    topics: ['Caching', 'Development'],
    views: '31K',
  },
  {
    title: 'Cache API Responses with Redis & Node.js',
    description:
      'Implement a simple cache for third-party API responses using Node.js, ioredis, axios, and Redis. Covers cache reads, writes, TTL expiration, and performance timing.',
    url: 'https://www.youtube.com/watch?v=ztLsihiCHic',
    company: 'Redis',
    type: 'tutorial',
    topics: ['Caching', 'Development'],
    views: '24K',
  },
  {
    title: 'Setting Up an 8-Node Redis Cluster',
    description:
      'Set up a clustered Redis database from the command line. Walk through creating an 8-node Redis cluster step by step.',
    url: 'https://www.youtube.com/watch?v=N8BkmdZzxDg',
    company: 'Redis',
    type: 'tutorial',
    topics: ['DevOps'],
    views: '35K',
  },
  {
    title: 'How Redis Clustering Works',
    description:
      'Understand how Redis clustering works under the hood — how and when a cluster detects and resolves node failures. A peek into the Running Redis at Scale course.',
    url: 'https://www.youtube.com/watch?v=3WOfXRjYnGA',
    company: 'Redis',
    type: 'explainer',
    topics: ['DevOps'],
    views: '66K',
  },
  {
    title: 'Top 4 Redis Misconceptions',
    description:
      'Debunking the most common Redis myths — covering memory management, scalability, caching assumptions, and self-hosted vs. managed Redis.',
    url: 'https://www.youtube.com/watch?v=_7W5vqLevu0',
    company: 'Redis',
    type: 'explainer',
    topics: ['Development'],
    views: '5K',
  },
  {
    title: 'RU204: Storing, Querying & Indexing JSON at Speed',
    description:
      'Walk through Redis University Course 204 with Developer Advocates Justin and Savannah — covering JSON storage, querying, and indexing in Redis.',
    url: 'https://www.youtube.com/watch?v=spKn5FAsYZc',
    company: 'Redis',
    type: 'workshop',
    topics: ['Data Structures', 'Search', 'Development'],
    views: '1.2K',
  },

  // ── Redis (IoT / Conference) ─────────────────────────────
  {
    title: 'Hyperlocal Air Quality Sensor with Redis & Raspberry Pi',
    description:
      'Build a hyperlocal air sensor system with a Raspberry Pi that sends particulate density data to Redis in the cloud. Trigger SMS alerts, feed data visualizations, and activate smart devices.',
    url: 'https://www.youtube.com/watch?v=HH_G9ut1SFg',
    company: 'Redis',
    type: 'talk',
    topics: ['IoT', 'Development'],
    views: '205',
  },
];

/** Extract YouTube video ID from a URL */
export function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

/** Get YouTube thumbnail URL for a video */
export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

/** Get all unique tags across videos for filtering */
export function getAllVideoTags(vids: Video[] = videos): string[] {
  const tagSet = new Set<string>();
  vids.forEach((v) => {
    tagSet.add(v.company);
    v.topics.forEach((t) => tagSet.add(t));
  });
  return [...tagSet].sort();
}

/** Get all unique companies */
export function getCompanies(vids: Video[] = videos): string[] {
  return [...new Set(vids.map((v) => v.company))].sort();
}

/** Get all unique video types */
export function getVideoTypes(vids: Video[] = videos): string[] {
  return [...new Set(vids.map((v) => v.type))].sort();
}
