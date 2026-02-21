import { createMarkdownAdapter } from "./markdown-adapter.js";

const { Adapter: CursorAgentAdapter, adapter } = createMarkdownAdapter({
  id: "cursor",
  name: "Cursor",
  configDir: ".cursor/agents",
});

export { CursorAgentAdapter };
export default adapter;
