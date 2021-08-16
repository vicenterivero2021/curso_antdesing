import logo from './logo.svg';
import './App.css';
import Iconos from './components/Iconos'
import Botones from './components/Botones'
import Formink from './components/Formink'
import Formularios from './components/Formularios'
import { DatePicker, Button } from 'antd';
//importaciones de la hoja de estilos
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

//importaciones de iconos de ant-desing
import { Html5TwoTone, StarOutlined, StarFilled, StarTwoTone, AppleOutlined, ChromeOutlined, DeleteFilled, HeartTwoTone } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      
      <DatePicker style={{ fontSize: '90px', width: '30%' }} />
      <br></br>
      <br></br>
      <Iconos />
      <br></br>
      <Botones />
      <Formink/>
      <Formularios/>

    </div>
  );
}

export default App;
