import { createMarkdownAdapter } from "./markdown-adapter.js";

const { Adapter: ClineAgentAdapter, adapter } = createMarkdownAdapter({
  id: "cline",
  name: "Cline",
  configDir: ".cline/agents",
});

export { ClineAgentAdapter };
export default adapter;
