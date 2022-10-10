/* eslint-disable @typescript-eslint/no-empty-interface */
interface Env {
  PORT: number | undefined;
  NODE_ENV: "development" | "production";
}

declare namespace NodeJS {
  interface ProcessEnv extends Env {}
}

interface ImportMetaEnv extends Env {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
