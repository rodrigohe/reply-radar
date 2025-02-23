export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="max-w-xs px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function ApplicationsMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-yellow-50 p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-stone-400 p-2 md:pt-0">
          <div className="md:hidden">
            <ApplicationsMobileSkeleton />
            <ApplicationsMobileSkeleton />
            <ApplicationsMobileSkeleton />
            <ApplicationsMobileSkeleton />
            <ApplicationsMobileSkeleton />
            <ApplicationsMobileSkeleton />
          </div>
          <table className="hidden min-w-full p-4 text-black md:table">
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
                <th scope="col" className="w-1/12 px-3 py-5 font-medium">
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
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export function ApplciationsToFinishCardSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-yellow-50 p-4">
      <div className="flex items-center justify-between">
        <div className="mb-2 flex items-center">
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="h-10 w-10 rounded bg-gray-100"></div>
        <div className="h-10 w-10 rounded bg-gray-100"></div>
      </div>
    </div>
  );
}

export function ApplicationsToFinishSkeleton() {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full max-w-2xl flex flex-col">
        <div className="bg-stone-400 p-2 rounded-lg space-y-2 w-full">
          <div>
            <ApplciationsToFinishCardSkeleton />
            <ApplciationsToFinishCardSkeleton />
            <ApplciationsToFinishCardSkeleton />
            <ApplciationsToFinishCardSkeleton />
            <ApplciationsToFinishCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}