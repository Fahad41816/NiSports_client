/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  SortDescendingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegistrationUserMutation } from "../../Redux/Feature/Auth/AuthApi";
import { toast, Toaster } from "sonner";

const Registation = () => {
  const [RegUser] = useRegistrationUserMutation();

  const Navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    const UserData = {
      name: values.Name,
      address: values.Address,
      email: values.Email,
      password: values.password,
      phone: values.Phone,
      role: "user",
    };

    try {
      const Res = await RegUser(UserData).unwrap();
      console.log(Res)
      toast.success(Res.message);

      setTimeout(() => {
        Navigate("/Login");
      }, 1500);
    } catch (error: any) {
      console.log(error)
      if(error.data.message == "Duplicate Value"){
        toast.error("User Allready Exists");
        return 
      }
      toast.error(error.data.message);
    }
  };

  return (
    <section className="w-full">
      <Toaster richColors position="top-center" />
      <Form
        title="login form"
        name="logn"
        initialValues={{ remember: true }}
        style={{
          maxWidth: 360,
          alignItems: "center",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "100px",
          border: "1px solid #ecf0f1",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 5px",
          background: "#218390",
        }}
        onFinish={onFinish}
      >
        <h1 className="text-2xl font-bold mb-5 text-center text-white">
          Registration Form
        </h1>
        <Form.Item
          name="Name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            prefix={<SortDescendingOutlined />}
            type="text"
            placeholder="Name.."
          />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="Phone"
          rules={[{ required: true, message: "Please input your Phone!" }]}
        >
          <Input
            prefix={<PhoneOutlined />}
            type="number"
            placeholder="Phone Number"
          />
        </Form.Item>
        <Form.Item
          name="Address"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <Input prefix={<HomeOutlined />} type="text" placeholder="Address" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#fff" }}>Remember me</Checkbox>
            </Form.Item>
            <a className="text-white">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="default" htmlType="submit">
            Sing Up
          </Button>
          <p className="text-center mt-5 text-white">
            or <NavLink to={"/Login"}>Login now!</NavLink>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Registation;
