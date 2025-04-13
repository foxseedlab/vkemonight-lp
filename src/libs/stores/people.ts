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
  social_links: {
    fieldId: string;
    type: SocialLinkType[];
    url: string;
  }[];
  is_organizer: boolean;
  is_staff: boolean;
  is_guest: boolean;
  is_performer: boolean;
};

export type PositionType =
  | '主催'
  | 'DJ'
  | 'MC'
  | 'バーテンダー'
  | 'SNS運用'
  | 'ロゴ制作'
  | 'ページ制作';

export type SocialLinkType =
  | 'X'
  | 'Bluesky'
  | 'Facebook'
  | 'YouTube'
  | 'Mixcloud'
  | 'VRChat'
  | 'GitHub';

export async function fetchPeople(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
  });

  return res.contents;
}

export async function fetchGuests(): Promise<Person[]> {
  const client = createCMSClient();

  const res = await client.getList<Person>({
    endpoint: 'people',
    queries: {
      filters: 'is_guest[equals]true',
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
