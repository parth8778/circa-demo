import "./Login.scss";
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);
    fetch('https://deveppopay.b2clogin.com/deveppopay.onmicrosoft.com/B2C_1A_ROPC_Auth/oauth2/v2.0/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
        'Cookie': 'x-ms-cpim-sso:deveppopay.onmicrosoft.com_0=m1.Ux1P6Bb+IFOZq1d1.0KTY+w6nnvZiIaYHAevIjQ==.0./dHDHv8WKuWCFemi9n56g65/gVURFEAhrHbGcMi8MEoeqK8RRIL65aRjPiM+nDvUI6ondkvR08bnSJtA/Q+M5JSRUWKu4OtuvodpQqeu3OO/0Ija3gDRA5E2ybjnCvkoSZtTtWUUpXmll9i3AFU/oBUOmDqXTBJF1NK6SSp0doq1/ixA7ZGuLwESzOd7LZqmyrq6vB0BpaN5JrEAW0unpNldY991wXDTNzDMPTgYNP8='
      },
      body: new URLSearchParams({
        client_id: '742dbeaa-009e-425b-875b-cb2dcc18fee4',
        grant_type: 'password',
        response_type: 'token id_token',
        scope: 'openid 742dbeaa-009e-425b-875b-cb2dcc18fee4 offline_access profile',
        username: values?.email, // 'sabarish.kumar@usistech.com',
        password: values?.password // 'aA8870542848',
      })
    }).then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data?.error) {
        const { error, error_description } = data;
        notification['error']({
          message: error,
          description: error_description,
        });
        return;
      }
      if (data?.id_token) {
        localStorage.setItem('authTokens', JSON.stringify(data));
        navigate('/dashboard');
      }
    }).catch((e) => {
      notification['error']({
        message: 'Error',
        description:
          'Something went wrong!',
      });
      setLoading(false);
    });
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
