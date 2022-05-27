import "./Login.scss";
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../store/effect";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const authSubscription = useSelector((state: InitialState) => state.loginState)
  useEffect(() => {
    setLoading(authSubscription.isLoading);
    if (authSubscription?.data) {
      notification.success({
        message: 'Success',
        description: 'Login Successfully.',
      });
      navigate('/dashboard');
    }
  }, [authSubscription]);


  const dispatch: Dispatch<any> = useDispatch();
  const onFinish = (values: any) => {
    dispatch(doLogin(values));
  };

  return (
    <div className="login-page">
    <div className="login-box">
      <div className="illustration-wrapper">
        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
      </div>
      <Form
        name="login-form"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <p className="form-title">Welcome back</p>
        <p>Login to the Dashboard</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button loading={isLoading} type="primary" htmlType="submit" className="login-form-button">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
  );
}

export default Login;
