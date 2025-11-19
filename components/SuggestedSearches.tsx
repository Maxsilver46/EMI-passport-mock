import SearchArrowIcon from "./SearchArrowIcon";

export default function SuggestedSearches() {
  const searches = [
    "What are the snacking trends in the UK?",
    "What factors are driving the growth of alcoholic drinks globally?",
    "What trends are reshaping the retail landscape globally?",
  ];

  return (
    <div className="px-4">
      <h2 className="text-[#6b6b6b] font-light text-sm">Suggested searches</h2>
      <ul>
        {searches.map((search, index) => (
          <li
            key={index}
            className="flex items-center mx-2 my-1 p-2 rounded-md cursor-pointer border border-transparent
               hover:shadow-md transition-all hover:border-gray-300 duration-200 "
          >
            <SearchArrowIcon />
            <span className="ml-2 text-[#272727] font-light text-sm">
              {search}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
