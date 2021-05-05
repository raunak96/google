import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSearch = e => {
		e.preventDefault();
		if (!query) return;
		router.push(`/search?q=${query}`);
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Header />
			<form className="flex flex-col flex-grow w-4/5 items-center mt-36">
				<Image
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={100}
					width={300}
				/>
				<div className="flex mt-5 w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						className="focus:outline-none flex-grow"
					/>
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={handleSearch} className="btn">
						Google Search
					</button>
					<button onClick={handleSearch} className="btn">
						I'm feeling lucky
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}
