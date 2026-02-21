import { createMarkdownAdapter } from "./markdown-adapter.js";

const { Adapter: KiroAgentAdapter, adapter } = createMarkdownAdapter({
  id: "kiro",
  name: "Kiro",
  configDir: ".kiro/agents",
});

export { KiroAgentAdapter };
export default adapter;
