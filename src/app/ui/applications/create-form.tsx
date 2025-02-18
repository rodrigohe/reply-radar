'use client';

import LocationComboBox from "@/app/ui/applications/location-combobox";
import StageDropdown from "./stage-dropdown";
import Link from "next/link";
import { Button } from "../button";
import { createApplication, State } from "@/app/lib/actions";
import { useActionState } from "react";
import { defaultStageOption } from "@/app/lib/utils";

export default function CreateForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createApplication, initialState);

  return (
    <form action={formAction}>
      <div className="md:flex md:flex-row md:gap-5">
        {/* Company */}
        <div className="mb-5 md:w-1/2">
          <label className="block mb-2"> Company </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Jane Street"
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
            aria-describedby="company-error"
          />
          <div id="company-error" aria-live="polite" aria-atomic="true">
            {state.errors?.company &&
              state.errors.company.map((error: string) => (
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
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
          />
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
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
          />
        </div>

        {/* Stage */}
        <div className="mb-5 md:w-1/4 md:flex-grow">
          <label className="block mb-2"> Stage </label>
          <StageDropdown defaultSelected={defaultStageOption} />
        </div>

        {/* Link */}
        <div className="mb-5 md:w-1/2 md:flex-row">
          <label className="block mb-2"> Job Posting URL </label>
          <input
            id="link"
            name="link"
            type="text"
            placeholder="e.g. linked.in/jobs/1231"
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
          />
        </div>
      </div>

      <div className="md:flex md:flex-row md:gap-5">
        {/* Location */}
        <div className="mb-5 md:w-3/4 md:flex-grow">
          <label className="block mb-2"> Location </label>
          <div>
            <LocationComboBox defaultSelected={null}/>
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
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
          />
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
          className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
        ></textarea>
      </div>

      <div className="mt-6 flex justify-between gap-4">
        <Link
          href="/dashboard/applications"
          className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400"
        >
          Cancel
        </Link>
        <Button type="submit">Create Application</Button>
      </div>
    </form>
  )
}