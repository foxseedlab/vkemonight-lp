type ImportMetaEnv = {
  readonly MICROCMS_SERVICE_DOMAIN: string;
  readonly MICROCMS_API_KEY: string;

  readonly PUBLIC_X_URL: string;
  readonly PUBLIC_KOFI_URL: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
