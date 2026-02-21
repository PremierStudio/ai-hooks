import type { RuleDefinition, GeneratedFile } from "../types/index.js";
import { existsSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

export abstract class BaseRuleAdapter {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract readonly nativeSupport: boolean;
  abstract readonly configDir: string;

  abstract generate(rules: RuleDefinition[]): Promise<GeneratedFile[]>;
  abstract import(cwd?: string): Promise<RuleDefinition[]>;

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

  async uninstall(_cwd?: string): Promise<void> {}
}
