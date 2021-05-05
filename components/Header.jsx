import Avatar from "./Avatar";

const Header = () => {
	return (
		<header className="flex w-full p-5 justify-between text-sm text-gray-700">
			<div className="flex space-x-4 items-center">
				<p className="link">About</p>
				<p className="link">Store</p>
			</div>
			<div className="flex space-x-4 items-center">
				<p className="link">Gmail</p>
				<p className="link">Images</p>
				<svg
					className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
					focusable="false"
					viewBox="0 0 24 24">
					<path
						fill="#5f6368"
						d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
				</svg>
				<Avatar url="/avatar.png" />
			</div>
		</header>
	);
};

export default Header;
