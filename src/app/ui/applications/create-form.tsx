import { stageOptions } from "@/app/lib/utils";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CreateApplication from "./buttons";


export default function Form() {
  return (
    <div className="flex items-center md:justify-center p-12">
      <div className="m-auto max-w-px-550 w-full">
        <form>
          <div className="flex-col gap-5 mb-5">
            {/* Stage */}
            <div className="mb-5">
              <label htmlFor="customer" className="block">
                Choose stage
              </label>
              <div className="relative">
                <select
                  id="customer"
                  name="customerId"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 text-black"
                  defaultValue=""
                  aria-describedby="customer-error"
                >
                  <option value="" disabled>
                    Select a stage
                  </option>
                  {stageOptions.map((stage) => (
                    <option key={stage.name} value={stage.name}>
                      {stage.name}
                    </option>
                  ))}
                </select>
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-black" />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col-reverse mb-5">
              <input
                type="text"
                placeholder="e.g. Jane Street"
                className="w-full pb-2 border-none text-black"
              />
              <label className="block mb-4"> Company </label>
            </div>

            {/* Position */}
            <div className="flex flex-col-reverse mb-5">
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                className="w-full pb-2 border-none text-black"
              />
              <label className="block mb-4"> Position </label>
            </div>

            {/* Link */}
            <div className="flex flex-col-reverse mb-5">
              <input
                type="text"
                placeholder="e.g. linked.in/jobs/1231"
                className="w-full pb-2 border-none text-black"
              />
              <label className="block mb-4"> Link </label>
            </div>

            {/* Ref-id */}
            <div className="flex flex-col-reverse mb-5">
              <input
                type="text"
                placeholder="e.g. a2nb3b"
                className="w-full pb-2 border-none text-black"
              />
              <label className="block mb-4"> Requisite/Reference Id </label>
            </div>

            {/* Location */}
            <div className="flex flex-col-reverse mb-5">
              <input
                type="text"
                placeholder="e.g. Toronto"
                className="w-full pb-2 border-none text-black"
              />
              <label className="block mb-4"> Location </label>
            </div>

            {/* Description */}
            <div className="flex flex-col-reverse mb-5">
              <textarea
                placeholder="Add job description..."
                rows={6}
                className="w-full pb-2 border-none text-black"
              ></textarea>
              <label className="block mb-4"> Job Description </label>
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-4 text-gray-900 dark:text-white">Upload file</label>
              <input className="block mb-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" multiple />
              <div className="flex flex-col-reverse gap-2 mb-7">
                <span className="flex items-center justify-between">
                  website-information-architecture.pdf
                  <XMarkIcon className="w-6 cursor-pointer" />
                </span>

                <span className="flex items-center justify-between">
                  website-logo.png
                  <XMarkIcon className="w-6 cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <CreateApplication msg="Create Application"/>
        </form>
      </div>
    </div>
  )
}