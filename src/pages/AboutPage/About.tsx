import PageImageTitle from "../../components/PageImageTitle/PageImageTitle";
import { Row, Col, Card, Timeline, Avatar, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import ManIMage from "../../assets/images/Untitled design.png";

const { Title, Text } = Typography;

const About = () => {
  return (
    <div>
      <PageImageTitle Location={"About Us"} />

      <div style={{ padding: "50px 20px" }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={20} lg={16}>
            <Title level={2} style={{ textAlign: "center" }}>
              About Us
            </Title>

            {/* Mission Statement Section */}
            <section style={{ marginBottom: "40px" }}>
              <Title level={3}>Our Mission</Title>
              <Text>
                Our platform is dedicated to providing seamless and convenient
                access to sports facilities, helping people stay active and
                engage in their favorite sports. We believe in the power of play
                and are committed to making sports more accessible to everyone.
              </Text>
            </section>

            {/* Team Section */}
            <section style={{ marginBottom: "40px" }}>
              <Title level={3}>Meet Our Team</Title>
              <Row gutter={16} justify="center">
                {/* Team Member 1 */}
                <Col xs={24} sm={12} md={8}>
                  <Card style={{ textAlign: "center" }}>
                    <Avatar size={100} src={ManIMage} />
                    <Title level={4} style={{ marginTop: "20px" }}>
                      Nahidul Islam Fahad
                    </Title>
                    <Text>CEO & Founder</Text>
                    <Text style={{ display: "block", marginTop: "10px" }}>
                      Passionate about sports and tech, fahad has led the
                      company from its inception to its current success.
                    </Text>
                  </Card>
                </Col>
                {/* Team Member 2 */}
              </Row>
            </section>

            {/* History & Milestones Section */}
            <section style={{ marginBottom: "40px" }}>
              <Title level={3}>Our Journey</Title>
              <Timeline mode="left">
                <Timeline.Item label="2018">
                  Platform idea conceived
                </Timeline.Item>
                <Timeline.Item label="2019">
                  Initial funding secured
                </Timeline.Item>
                <Timeline.Item label="2020">Platform launched</Timeline.Item>
                <Timeline.Item label="2022">
                  Reached 1 million users
                </Timeline.Item>
                <Timeline.Item label="2023">
                  Expanded to new regions
                </Timeline.Item>
              </Timeline>
            </section>

            {/* Contact Information Section */}
            <section>
              <Title level={3}>Contact Us</Title>
              <Row gutter={16}>
                <Col xs={24} sm={8}>
                  <EnvironmentOutlined /> 123 Agrabad, Cth, Bangladesh
                </Col>
                <Col xs={24} sm={8}>
                  <PhoneOutlined /> 01731321879
                </Col>
                <Col xs={24} sm={8}>
                  <MailOutlined /> Nifahad@company.com
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
