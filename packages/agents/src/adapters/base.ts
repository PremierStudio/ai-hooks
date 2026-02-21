import type { AgentDefinition, GeneratedFile } from "../types/index.js";
import { existsSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

export abstract class BaseAgentAdapter {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract readonly nativeSupport: boolean;
  abstract readonly configDir: string;

  abstract generate(agents: AgentDefinition[]): Promise<GeneratedFile[]>;
  abstract import(cwd?: string): Promise<AgentDefinition[]>;

  async detect(cwd?: string): Promise<boolean> {
    const dir = cwd ?? process.cwd();
    return existsSync(resolve(dir, this.configDir));
  }

  async install(files: GeneratedFile[], cwd?: string): Promise<void> {
    const dir = cwd ?? process.cwd();
    for (const file of files) {
      const fullPath = resolve(dir, file.path);
      await mkdir(dirname(fullPath), { recursive: true });
      await writeFile(fullPath, file.content, "utf-8");
    }
  }

  async uninstall(cwd?: string): Promise<void> {
    // Override in subclass
    void cwd;
  }
}
