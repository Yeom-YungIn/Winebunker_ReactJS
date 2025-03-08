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
            className="FormContainer"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item className="FormItem" label="Name" name="name" rules={[/* ... */]}>
                <Input />
            </Form.Item>

            <Form.Item className="FormItem" label="Password" name="password" rules={[/* ... */]}>
                <Input.Password />
            </Form.Item>

            <Form.Item className="FormItem" name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="FormItem">
                {/* 버튼을 중앙 정렬하는 컨테이너 추가 */}
                <div className="ButtonContainer">
                    <Button className="SubmitButton" type="primary" htmlType="submit" onClick={onClickHandler}>
                        뒤로
                    </Button>
                    <Button className="SubmitButton" type="primary" htmlType="submit">
                        로그인
                    </Button>
                </div>
            </Form.Item>
        </Form>

    );

}

