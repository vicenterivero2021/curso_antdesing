import React from 'react';
import { Button } from 'antd';
import { Html5TwoTone, LineOutlined, SearchOutlined} from '@ant-design/icons';
function Botones() {
    return (
        <div>
            {/* Ghost hacer que el boton sea transparente de fondo */}
            <h2>Botones de Ant desing</h2>
            <Button type="dashed" icon={<Html5TwoTone/>} size="large">dashed</Button>
            <Button type="primary" size="large">Primary</Button>
            <Button type="link" href="https://www.google.com" target="_blank" size="large">Google</Button>
            <Button type="ghost" size="large">ghost</Button>

            <h2>Botones adicionales  de Ant desing</h2>
            <Button type="dashed" danger size="small">danger</Button>
            <Button type="primary" danger    loading size="small">Primary loading</Button>
            <Button type="ghost" disabled size="small">disabled</Button>
            <Button ghost size="large">ghost</Button>
            <Button type="primary" ghost size="large">ghost-primary</Button>

            <Button type="primary" icon={<SearchOutlined/>} ghost shape="circle" size="large"></Button>
            <Button type="primary" icon={<SearchOutlined/>} ghost className="botonAnt"></Button>




        </div>
    )
}
export default Botones