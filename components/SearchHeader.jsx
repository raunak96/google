import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const SearchHeader = ({ searchQuery }) => {
	const router = useRouter();
	const [query, setQuery] = useState(searchQuery);
	const inputRef = useRef(null);

	useEffect(() => {
		setQuery(searchQuery);
	}, [searchQuery]);

	const handleSearch = e => {
		e.preventDefault();
		inputRef.current.blur();
		if (!query) return;
		router.push(`/search?q=${query}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex items-center w-full p-6">
				<Image
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					className="cursor-pointer"
					onClick={() => router.push("/")}
				/>
				<form
					className="flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full max-w-3xl shadow-md hover:shadow-lg"
					onSubmit={handleSearch}>
					<input
						ref={inputRef}
						type="text"
						className="flex-grow w-full focus:outline-none"
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
					<XIcon
						className="h-7 text-gray-400 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
						onClick={() => setQuery("")}
					/>
					<MicrophoneIcon className="h-6 mr-3 text-[#4285f4] hidden sm:block border-l-2 border-gray-300 pl-4" />
					<SearchIcon
						className="hidden h-6 text-[#4285f4] sm:block cursor-pointer"
						onClick={handleSearch}
					/>
				</form>
				<Avatar url="/avatar.png" className="ml-auto" />
			</div>
			<HeaderOptions />
		</header>
	);
};

export default SearchHeader;
