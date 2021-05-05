import {
	DotsVerticalIcon,
	MapIcon,
	NewspaperIcon,
	PhotographIcon,
	PlayIcon,
	SearchIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

const HeaderOptions = () => {
	return (
		<div className="flex justify-evenly w-full text-gray-600 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:ml-52 border-b">
			<div className="flex space-x-6">
				<HeaderOption Icon={SearchIcon} label="All" selected />
				<HeaderOption Icon={PhotographIcon} label="Images" />
				<HeaderOption Icon={PlayIcon} label="Videos" />
				<HeaderOption Icon={NewspaperIcon} label="Newzz" />
				<HeaderOption Icon={MapIcon} label="Maps" />
				<HeaderOption Icon={DotsVerticalIcon} label="More" />
			</div>
			<div className="flex space-x-4">
				<p className="link">Settings</p>
				<p className="link">Tools</p>
			</div>
		</div>
	);
};

export default HeaderOptions;
