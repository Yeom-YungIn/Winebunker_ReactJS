import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('분류', '1', <AppstoreOutlined />),
    getItem('분류', '2', <AppstoreOutlined />),
    getItem('분류', '3', <AppstoreOutlined />),
];

export function Navbar() {
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <h1 className="centered-text">WineBunker</h1>
            <Menu
                theme="Ligth"
                onClick={onClick}
                defaultOpenKeys={['1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </div>
    );
}
