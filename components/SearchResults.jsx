import { useRouter } from "next/router";
import Pagination from "./Pagination";

const SearchResults = ({ results }) => {
	const { query } = useRouter();
	const searchQuery = query?.q ?? "";
	const start = +(query?.start ?? 0);

	return (
		<div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
			<p className="text-gray-600 text-md mb-5 mt-3">
				About {results?.searchInformation?.formattedTotalResults}{" "}
				results ({results?.searchInformation?.formattedSearchTime}{" "}
				seconds)
			</p>
			{results?.items?.map(result => (
				<div key={result.link} className="max-w-xl mb-8">
					<a href={result.link} className="group">
						<p className="text-sm">{result.formattedUrl}</p>
						<h2 className="text-xl truncate text-[#1a0dab] font-medium group-hover:underline">
							{result.title}
						</h2>
					</a>
					<p className="line-clamp-2">{result.snippet}</p>
				</div>
			))}
			<Pagination start={start} query={searchQuery} />
		</div>
	);
};

export default SearchResults;
