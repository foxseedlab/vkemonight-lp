import { type Image, createCMSClient } from './init';

export type Person = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  avatar: Image;
  still_photography?: Image;
  introduction: string;
  positions: PositionType[];
  social_links: SocialLink[];
  is_organizer: boolean;
  is_staff: boolean;
  is_special_guest: boolean;
  is_guest: boolean;
  is_performer: boolean;
};

export type SocialLink = {
  fieldId: string;
  type: SocialLinkType[];
  url: string;
};

export type PositionType =
  | '主催'
  | 'DJ'
  | 'VJ'
  | 'MC'
  | '照明'
  | 'バーテンダー'
  | 'SNS運用'
  | 'ロゴ制作'
  | 'フライヤー制作'
  | 'ページ制作';

export type SocialLinkType =
  | 'X'
  | 'Bluesky'
  | 'Facebook'
  | 'Instagram'
  | 'YouTube'
  | 'Mixcloud'
  | 'VRChat'
  | 'Booth'
  | 'GitHub'
  | 'Linktree'
  | 'homepage';

export async function fetchPeople(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
  });

  return res.contents;
}

export async function fetchSpecialGuests(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_special_guest[equals]true',
    },
  });

  return res.contents;
}

export async function fetchGuestsWithoutSpecial(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_guest[equals]true[and]is_special_guest[equals]false',
    },
  });

  return res.contents;
}

export async function fetchOrganizers(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_organizer[equals]true',
    },
  });

  return res.contents;
}

export async function fetchStaffsWithoutOrganizer(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_staff[equals]true[and]is_organizer[equals]false',
    },
  });

  return res.contents;
}

export async function fetchPerformers(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_performer[equals]true',
    },
  });

  return res.contents;
}
