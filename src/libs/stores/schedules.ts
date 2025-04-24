import { createCMSClient } from './init';
import type { Person } from './people';

export type Schedule = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  start_at: string;
  end_at: string;
  genre: string;
  performer: Person;
  vj: Person | null;
  is_dj: boolean;
};

export async function fetchSchedules(): Promise<Schedule[]> {
  const client = createCMSClient();

  const res = await client.getList<Schedule>({
    endpoint: 'schedules',
  });

  return res.contents;
}

export async function fetchDJSchedules(): Promise<Schedule[]> {
  const client = createCMSClient();

  const res = await client.getList<Schedule>({
    endpoint: 'schedules',
    queries: {
      filters: 'is_dj[equals]true',
    },
  });

  return res.contents;
}
