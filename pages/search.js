import axios from "axios";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import dummyData from "../mockData";

const SearchPage = ({ data }) => {
	const { query } = useRouter();
	const searchQuery = query?.q ?? "";
	return (
		<>
			<Meta title={`${searchQuery} - Google Search`} />
			<div>
				<SearchHeader searchQuery={searchQuery} />
				<SearchResults results={data} />
			</div>
		</>
	);
};

export default SearchPage;

export const getServerSideProps = async cxt => {
	const useDummyData = true;
	const { query } = cxt;
	const { q, pageNumber } = query;
	if (useDummyData) return { props: { data: dummyData } };
	// const { data } = await axios.get(
	// 	`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${q}&start=${pageNumber}`
	// );

	// return {
	// 	props: { data },
	// };
};
