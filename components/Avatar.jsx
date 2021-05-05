const Avatar = ({ url, className }) => {
	return (
		<img
			loading="lazy"
			src={url}
			alt="profile-pic"
			layout="fill"
			className={`h-8 w-8 cursor-pointer rounded-full transition duration-150 transform hover:scale-125 ${className}`}
		/>
	);
};

export default Avatar;
