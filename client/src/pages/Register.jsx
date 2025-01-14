import React from "react";
import { Form, Button } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = () => {
    console.log('User registered');
  };

  return (
    <div className="register-container"> {/* Added a new container class */}
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome to Sanket Shows! Please Register{" "}
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="REGISTER" type="primary">
              Register
            </Button>
            <Link to="/login" className="text-primary">
              {" "}
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;

// Add this CSS to your stylesheet

