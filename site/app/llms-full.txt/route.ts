import { DOCS, source } from "../../lib/docs";
import { AGENT_PROMPT } from "../../lib/prompt";

/**
 * /llms-full.txt (llmstxt.org): the instructions for adding Poppyseed to an
 * app, then every documentation page, so an agent needs one fetch instead of
 * following /llms.txt page by page. Read from docs/ at build time, like the
 * rendered pages.
 */
export const dynamic = "force-static";

// Each page becomes a section, so its own headings move down a level.
const page = (slug: string) => source(slug).replace(/^(#+) /gm, "#$1 ").trim();

const body = [
	"# Poppyseed",
	`## Add Poppyseed to a Next.js app\n\n${AGENT_PROMPT}`,
	...DOCS.map((doc) => `## ${doc.title}\n\n${doc.blurb}\n\n${page(doc.slug)}`),
].join("\n\n");

export const GET = () => new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
