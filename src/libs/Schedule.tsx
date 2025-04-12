export default function Schedule() {
  return (
    <ul className="mt-4 w-full tracking-wide flex flex-col gap-4">
      <NormalSchedule startAtStr="20:45" title="開場" />
      <DJSchedule startAtStr="21:00" title="DJ" />
      <ComingSoonSchedule />
      <NormalSchedule startAtStr="03:50" title="記念撮影" />
      <NormalSchedule
        startAtStr="04:00"
        title="イベント終了"
      />
    </ul>
  );
}

function ScheduleTimeAndTitle({
  startAtStr,
  title,
}: { startAtStr: string; title: string }) {
  return (
    <h3 className="text-xl font-medium leading-14 flex flex-row">
      <div
        className="pl-6 pr-12 font-display
        text-tertiary outlined-text-shadow-1dot5xs text-shadow-current
        flex flex-col items-center"
      >
        {startAtStr}
      </div>
      <div className="mt-[0.1rem]">{title}</div>
    </h3>
  );
}

function NormalSchedule({
  startAtStr,
  title,
}: { startAtStr: string; title: string }) {
  return (
    <li className="bg-primary">
      <ScheduleTimeAndTitle
        startAtStr={startAtStr}
        title={title}
      />
    </li>
  );
}

function DJSchedule({
  startAtStr,
  title,
}: { startAtStr: string; title: string }) {
  return (
    <li className="bg-primary">
      <ScheduleTimeAndTitle
        startAtStr={startAtStr}
        title={title}
      />

      <ul className="mb-5 flex flex-col gap-4">
        <DJ
          startAtStr="21:00"
          endAtStr="22:00"
          name="ふぉくしーど"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="22:00"
          endAtStr="23:00"
          name="FOXSEED"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="23:00"
          endAtStr="24:00"
          name="ふぉくしーど"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="24:00"
          endAtStr="01:00"
          name="FOXSEED"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="01:00"
          endAtStr="02:00"
          name="ふぉくしーど"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="02:00"
          endAtStr="03:00"
          name="ふぉくしーど"
          description="FUTURE BASE 流します"
        />
        <DJ
          startAtStr="03:00"
          endAtStr="04:00"
          name="FOXSEED"
          description="FUTURE BASE 流します"
        />
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
        <h4 className="text-lg font-medium">{name}</h4>
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
