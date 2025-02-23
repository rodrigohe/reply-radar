import { auth } from "@/auth";
import { Suspense } from "react";
import { getApplicationsCountByStage } from "@/app/lib/data";
import { stageOptions } from "@/app/lib/utils";
import ApplicationsToFinish from "@/app/ui/dashboard/to-apply-cards";
import { ApplicationsToFinishSkeleton } from "@/app/ui/skeletons";
import StageDoughnutChart from "@/app/ui/dashboard/doughnut-charts";

export default async function Page() {
  const session = await auth();
  const user_id = session?.user?.id || '-1';
  const result = await getApplicationsCountByStage(user_id);
  result.forEach((item) => {
    item.color_hex = stageOptions.find((s) => s.name === item.stage)?.color_hex ?? '#FFFFFF';
  })

  return (
    <main>
      <h1 className="text-2xl">
        Dashboard
      </h1>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Suspense>
          <StageDoughnutChart result={result} />
        </Suspense>
        <Suspense fallback={<ApplicationsToFinishSkeleton />}>
          <ApplicationsToFinish />
        </Suspense>
      </div>

    </main>
  )
}