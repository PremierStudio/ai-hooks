import { createMarkdownAdapter } from "./markdown-adapter.js";

const { Adapter: OpenCodeAgentAdapter, adapter } = createMarkdownAdapter({
  id: "opencode",
  name: "OpenCode",
  configDir: ".opencode/agents",
  command: "opencode",
});

export { OpenCodeAgentAdapter };
export default adapter;
