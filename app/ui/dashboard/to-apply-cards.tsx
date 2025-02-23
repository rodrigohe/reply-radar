import { getApplicationsByStage } from "@/app/lib/data";
import { auth } from "@/auth";
import { ApplicationURL, UpdateApplication } from "@/app/ui/applications/buttons";
import Link from "next/link";
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default async function ApplicationsToFinish() {
  const session = await auth();
  const user_id = session?.user?.id || '-1';
  const result = await getApplicationsByStage(user_id, 'To apply');
  // const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col">
      <h2 className="text-lg font-semibold mb-4">
        Applications To-Do
      </h2>
      <div className="flex flex-col justify-between rounded-xl bg-stone-400 p-4 text-black">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="mb-2 w-full rounded-md bg-yellow-50 px-6 text-black">
          {result.map((application, i) => {
            return (
              <div
                key={application.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <Link
                      className="truncate text-sm font-semibold md:text-base"
                      href={`/dashboard/applications/${application.id}`} >
                      {application.company}
                    </Link>
                    <Link
                      className="hidden text-sm text-gray-500 sm:block"
                      href={`/dashboard/applications/${application.id}`}>
                      {application.position}
                    </Link>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <ApplicationURL url={application.link} />
                  <UpdateApplication id={application.id} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-1 pt-2 text-gray-600">
          <InformationCircleIcon className="h-5 w-5" />
          <h3 className="ml-2 text-xs">At most 5 applications in <em>&quot;To apply&quot;</em> will be shown</h3>
        </div>
      </div>
    </div>
  );
}