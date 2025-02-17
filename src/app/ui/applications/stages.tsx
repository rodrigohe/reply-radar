import clsx from "clsx";
import { getStageColor } from "@/app/lib/utils";

export default function ApplicationStage({ stageName }: { stageName: string}) {
  const stage = getStageColor(stageName);
  return (
    <span className={clsx(
      'inline-flex items-center px-2 py-1 text-white text-sm rounded',
      stage?.color
    )}>
      {stage?.name}
    </span>
  );
}
