import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import type { Schedule as ScheduleStore } from './stores/schedules';

// タイムゾーン処理のためのプラグインを設定
dayjs.extend(utc);
dayjs.extend(timezone);

// デフォルトタイムゾーンを日本時間に設定
dayjs.tz.setDefault('Asia/Tokyo');

type Props = {
  djSchedules: ScheduleStore[];
};

export default function Schedule({ djSchedules }: Props) {
  return (
    <ul className="mt-4 w-full tracking-wide flex flex-col gap-4">
      <NormalSchedule startAtStr="19:45" title="開場" />
      <DJSchedule startAtStr="20:00" title="DJ" djSchedules={djSchedules} />
      <ComingSoonSchedule />
      <NormalSchedule startAtStr="04:00" title="記念撮影" />
      <NormalSchedule startAtStr="04:15" title="イベント終了" />
    </ul>
  );
}

function ScheduleTimeAndTitle({
  startAtStr,
  title,
}: { startAtStr: string; title: string }) {
  return (
    <h2 className="text-xl font-medium leading-14 flex flex-row">
      <div
        className="pl-6 pr-12 font-display
        text-tertiary outlined-text-shadow-1dot5xs text-shadow-current
        flex flex-col items-center"
      >
        {startAtStr}
      </div>
      <div className="mt-[0.1rem]">{title}</div>
    </h2>
  );
}

function NormalSchedule({
  startAtStr,
  title,
}: { startAtStr: string; title: string }) {
  return (
    <li className="bg-primary">
      <ScheduleTimeAndTitle startAtStr={startAtStr} title={title} />
    </li>
  );
}

function DJSchedule({
  startAtStr,
  title,
  djSchedules,
}: { startAtStr: string; title: string; djSchedules: ScheduleStore[] }) {
  return (
    <li className="bg-primary">
      <ScheduleTimeAndTitle startAtStr={startAtStr} title={title} />

      <ul className="mb-5 flex flex-col gap-4">
        {djSchedules.map((djSchedule) => (
          <DJ
            startAtStr={djSchedule.start_at}
            endAtStr={djSchedule.end_at}
            name={djSchedule.performer.name}
            description={djSchedule.description}
            avatarUrl={djSchedule.performer.avatar.url}
            key={djSchedule.id}
          />
        ))}
      </ul>
    </li>
  );
}

function DJ({
  startAtStr,
  endAtStr,
  name,
  description,
  avatarUrl,
}: {
  startAtStr: string;
  endAtStr: string;
  name: string;
  description: string;
  avatarUrl: string;
}) {
  const startAtHourAndMinute = dayjs(startAtStr)
    .tz('Asia/Tokyo')
    .format('HH:mm');
  const endAtHourAndMinute = dayjs(endAtStr).tz('Asia/Tokyo').format('HH:mm');

  return (
    <li className="pl-6 flex flex-row">
      <figure className="w-16 h-auto flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-1 border-secondary/30">
          <img src={avatarUrl} alt={name} className="w-full" />
        </div>
      </figure>
      <div className="px-6">
        <div className="text-tertiary/50 font-display outlined-text-shadow-2xs text-shadow-tertiary/10">
          {startAtHourAndMinute} - {endAtHourAndMinute}
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: description.replace('\n', '<br>'),
          }}
        />
      </div>
    </li>
  );
}

function ComingSoonSchedule() {
  return (
    <li className="text-center font-display outlined-text-shadow-1dot5xs text-shadow-current">
      coming soon...
    </li>
  );
}
