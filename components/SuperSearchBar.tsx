import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SuggestedSearches from "./SuggestedSearches";
import ArrowIcon from "./ArrowIcon";
import { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function SuperSearchBar({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);
  return (
    <div
      ref={ref}
      className="relative flex flex-col w-[598px] h-[216px] mt-50 rounded-4xl bg-white shadow-sm"
    >
      <div className="absolute inset-0 rounded-4xl border border-blue-500 animate-drawBorder pointer-events-none"></div>
      <div className="flex h-14 w-full">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 ml-4 mt-4 inline-block " />
        <input
          type="text"
          autoFocus
          placeholder="Search our data, reports, trends or ask a question..."
          className="flex-1 p-2 focus:outline-none font-sans font-light"
        />
        <div className="bg-blue-300 rounded-4xl flex items-center justify-center w-10 h-10 m-2 animate-fadeIn">
          <ArrowIcon />
        </div>
      </div>
      <SuggestedSearches />
    </div>
  );
}
