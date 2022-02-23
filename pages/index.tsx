import type { NextPage } from "next";
import Heading from "../src/Components/Heading";

const Home: NextPage = () => {
	return (
		<>
			<div>
				<Heading className={"heading"}>Home Page</Heading>
			</div>
		</>
	);
};

export default Home;
