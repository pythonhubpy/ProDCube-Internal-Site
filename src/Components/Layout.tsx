import { FC } from "react";
import Column from "./Column";

const Layout: FC = (props) => {
	return (
		<Column width={"90%"}>
			{props.children}
		</Column>
	);
};

export default Layout;
