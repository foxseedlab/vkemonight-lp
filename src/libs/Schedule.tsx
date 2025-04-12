import type { Schedule as ScheduleStore } from './stores/schedules';

type Props = {
  djSchedules: ScheduleStore[];
};

export default function Schedule({ djSchedules }: Props) {
  return (
    <ul className="mt-4 w-full tracking-wide flex flex-col gap-4">
      <NormalSchedule startAtStr="20:45" title="開場" />
      <DJSchedule startAtStr="21:00" title="DJ" djSchedules={djSchedules} />
      <ComingSoonSchedule />
      <NormalSchedule startAtStr="03:50" title="記念撮影" />
      <NormalSchedule startAtStr="04:00" title="イベント終了" />
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
}: {
  startAtStr: string;
  endAtStr: string;
  name: string;
  description: string;
}) {
  return (
    <li className="pl-6 flex flex-row">
      <figure className="w-16 h-auto flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gray-100 border-1 border-secondary/30" />
      </figure>
      <div className="px-6">
        <div className="text-tertiary/50 font-display outlined-text-shadow-2xs text-shadow-tertiary/10">
          {startAtStr} - {endAtStr}
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <div>{description}</div>
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
