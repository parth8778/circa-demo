import "./Login.scss";
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogin, resetAuthState } from "../../store/effect";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Messages } from "../../configs/messages";

function Login() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const authSubscription = useSelector((state: InitialState) => state.loginState)
  useEffect(() => {
    setLoading(authSubscription.isLoading);
    if (authSubscription?.data) {
      notification.success({
        message: 'Success',
        description: Messages.loginSuccess,
      });
      navigate('/dashboard');
      dispatch(resetAuthState());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSubscription]);


  const dispatch: Dispatch<any> = useDispatch();
  const onFinish = (values: any) => {
    dispatch(doLogin(values));
  };

  if (localStorage.getItem('authTokens')) {
    return <Navigate to="/dashboard" />;
  };

  return (
    <div className="login-page">
    <div className="login-box">
      <div className="illustration-wrapper">
        <img src={'https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700'} alt="Login"/>
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
