import clsx from "clsx";
import { stageOptions } from "@/app/lib/utils";

export default function ApplicationStage({ stage }: { stage: string }) {
  const getStageColor = (stage: string): string =>
    stageOptions.find(stages => stages.name === stage)?.color || 'bg-gray-200';

  return (
    <span className={clsx(
      'inline-flex items-center rounded-lg px-2 py-2 text-xs',
      getStageColor(stage)
    )}>
      {stage}
    </span>
  );
}
