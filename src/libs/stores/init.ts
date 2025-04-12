import { createClient } from 'microcms-js-sdk';

export function createCMSClient() {
  return createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
  });
}
