import LocationComboBox from "@/app/ui/applications/location-combobox";
import CreateApplication from "./buttons";
import StageDropdown from "./stage-dropdown";

export default function CreateForm() {
  return (
    <form>
      <fieldset>
        <div className="md:flex md:flex-row md:gap-5">
          {/* Company */}
          <div className="mb-5 md:w-1/2">
            <label className="block mb-2"> Company </label>
            <input
              type="text"
              placeholder="e.g. Jane Street"
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
            />
          </div>

          {/* Position */}
          <div className="mb-5 md:w:1/2 md:flex-grow">
            <label className="block mb-2"> Position </label>
            <input
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
              type="date"
              placeholder=""
              className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
            />
          </div>

          {/* Stage */}
          <div className="mb-5 md:w-1/4 md:flex-grow">
            <label className="block mb-2"> Stage </label>
            <StageDropdown />
          </div>

          {/* Link */}
          <div className="mb-5 md:w-1/2 md:flex-row">
            <label className="block mb-2"> Job Posting URL </label>
            <input
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
              <LocationComboBox />
            </div>

          </div>

          {/* Ref-id */}
          <div className="mb-5 md:w-1/4">
            <label className="block mb-2"> Job Id </label>
            <input
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
            placeholder="Add job description..."
            rows={6}
            className={`bg-yellow-50 text-black text-sm rounded-lg block w-full p-2.5 `}
          ></textarea>
        </div>

        {/* File Upload */}
        {/*
      <div>
        <label className="block mb-2">Upload file</label>
        <input className="block mb-2 w-full text-sm rounded-lg cursor-pointer bg-yellow-50 text-black" type="file" multiple />
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
      </div> */}

        <CreateApplication msg="Create Application" />
      </fieldset>

    </form>
  )
}