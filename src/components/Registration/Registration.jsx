import React from 'react';
import {Button, Input} from 'antd';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registrationResource} from "../../redux/crud/action";


const DataInput = ({ name }) => {
    return (
        <div>
            <p>{name}</p>
            <Input placeholder={name} />
        </div>
    )
}

export function Registration() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    async function onSubmitHandler() {
        const resourceObj_tbd = {
            "vinSn": '1',
            "vintage": 2023,
            "price": 3000,
            "store": "test",
            "capacity": "test",
            "description": "test",
            "purchaseDate": "2023-12-07"
        };
        const jwt_tbd = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QiLCJpYXQiOjE3MDE5MzQ1OTUsImV4cCI6MTcwMTkzODE5NX0.-RlPjhQu40IVXihSiM_hvb1Mcow0RdKT3Q5mekRegWU'
        try {
            const response = await dispatch(registrationResource(resourceObj_tbd, jwt_tbd));
            console.log(response)
            if (response.payload === 201) {
                navigate('/')
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="input">
            <Input placeholder="날짜를 입력하세요" />
            <DataInput name="와인명" />
            <DataInput name="구입처" />
            <DataInput name="빈티지" />
            <DataInput name="용량" />
            <DataInput name="가격" />
            <br/>
            <Button type="default" onClick={() => navigate('/')}>
                뒤로
            </Button>
            <Button type="primary" htmlType="submit" onClick={onSubmitHandler} className="submit-button">
                등록
            </Button>
        </div>
        )
}

