import { createMarkdownAdapter } from "./markdown-adapter.js";

const { Adapter: DroidAgentAdapter, adapter } = createMarkdownAdapter({
  id: "droid",
  name: "Droid",
  configDir: ".factory/agents",
});

export { DroidAgentAdapter };
export default adapter;
