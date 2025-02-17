import LocationComboBox from "@/app/ui/applications/location-combobox";
import StageDropdown from "./stage-dropdown";
import { Application, Stages } from "@/app/lib/definitions";
import { getStageColor } from "@/app/lib/utils";
import Link from "next/link";
import { Button } from "../button";

export default function EditForm({
  data,
  readOnly,
}: {
  data: Application;
  readOnly: boolean;
}) {
  return (
    <form>
      <fieldset disabled={readOnly}>
        <div className="md:flex md:flex-row md:gap-5">
          {/* Company */}
          <div className="mb-5 md:w-1/2">
            <label className="block mb-2"> Company </label>
            <input
              type="text"
              placeholder="e.g. Jane Street"
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? 'hidden' : ''}`}
              defaultValue={data.company}
            />
            <p
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? '' : 'hidden'}`}
            >
              {data.company ?? 'null'}
            </p>
          </div>

          {/* Position */}
          <div className="mb-5 md:w:1/2 md:flex-grow">
            <label className="block mb-2"> Position </label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly ? 'hidden' : ''}`}
              defaultValue={data.position}
            />
            <p
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly ? '' : 'hidden'}`}
            >
              {data.position ?? 'null'}
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-row md:gap-5">
          {/* Application date */}
          <div className="mb-5 md:w-1/4">
            <label className="block mb-2"> Date </label>
            <input
              type="date"
              placeholder=""
              defaultValue={data.apply_date == null ? undefined : new Date(data.apply_date).toISOString().split('T')[0]}
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly ? 'hidden' : ''}`}
            />
            <input
              type="date"
              placeholder=""
              defaultValue={data.apply_date == null ? undefined : new Date(data.apply_date).toISOString().split('T')[0]}
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly ? '' : 'hidden'}`}
              disabled={true}
            />
          </div>

          {/* Stage */}
          <div className="mb-5 md:w-1/4 md:flex-grow">
            <label className="block mb-2"> Stage </label>
            <StageDropdown defaultSelected={getStageColor(data.stage) as Stages} />
          </div>

          {/* Link */}
          <div className="mb-5 md:w-1/2 md:flex-row">
            <label className="block mb-2"> Job Posting URL </label>
            <input
              type="text"
              placeholder="e.g. linked.in/jobs/1231"
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 overflow-hidden text-ellipsis ${readOnly === true ? 'hidden' : ''}`}
              defaultValue={data.link}
            />
            <p
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 overflow-hidden text-ellipsis ${readOnly === true ? '' : 'hidden'}`}
            >
              {data.link ?? 'null'}
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-row md:gap-5">
          {/* Location */}
          <div className="mb-5 md:w-3/4 md:flex-grow">
            <label className="block mb-2"> Location </label>
            <div className={`${readOnly === true ? 'hidden' : ''}`}>
              <LocationComboBox defaultSelected={data.location_colors} readOnly={false} />
            </div>
            <div className={`${readOnly === true ? '' : 'hidden'}`}>
              <LocationComboBox defaultSelected={data.location_colors} readOnly={true} />
            </div>

          </div>

          {/* Ref-id */}
          <div className="mb-5 md:w-1/4">
            <label className="block mb-2"> Job Id </label>
            <input
              type="text"
              placeholder="e.g. a2nb3b"
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? 'hidden' : ''}`}
              defaultValue={data.ref_id}
            />
            <p
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? '' : 'hidden'}`}
            >
              {data.ref_id ?? 'null'}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block mb-2"> Job Description </label>
          <textarea
            placeholder="Add job description..."
            rows={6}
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? 'hidden' : ''}`}
          ></textarea>
          <textarea
            readOnly={true}
            rows={6}
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? '' : 'hidden'}`}
            defaultValue={data.description ?? 'null'}
          >
          </textarea>
        </div>

      </fieldset>
      <div className={`mt-6 flex justify-between gap-4 ${readOnly ? 'hidden' : ''}`}>
        <Link
          href="/dashboard/applications"
          className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400"
        >
          Cancel
        </Link>
        <Button type="submit">Update Application</Button>
      </div>
    </form>
  )
}