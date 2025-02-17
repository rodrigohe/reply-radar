'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { stageOptions } from "@/app/lib/utils";
import { useState } from "react";
import { Stages } from "@/app/lib/definitions";


export default function StageDropdown({
  defaultSelected,
}: {
  defaultSelected?: Stages;
}) {
  // const [stages, setStages] = useState(stageOptions);
  const [selectedStage, setSelectedStage] = useState(defaultSelected);

  return (
    <div>
      <Listbox value={selectedStage} onChange={setSelectedStage}>
        <div className="relative">
          <ListboxButton className="relative w-full rounded-lg bg-yellow-50 py-1 px-2 text-left text-sm text-black min-h-[40px]">
            <div className="flex items-center gap-2">
              <span className={`h-4 w-4 ${selectedStage?.color} rounded-full`} />
              <span className="flex-1">{selectedStage?.name}</span>
            </div>
            <ChevronDownIcon className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-black" />
          </ListboxButton>

          <ListboxOptions className="absolute mt-2 w-full text-sm bg-yellow-50 text-black rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {stageOptions.map((stage) => (
              <ListboxOption
                key={stage.name}
                value={stage}
                className={({ focus }) =>
                  `relative cursor-pointer select-none px-4 py-2 ${focus ? "bg-blue-700 text-white" : ""
                  }`
                }>
                {({ selected }) => (
                  <div className="flex items-center gap-2">
                    <span className={`h-4 w-4 ${stage.color} rounded-full`} />
                    <span className="flex-1">{stage.name}</span>
                    {selected && <CheckIcon className="w-5 h-5 text-green-700" />}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      <input type="hidden" name="stage" value={selectedStage?.name}></input>
    </div>
  );
}
