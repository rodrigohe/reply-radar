import { formatDateToLocal } from "@/app/lib/utils";
import { ApplicationURL, DeleteApplication, UpdateApplication } from "./buttons";
import ApplicationStage from "@/app/ui/applications/stages";
import Link from "next/link";
import { fetchAllApplications } from "@/app/lib/data";

export default async function applicationsTable({
    query,
    currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const applications = await fetchAllApplications();
  // console.log(test)

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-stone-400 p-2 md:pt-0">
          <div className="md:hidden">
            {applications?.map((application) => (
              <div
                key={application.id}
                className="mb-2 w-full rounded-md bg-yellow-50 p-4 text-black"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{application.company}</p>
                    </div>
                    <p className="text-sm">{application.position}</p>
                  </div>
                  <ApplicationStage stage={application.stage} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(application.apply_date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ApplicationURL url={application.link} />
                    <UpdateApplication id={application.id} />
                    <DeleteApplication id={application.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-black md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
                  Stage
                </th>
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
                  Company
                </th>
                <th scope="col" className="w-1/5 px-3 py-5 font-medium">
                  Position
                </th>
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
                  Ref-ID
                </th>
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
                  Apply Date
                </th>
                <th scope="col" className="w-1/5 px-3 py-5 font-medium">
                  Location
                </th>
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
                  Last Updated
                </th>
                <th
                  scope="col"
                  className="w-1/12 relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50">
              {applications?.map((application) => (
                <tr
                  key={application.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    <ApplicationStage stage={application.stage} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link href={`applications/${application.id}`} >
                      {application.company}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link href={`applications/${application.id}`} >
                      {application.position}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {application.ref_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(application.apply_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className="flex flex-wrap items-center gap-2 bg-yellow-50 py-1">
                      {Object.keys(application.location).length === 0 ? '' : application.location.map((loc) => (
                        <div
                          key={application.id + loc?.name}
                          className={`flex items-center px-2 py-1 text-white text-sm rounded ${loc?.color}`}
                        >
                          {loc?.name}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(application.apply_date)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ApplicationURL url={application.link} />
                      <UpdateApplication id={application.id} />
                      <DeleteApplication id={application.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
