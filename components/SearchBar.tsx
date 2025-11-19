"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SuperSearchBar from "./SuperSearchBar";

export default function SearchBar() {
  const [superSearch, setSuperSearch] = useState(false);

  return !superSearch ? (
    <div className="flex  w-[598px] h-14 mt-50 rounded-4xl bg-white border border-gray-300 shadow-sm">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 ml-4 mt-4 inline-block" />
      <div
        className="flex items-center h-full flex-1 p-2 font-sans font-light text-[#868686] hover:cursor-text"
        onClick={() => setSuperSearch(true)}
      >
        <p>Search our data, reports, trends or ask a question...</p>
      </div>
    </div>
  ) : (
    <SuperSearchBar onClose={() => setSuperSearch(false)} />
  );
}
