import logo from './logo.svg';
import styles from './App.module.css'
import Test from './Test';
import { Title } from './Components';
import './tailwind.css'
//import Tailwind from './Tailwind';
import './style.scss'
import { createElement } from 'react';
import Button from './components/Button';
import Tab from './components/Tab';
function App() {

  // let todos = ['todos1','todos2','todos3','todos4'];
  // let li = todos.map((item,index)=> createElement('li',null,item));

  //   return createElement('ul',null,li);

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme={'dark'}>{process.env.NODE_ENV}</Title>
      <div style={{padding:20}}>
        <Tab activeTab={0}>
          <Tab.Panel title="Profile">tab1</Tab.Panel>
          <Tab.Panel title="Hakkında">tab2</Tab.Panel>
          <Tab.Panel title="İletisim">tab3</Tab.Panel>

        </Tab>
      </div>
     <div style={{padding:20}}>
      
      <Button>
        Button örnegi
      </Button>
      <Button  variant="success">
        Button örneği
      </Button>
      <Button variant="danger">
        Button örneği
      </Button>
      <Button variant="warning">
        Button örneği
      </Button>
     </div>

      <p className='env' style={{color: 'orange',backgroundColor:'purple'}}>
        <span>test scss </span>
      </p>
    <h1 tabIndex="3">BASLIK</h1>
    <label htmlFor='search' tabIndex="2">Adı</label>
    <input id='search' tabIndex="1"></input>
      <h2>
        {process.env.REACT_APP_API_URL}
      </h2>
      <img src='/logo192.png'></img>
        <img src={logo}></img>
        <Test/>


    </div>
  );
}

export default App;
