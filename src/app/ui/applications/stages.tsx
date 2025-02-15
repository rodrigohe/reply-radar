import clsx from "clsx";
import { Stages } from "@/app/lib/definitions";

export default function ApplicationStage({ stage }: { stage?: Stages}) {
  return (
    <span className={clsx(
      'inline-flex items-center px-2 py-1 text-white text-sm rounded',
      stage?.color
    )}>
      {stage?.name}
    </span>
  );
}
