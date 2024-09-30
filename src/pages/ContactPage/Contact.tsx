import PageImageTitle from "../../components/PageImageTitle/PageImageTitle";
import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div>
      <PageImageTitle Location={"Contact"} />
      <div style={{ padding: "50px 20px" }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={20} lg={16}>
            <Card style={{ borderRadius: "8px" }}>
              
              <Row gutter={16}>
                {/* Contact Information Section */}
                <Col xs={24} sm={12} style={{ marginBottom: "10px"}}>
                  <h3 className="font-semibold text-xl text-[#177C82]">Contact Information</h3>
                  <p className="font-semibold text-md text-[#177C82]">
                    <EnvironmentOutlined /> 123 Business Avenue, City, Country
                  </p>
                  <p className="font-semibold text-md text-[#177C82]">
                    <PhoneOutlined /> +123 456 7890
                  </p>
                  <p className="font-semibold text-md text-[#177C82]">
                    <MailOutlined /> contact@company.com
                  </p>
                </Col>

                {/* Contact Form Section */}
                <Col xs={24} sm={12}>
                  <Form
                    name="contact"
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input placeholder="Your Name" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                      ]}
                    >
                      <Input placeholder="Your Email" />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label="Message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message",
                        },
                      ]}
                    >
                      <Input.TextArea placeholder="Your Message" rows={4} />
                    </Form.Item>

                    <Form.Item>
                      <Button style={{background:"#177C82", color:"#fff"}} htmlType="submit" block>
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
