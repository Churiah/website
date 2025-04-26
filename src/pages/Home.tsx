import React, { useState } from "react";
import {
    Layout,
    Menu,
    Typography,
    Card,
    Row,
    Col,
    Tag,
    Button,
    Drawer,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const skills = ["React", "TypeScript", "Node.js", "CSS", "HTML", "Git"];

const projects = [
    {
        title: "Google Drive Audio Player",
        description: "An app to listen to music in the browser streaming from my drive.",
        link: "player",
    },
];

function Detail() {
    const isOnline = useOnlineStatus();
    return (
        <Paragraph>
            {isOnline ? 'Part time developer, full-time student. Also connected.' : 'Part time developer, full-time student. And also offline.'}
        </Paragraph>
    );
}

const Home = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    return (
        <Layout>
            <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "white", fontSize: "20px" }}>My Portfolio</div>
                <Button
                    type="text"
                    icon={<MenuOutlined style={{ color: "white", fontSize: 20 }} />}
                    onClick={() => setDrawerVisible(true)}
                />
            </Header>

            <Drawer
                title="Navigation"
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
            >
                <Menu mode="vertical">
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Projects</Menu.Item>
                    <Menu.Item key="3">Skills</Menu.Item>
                </Menu>
            </Drawer>

            <Content style={{ padding: "2rem" }}>
                <Title level={2}>Welcome to my website!</Title>
                <Detail />
                <Link to='about'>
                    <Button >About me</Button>
                </Link>


                <Title level={3}>Applications</Title>
                <Row gutter={[16, 16]}>
                    {projects.map((project, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card title={project.title} variant={"outlined"}>
                                <Paragraph>{project.description}</Paragraph>
                                <Link to={project.link}>
                                    <Button
                                        type="primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Go to app
                                    </Button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Title level={3} style={{ marginTop: "2rem" }}>Skills</Title>
                <div>
                    {skills.map((skill, index) => (
                        <Tag color="blue" key={index} style={{ marginBottom: 8 }}>
                            {skill}
                        </Tag>
                    ))}
                </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
                © {new Date().getFullYear()} Churiah. All rights reserved.
            </Footer>
        </Layout>
    )
}

export default Home