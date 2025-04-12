import { createCMSClient } from './init';

export type Assets = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  favicon: {
    url: string;
    height: number;
    width: number;
  };
  logo_white: {
    url: string;
    height: number;
    width: number;
  };
  logo_black: {
    url: string;
    height: number;
    width: number;
  };
};

export async function fetchAssets(): Promise<Assets> {
  const client = createCMSClient();

  const res = await client.getObject<Assets>({
    endpoint: 'assets',
  });

  return res;
}
