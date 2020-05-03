import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1>
      <InlineStyle/>
      <StyleSheet primary={true}/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent> </ParentComponent>
      <FunctionClick> </FunctionClick>
      <ClassClick> </ClassClick>
      <EventBind/>

      <Greet name="Clark" heroName="Batman">
      	<p> This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Batman">
      	<button>Action</button>
      </Greet>
      <Welcome  name="Clark" heroName="Batman"/>
      <Welcome  name="Ben" heroName="hulk"/>
      <Welcome  name="peter" heroName="spiderman"/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
