import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './login.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const [form] = Form.useForm(); // Hook to get form instance for reset
    const navigate = useNavigate(); // Hook for navigation

    const onFinish = (values) => {
        const { username, password } = values; // Extract values from form submission
        login(username, password); // Call custom login function with username and password
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Custom login function
    const login = (username, password) => {
        if (username === 'admin' && password === 'admin123') {
            alert('Successfully Logged In');

            // Clear form fields after successful login
            form.resetFields(); 

            // Navigate to another page
            navigate('/'); // Change this to the route you want
        } else {
            alert('Username or password is incorrect');
        }
    };

    return (
        <div className="form">
            <Form
                form={form} // Attach the form instance to enable resetting
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish} // Form submission handler
                onFinishFailed={onFinishFailed} // Handle submission failure
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default App;
