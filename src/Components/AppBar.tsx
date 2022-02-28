import { FC } from "react";
import Image from "next/image";
import Row from "./Row";
import styled from "styled-components";
import Logo from "../../public/images/Logo.png";

const AppBar: FC = () => {
	return (
		<Row height={"70px"} mainAxisAlignment={"space-between"} padding={"5px 20px"} style={{ maxHeight: "70px" }}>
			<HoveredImage src={Logo} alt={"ProDCube Logo"} height={"40px"} width={"20px"} />
			<AppBarMenu>
				<li>
					<a href="#">Home</a>
				</li>
				<Row>
					<a href="#" style={{ marginRight: "10px" }}>John Doe</a>
					<CircleAvatar
						src={"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"}
						alt={"Profile Picture"}
						width={"30px"}
						height={"30px"}
					/>
				</Row>
			</AppBarMenu>
		</Row>
	);
};

export default AppBar;


const AppBarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex: 0.2;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  li {
    cursor: pointer;
  }

  li a {
    text-decoration: none;
  }
`;


const CircleAvatar = styled(Image)`
  border-radius: 10px;
`;


const HoveredImage = styled(Image)`
  cursor: pointer;
`;

