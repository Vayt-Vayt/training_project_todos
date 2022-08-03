import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';

 
 const App = () => {
  
  return (
    <div className='title'>
        <Header />
        <TodoList />
    </div>
  );
 };
 
 export default App;