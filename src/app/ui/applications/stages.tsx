import clsx from "clsx";

const stages = [
  { name: 'To Apply', color: 'bg-gray-400' },
  { name: 'Applied', color: 'bg-yellow-400' },
  { name: 'OA', color: 'bg-blue-500' },
  { name: 'Interviewing', color: 'bg-purple-500' },
  { name: 'Failed', color: 'bg-yellow-800' },
  { name: 'Offer', color: 'bg-green-500' },
  { name: 'Rejected', color: 'bg-red-600' },
];

export default function ApplicationStage({ stage }: { stage: string }) {
  const getStageColor = (stage: string): string =>
    stages.find(stages => stages.name === stage)?.color || 'bg-gray-200';

  return (
    <span className={clsx(
      'inline-flex items-center rounded-lg px-2 py-2 text-xs',
      getStageColor(stage)
    )}>
      {stage}
    </span>
  );
}
