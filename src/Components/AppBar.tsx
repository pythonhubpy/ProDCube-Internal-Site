import {FC} from "react";
import Image from "next/image";
import Row from "./Row";
import styled from "styled-components";
import Logo from "../../public/images/Logo.png";

const AppBar: FC = () => {
    return (
        <Row height={"70px"} mainAxisAlignment={"space-between"} padding={"5px 20px"} style={{maxHeight: "70px"}}>
            <HoveredImage src={Logo} alt={"ProDCube Logo"} height={"35px"} width={"18px"}/>
            <AppBarMenu>
                <li>
                    <a href="#">Home</a>
                </li>
                <Row mainAxisAlignment={"start"} crossAxisAlignment={"start"}>
                    <a href="#" style={{marginRight: "12px"}}>John Doe</a>
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  color: white;

  li {
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
  }

  li:nth-child(1) {
    margin-right: 2.5rem;
    padding: 0 12px;
  }

  li:hover {
    background: whitesmoke;
    border-radius: 4px;
    color: #1C1E21;
    transition: all 0.3s ease;
  }
`;


const CircleAvatar = styled(Image)`
  border-radius: 10px;
`;


const HoveredImage = styled(Image)`
  cursor: pointer;
`;

