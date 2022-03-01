import * as React from "react";
import {FC} from "react";
// import Column from "../src/Components/Column";
import styled from "styled-components";
import Column from "../src/Components/Column";
import fakePostJson from "../Assets/FakeData.json";
import Image from "next/image";
import Row from "../src/Components/Row";

const Home: FC = () => {
    return (
        <Column crossAxisAlignment={"stretch"} style={{maxWidth: "100%"}}>
            <RecentPostsHeading>Recent Posts</RecentPostsHeading>
            <Grid>
                {
                    fakePostJson.map((value: FakeDataType, index: number) => {
                        return (
                            <PostsCard key={index}>
                                <Row mainAxisAlignment={"start"}>
                                    <BlogCoverImage src={value.imageUrl} alt={"Blog Cover Image"} width={"172px"}
                                                    height={"172px"} objectFit={"cover"}
                                    />
                                    <Column style={{marginLeft: "18px"}} crossAxisAlignment={"start"}
                                            mainAxisAlignment={"space-between"}>
                                        <Column crossAxisAlignment={"start"} mainAxisAlignment={"start"}>
                                            <CardTitle>{value.name}</CardTitle>
                                            <DescriptionHolder>{value.description}</DescriptionHolder>
                                        </Column>
                                        <SubTitle>{value.author}, <RoleHolder>{value.role}</RoleHolder></SubTitle>
                                        <DateHolder>{value.createdAt}</DateHolder>
                                    </Column>
                                </Row>
                            </PostsCard>
                        );
                    })
                }
            </Grid>
        </Column>
    );
};

interface FakeDataType {
    name: string;
    imageUrl: string;
    author: string;
    createdAt: string;
    role: string;
    description: string;
}

export default Home;


const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const PostsCard = styled.div`
  height: 200px;
  width: 500px;
  background: white;
  border-radius: 12px;
  padding: 18px 18px;
  cursor: pointer;
`;


const RecentPostsHeading = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: left;
  color: white;
`;

const BlogCoverImage = styled(Image)`
  border-radius: 12px;
`;


const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.7rem;
  margin-top: 0;
  margin-bottom: 8px;
  color: #1C1E21;
`;

const SubTitle = styled.p`
  line-height: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 1.3rem;
`;

const RoleHolder = styled.span`
  line-height: 0;
  margin: 0;
  color: rgba(28, 30, 33, 0.35);
  font-size: 1rem;
`;

const DescriptionHolder = styled.p`
  line-height: 1.2rem;
  font-size: 0.9rem;
  margin: 0;
  color: rgba(28, 30, 33, 0.5);
`;

const DateHolder = styled.p`
  line-height: 1rem;
  font-size: 0.8rem;
  margin-bottom: -6px;
  color: rgba(28, 30, 33, 0.3);
`;
