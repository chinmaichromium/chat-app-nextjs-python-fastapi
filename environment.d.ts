declare namespace NodeJS {
  interface ProcessEnv {
    OPENAI_KEY: string;
    NEXT_PUBLIC_FASTAPI_URL: string;
    APP_URL: string;
  }
}
