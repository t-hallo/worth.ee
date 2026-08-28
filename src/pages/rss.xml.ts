import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

const posts = [
  {
    title: '键盘优先的交互设计体验',
    date: '2025-07-02',
    slug: '/posts/keyboard',
    content: '探讨如何构建键盘友好的交互体验，提升无障碍访问和效率。',
  },
  {
    title: '构建高效的 Figma 自动化工具链',
    date: '2025-05-11',
    slug: '/posts/figma-mcp',
    content: '分享使用 MCP 协议连接 Figma 的实践经验。',
  },
  {
    title: '如何清晰组织设计系统中的变量',
    date: '2025-03-15',
    slug: '/posts/figma-variables',
    content: '关于 Figma 变量组织的设计系统方法论。',
  },
  {
    title: 'UI 设计策略与工程落地实践',
    date: '2022-11-21',
    slug: '/posts/design-strategies',
    content: '从设计到开发的完整工作流分享。',
  },
  {
    title: '代码分支审查指南与检查清单',
    date: '2021-04-16',
    slug: '/posts/review-checklist',
    content: '团队协作中代码审查的最佳实践。',
  },
];

const baseUrl = 'https://worth.ee';

export function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE_TITLE}</title>
  <subtitle>${SITE_DESCRIPTION}</subtitle>
  <link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
  <link href="${baseUrl}/"/>
  <id>${baseUrl}/</id>
  <updated>${new Date().toISOString()}</updated>
  ${posts.map((post) => {
    const date = new Date(post.date);
    return `<entry>
    <title>${post.title}</title>
    <link href="${baseUrl}${post.slug}"/>
    <id>${baseUrl}${post.slug}</id>
    <updated>${date.toISOString()}</updated>
    <summary>${post.content}</summary>
  </entry>`;
  }).join('')}
</feed>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
