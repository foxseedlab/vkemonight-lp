import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BeveledRectangleFigure } from './Box';
import type { Person } from './stores/people';
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
    <ul className="mt-4 w-full half-container-max-width tracking-wide flex flex-col gap-4">
      <NormalSchedule startAtStr="19:45" title="開場" />
      <DJSchedule startAtStr="20:00" title="DJ" djSchedules={djSchedules} />
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <li className="bg-primary">
      <ScheduleTimeAndTitle startAtStr={startAtStr} title={title} />

      <motion.ul
        ref={ref}
        className="mb-5 flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {djSchedules.map((djSchedule) => (
          <motion.li key={djSchedule.id} variants={itemVariants}>
            <DJ
              startAtStr={djSchedule.start_at}
              endAtStr={djSchedule.end_at}
              name={djSchedule.performer.name}
              genre={djSchedule.genre}
              avatarUrl={djSchedule.performer.avatar.url}
              vj={djSchedule.vj}
            />
          </motion.li>
        ))}
      </motion.ul>
    </li>
  );
}

function DJ({
  startAtStr,
  endAtStr,
  name,
  genre,
  avatarUrl,
  vj,
}: {
  startAtStr: string;
  endAtStr: string;
  name: string;
  genre: string;
  avatarUrl: string;
  vj: Person | null;
}) {
  const startAtHourAndMinute = dayjs(startAtStr)
    .tz('Asia/Tokyo')
    .format('HH:mm');
  const endAtHourAndMinute = dayjs(endAtStr).tz('Asia/Tokyo').format('HH:mm');

  return (
    <div className="pl-6 flex flex-row">
      <div className="w-16 h-auto flex flex-col items-center justify-center">
        <BeveledRectangleFigure
          imgSrc={avatarUrl}
          imgAlt={name}
          size={16}
          cornerSize={2}
          borderWidth={0.5}
          strokeColor="var(--color-secondary-background)"
          className="w-16 h-16"
        />
      </div>
      <div className="px-6">
        <div className="text-tertiary/50 font-display outlined-text-shadow-2xs text-shadow-tertiary/10">
          {startAtHourAndMinute} - {endAtHourAndMinute}
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <div>{genre}</div>
        {vj && (
          <div className="mt-[0.1rem]">
            <span className="px-4 text-secondary/75 bg-secondary/10 rounded-lg">
              VJ: {vj.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ComingSoonSchedule() {
  return (
    <li className="text-center font-display outlined-text-shadow-1dot5xs text-shadow-current">
      coming soon...
    </li>
  );
}
