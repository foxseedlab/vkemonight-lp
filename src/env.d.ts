type ImportMetaEnv = {
  readonly MICROCMS_SERVICE_DOMAIN: string;
  readonly MICROCMS_API_KEY: string;

  readonly PUBLIC_X_URL: string;
  readonly PUBLIC_KOFI_URL: string;
  readonly PUBLIC_VRCHAT_GROUP_URL: string;
  readonly PUBLIC_HOW_TO_JOIN_YOUTUBE_VIDEO_ID: string;

  readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
  readonly PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID: string;

  readonly PUBLIC_SITE_URL: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
