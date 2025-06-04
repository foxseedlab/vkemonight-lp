import { type Image, createCMSClient } from './init';

export type Assets = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  favicon: Image;
  ogp: Image;
  featured_images: {
    fieldId: string;
    hero_video_url: string;
    hero_video_thumbnail: Image;
    about: Image[];
    timeschedule: Image;
    join_ticket: Image;
    contribute: Image;
  };
  logos: {
    fieldId: string;
    white: Image;
    black: Image;
  };
  social_logos: {
    fieldId: string;
    twitter: Image;
    bluesky: Image;
    instagram: Image;
    facebook: Image;
    youtube: Image;
    mixcloud: Image;
    vrchat: Image;
    booth: Image;
    github: Image;
    linktree: Image;
    kofi: Image;
    homepage: Image;
  };
  patrons: Patron[];
};

export type Patron = {
  fieldId: string;
  name: string;
  is_need_honorific: boolean;
};

export async function fetchAssets(): Promise<Assets> {
  const client = createCMSClient();

  const res = await client.getObject<Assets>({
    endpoint: 'assets',
  });

  return res;
}
