import React from 'react';

import { Html5TwoTone, StarOutlined, StarFilled, StarTwoTone, AppleOutlined, ChromeOutlined, DeleteFilled, HeartTwoTone } from '@ant-design/icons';
function Iconos() {
    return (
        <div>
            <h2>Iconos de Ant Desing</h2>
            <StarOutlined style={{ fontSize: '90px' }} />
            <StarFilled style={{ fontSize: '90px' }} />
            <StarTwoTone style={{ fontSize: '90px' }} twoToneColor="#eb2f96" />
            <AppleOutlined style={{ fontSize: '90px', color: 'red' }} spin />
            <ChromeOutlined style={{ fontSize: '90px', color: 'aqua' }} />
            <DeleteFilled style={{ fontSize: '90px', color: 'green' }} rotate={180} />
            <HeartTwoTone style={{ fontSize: '90px' }} twoToneColor="red" />
            <Html5TwoTone style={{ fontSize: '90px' }} twoToneColor="orange" />
        </div>
    )
}
export default Iconos