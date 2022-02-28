import * as React from "react";
import { FC } from "react";
import Column from "../src/Components/Column";
import Editor from "../src/Components/Editor";
import styled from "styled-components";


const Home: FC = () => {
	return (
		<Column>
			<TitleInput />
			<Editor />
		</Column>
	);
};

export default Home;


const TitleInput = styled.input`

`;
