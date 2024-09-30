/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; 
import { useLoginUserMutation } from "../../Redux/Feature/Auth/AuthApi";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Feature/Auth/AuthSlice";
import { toast, Toaster } from "sonner";
const Login = () => {

  const [LoginUser] = useLoginUserMutation()

   const dispatch = useDispatch()

   const Navigate = useNavigate()
   const location = useLocation()

   console.log(location)

  // const decoded  = jwtDecode(data.data.splite(" ")[1])
  // console.log(decoded)
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
  
    const UserData = {
      email: values.email,
      password: values.password,
    };
  
    try {
      // Call the login function and unwrap the result
      const Res = await LoginUser(UserData).unwrap();
      console.log(Res);
  
      // Check for any server-side error status
      if (Res.status === 500) {
        toast.error(Res.data.message );
        return;
      }
  
      // If the response is successful, decode the token and dispatch the user data
      const DecodedUserData = jwtDecode(Res.data.split(" ")[1]);
      dispatch(setUser({ user: DecodedUserData, Token: Res.data.split(" ")[1] }));
  
      toast.success("Login successful!");

      if(location.state){
        Navigate(location.state)
      }else{
        Navigate('/')
      }
     
    } catch (error: any) { 
      toast.error(error.data.message ); 
    }
  };
  

  return (
    <section className="w-full">
     <Toaster richColors  position="top-center" />
      <Form  
      title="login form"
        name="logn"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360, alignItems: "center", margin: 'auto', marginTop: '100px', marginBottom:'100px', border:'1px solid #ecf0f1', borderRadius:'10px', padding:'20px', boxShadow: '0px 0px 5px', background: '#218390',  }}
        onFinish={onFinish}
      >
        <h1 className="text-2xl font-bold mb-5 text-center text-white">Login Form</h1>
        <Form.Item
          name="email"
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
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color:"#fff"}}>Remember me</Checkbox>
            </Form.Item>
            <a className="text-white">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="default" htmlType="submit">
            Log in
          </Button>
          <p className="text-center mt-5 text-white">or <NavLink to={'/Registration'}>Register now!</NavLink></p>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Login;
