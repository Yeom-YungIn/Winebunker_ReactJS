import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth/action";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {

        const response = await dispatch(login(values))
        console.log(response);
        if (response.loginSuccess) {
            navigate('/');
        } else {
            alert("가입되지 않은 계정입니다.")
        }
    };

    const onClickHandler = () => {
        navigate('/')
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
                margin: 'auto',
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                style={{marginRight: '20%'}}
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
                style={{marginRight: '20%'}}
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
                style={{marginRight: '20%'}}
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={onClickHandler}>
                    뒤로
                </Button>
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );

}

