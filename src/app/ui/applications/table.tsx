import { formatDateToLocal } from "@/app/lib/utils";
import { DeleteApplication, UpdateApplication } from "./buttons";
import { applications } from "@/app/lib/placeholder-data";
import ApplicationStage from "@/app/ui/applications/stages";

export default async function applicationsTable({
  // query,
  // currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const applications = await fetchFilteredApplications(query, currentPage);


  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-stone-400 p-2 md:pt-0">
          <div className="md:hidden">
            {applications?.map((application) => (
              <div
                key={application.uuid}
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
                    <UpdateApplication id={application.uuid} />
                    <DeleteApplication id={application.uuid} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-black md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stage
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Company
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Position
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  URL
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ref-ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Application Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Location
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50">
              {applications?.map((application) => (
                <tr
                  key={application.uuid}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    <ApplicationStage stage={application.stage} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{application.company}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {application.position}
                  </td>
                  <td className="max-w-xs px-3 py-3">
                    {application.link}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {application.ref_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(application.apply_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {application.location}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateApplication id={application.uuid} />
                      <DeleteApplication id={application.uuid} />
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
