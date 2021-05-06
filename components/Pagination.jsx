import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Pagination = ({ start, query }) => {
	return (
		<div className="flex justify-evenly max-w-lg text-blue-700 mb-10">
			{start >= 10 && (
				<Link href={`/search?q=${query}&start=${start - 10}`}>
					<div className="flex flex-col items-center cursor-pointer hover:underline">
						<ChevronLeftIcon className="h-5" />
						<p>Previous</p>
					</div>
				</Link>
			)}
			<Link href={`/search?q=${query}&start=${start + 10}`}>
				<div className="flex flex-col items-center cursor-pointer hover:underline">
					<ChevronRightIcon className="h-5" />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
};

export default Pagination;
