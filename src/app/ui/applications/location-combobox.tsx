'use client';

import { SetStateAction, useState } from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { ChevronUpDownIcon, XMarkIcon, CheckIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { colorClasses, defaultLocations } from "@/app/lib/utils";
import { LocationColors } from "@/app/lib/definitions";

export default function LocationComboBox({
  defaultSelected,
  readOnly = false,
}: {
  defaultSelected: LocationColors[] | null;
  readOnly?: boolean;
}) {
  console.log(defaultSelected)
  const [locations, setLocations] = useState(defaultLocations);
  const [selectedLocations, setSelectedLocations] = useState<LocationColors[]>(defaultSelected == null ? [] : defaultSelected);
  const [query, setQuery] = useState("");

  // Filter locations based on user input
  const filteredLocations =
    query === ""
      ? locations
      : locations.filter((location) =>
        location.name.toLowerCase().includes(query.toLowerCase())
      );

  // Check if query matches existing locations
  const isNewEntry = query.length > 0 && !locations.some((loc) => loc.name.toLowerCase() === query.toLowerCase());

  // Function to add a new location
  const addNewLocation = () => {
    if (!query) return;
    const newLocation = { name: query, color: colorClasses[Math.floor(Math.random() * colorClasses.length)] };
    setLocations([...locations, newLocation]);
    setSelectedLocations([...selectedLocations, newLocation]);
    setQuery("");
  };

  return (
    <div>
      <Combobox value={selectedLocations} onChange={setSelectedLocations} multiple disabled={readOnly}>
        <div className="relative">
          {/* Search Input with Selected Items */}
          <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-lg bg-yellow-50 py-1 px-2 min-h-[40px]">
            {selectedLocations.map((location) => (
              <div
                key={location.name}
                className={`flex items-center px-2 py-1 text-white text-sm rounded ${location.color}`}
              >
                {location.name}
                <button
                  className="ml-2 focus:outline-none"
                  onClick={() =>
                    setSelectedLocations((prev) =>
                      prev.filter((item) => item.name !== location.name)
                    )
                  }
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
            <ComboboxInput
              className="flex-1 focus:outline-none bg-transparent text-black text-sm"
              onChange={(event: { target: { value: SetStateAction<string>; }; }) => setQuery(event.target.value)}
              placeholder={readOnly ? '' : (selectedLocations?.length === 0 ? "Search locations..." : "")}
            />
            <ComboboxButton className="absolute inset-y-0 right-2 flex items-center">
              <ChevronUpDownIcon className="w-5 h-5 text-gray-500" />
            </ComboboxButton>
          </div>

          {/* Dropdown List */}
          <ComboboxOptions className="absolute mt-2 w-full text-sm bg-yellow-50 text-black rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {filteredLocations.map((location) => (
              <ComboboxOption
                key={location.name}
                value={location}
                className={({ focus }) =>
                  `relative cursor-pointer select-none px-4 py-2 ${focus ? "bg-blue-700 text-white" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center gap-2">
                    <span className={`h-4 w-4 ${location.color} rounded-full`} />
                    <span className="flex-1">{location.name}</span>
                    {selected && <CheckIcon className="w-5 h-5 text-green-700" />}
                  </div>
                )}
              </ComboboxOption>
            ))}
            {/* Show "Add new: {query}" if no match exists */}
            {isNewEntry && (
              <div
                className="flex items-center cursor-pointer px-4 py-2 text-green-700 hover:bg-blue-700 hover:text-white"
                onClick={addNewLocation}
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Add new: <span className="font-bold ml-1">{query}</span>
              </div>
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
      <input type="hidden" name="location" value={selectedLocations.map(l => l.name).join(', ')}></input>
      <input type="hidden" name="location_colors" value={selectedLocations.length > 0 ? JSON.stringify(selectedLocations) : ''}></input>
    </div>
  );
}
