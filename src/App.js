import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var style = {
    color: 'red',
    backgroundColor: 'blue'
  }
  var person1 = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
  <h1 style={style}>My Heading: {person1.name +" "+ person1.job}</h1>
  <h3 style={{color: 'gray',
    backgroundColor: 'cyan'}}>Singer: {person2.name + " " + person2.job}</h3>
        <p>My first react paragraph</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name={nayoks[0]} nayika={nayikas[4]}></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

const products = [
  {name: 'Photoshop', price:'$90.99'},
  {name: 'Illustrator', price:'$99.99'},
  {name: 'Adobe Acrobat', price:'$06.99'}
]


function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

const nayoks = ['Anowar Khan', 'Jafor Iqbal', 'Alomgir', 'Salman Shah']
const nayikas = ['Moushumi', 'Shabana', 'Bobita', 'Diti', 'Anowara Begum']
function Person(props){
  const personStyle={
    border: '2px solid red', 
    margin: '10px'
  }
  return (
  <div style={personStyle}>
  <h1>Nayok: {props.name}</h1>
  <h1>Nayika: {props.nayika}</h1>
  <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
