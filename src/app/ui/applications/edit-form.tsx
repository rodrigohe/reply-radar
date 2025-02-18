'use client';

import LocationComboBox from "@/app/ui/applications/location-combobox";
import StageDropdown from "./stage-dropdown";
import { Application, Stages } from "@/app/lib/definitions";
import { getStageColor } from "@/app/lib/utils";
import Link from "next/link";
import { Button } from "../button";
import { State, updateApplication } from "@/app/lib/actions";
import { useActionState } from "react";

export default function EditForm({
  data,
  readOnly,
}: {
  data: Application;
  readOnly: boolean;
}) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(updateApplication, initialState);
  console.log(state.errors);

  return (
    <form action={formAction}>
      <fieldset disabled={readOnly}>
        <div className="md:flex md:flex-row md:gap-5">
          {/* Company */}
          <div className="mb-5 md:w-1/2">
            <label className="block mb-2"> Company </label>
            <input
              id="company"
              name="company"
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
            <div id="company-error" aria-live="polite" aria-atomic="true">
              {state.errors?.company &&
                state.errors?.company.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Position */}
          <div className="mb-5 md:w:1/2 md:flex-grow">
            <label className="block mb-2"> Position </label>
            <input
              id="position"
              name="position"
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
            <div id="position-error" aria-live="polite" aria-atomic="true">
              {state.errors?.position &&
                state.errors?.position.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row md:gap-5">
          {/* Application date */}
          <div className="mb-5 md:w-1/4">
            <label className="block mb-2"> Date </label>
            <input
              id="apply_date"
              name="apply_date"
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
            <div id="apply_date-error" aria-live="polite" aria-atomic="true">
              {state.errors?.apply_date &&
                state.errors?.apply_date.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
              id="link"
              name="link"
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
            <div id="link-error" aria-live="polite" aria-atomic="true">
              {state.errors?.link &&
                state.errors?.link.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row md:gap-5">
          {/* Location */}
          <div className="mb-5 md:w-3/4 md:flex-grow">
            <label className="block mb-2"> Location </label>
            <div>
              <LocationComboBox defaultSelected={data.location_colors} readOnly={readOnly} />
            </div>
            <div id="location-error" aria-live="polite" aria-atomic="true">
              {state.errors?.location &&
                state.errors?.location.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
            <div id="location_colors-error" aria-live="polite" aria-atomic="true">
              {state.errors?.location_colors &&
                state.errors?.location_colors.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Ref-id */}
          <div className="mb-5 md:w-1/4">
            <label className="block mb-2"> Job Id </label>
            <input
              id="ref_id"
              name="ref_id"
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
            <div id="ref_id-error" aria-live="polite" aria-atomic="true">
              {state.errors?.ref_id &&
                state.errors?.ref_id.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block mb-2"> Job Description </label>
          <textarea
            id="description"
            name="description"
            placeholder="Add job description..."
            rows={6}
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? 'hidden' : ''}`}
            defaultValue={data.description}
          ></textarea>
          <textarea
            readOnly={true}
            rows={6}
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 ${readOnly === true ? '' : 'hidden'}`}
            defaultValue={data.description ?? 'null'}
          >
          </textarea>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors?.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <input type="hidden" name="id" value={data.id}></input>
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