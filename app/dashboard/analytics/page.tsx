import { getApplicationCountPerMonth, getApplicationsCountByStage } from "@/app/lib/data";
import { stageOptions } from "@/app/lib/utils";
import StageDoughnutChart from "@/app/ui/dashboard/doughnut-charts";
import ApplicationsPerMonthBarChart from "@/app/ui/dashboard/bar-charts";
import { auth } from "@/auth";
import { Suspense } from "react";

export default async function Page() {
  const session = await auth();
  const user_id = session?.user?.id || '-1';
  const appsPerStage = await getApplicationsCountByStage(user_id);
  appsPerStage.forEach((item) => {
    item.color_hex = stageOptions.find((s) => s.name === item.stage)?.color_hex ?? '#FFFFFF';
  })

  const appsPerYearMonth = await getApplicationCountPerMonth(user_id);

  return (
    <main>
      <h1 className="text-2xl">
        Analytics
      </h1>
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Suspense>
          
        </Suspense>
      </div> */}
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Suspense>
          <StageDoughnutChart result={appsPerStage} />
        </Suspense>
        <Suspense>
          <ApplicationsPerMonthBarChart result={appsPerYearMonth} />
        </Suspense>
      </div>

    </main>
  )
}