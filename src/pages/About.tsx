import { Layout, Typography, Space, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", fontSize: "20px" }}>About Me</div>
      </Header>

      <Content style={{ padding: "2rem", textAlign: "center" }}>
        <Title level={2}>Hi, I'm Minh Chủ 👋</Title>
        <Paragraph>
          I'm a passionate software developer who loves building web applications and learning new technologies.
          I enjoy solving problems, creating beautiful UIs, and working with modern frameworks like React and TypeScript.
        </Paragraph>

        <Title level={3} style={{ marginTop: "2rem" }}>Contact Me</Title>

        <Space direction="vertical" size="middle" style={{ marginTop: "1rem" }}>
          <Button
            type="link"
            icon={<MailOutlined />}
            href="mailto:your.email@example.com"
          >
            your.email@example.com
          </Button>

          <Button
            type="link"
            icon={<PhoneOutlined />}
            href="tel:+1234567890"
          >
            +1 (234) 567-890
          </Button>

          <Button
            type="link"
            icon={<GithubOutlined />}
            href="https://github.com/your-github-username"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            type="link"
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            type="link"
            icon={<FacebookOutlined />}
            href="https://facebook.com/your-facebook-profile"
            target="_blank"
          >
            Facebook
          </Button>
        </Space>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Minh Chủ. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default About;
