import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anowar Khan', 'Jafor Iqbal', 'Alomgir', 'Salman Shah']
  const nayikas = ['Moushumi', 'Shabana', 'Bobita', 'Diti', 'Anowara Begum']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$99.99'},
    {name: 'Adobe Acrobat', price:'$06.99'},
    {name: 'Adobe Primier Pro', price:'$26.99'}
  ]

  // const productNames = products.map(product => product.name);
  // const productNames = products.map(product => product); 
  // console.log(productNames);
  // const nayokNames = nayoks.map(nayok => nayok); 
  // console.log(nayokNames);
  const nayikasNames = nayikas.map(nayika => nayika); 
  console.log(nayikasNames);

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
          <Counter></Counter>
          <Users></Users>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
  <h1 style={style}>My Heading: {person1.name +" "+ person1.job}</h1>
  <h3 style={{color: 'gray',
    backgroundColor: 'cyan'}}>Singer: {person2.name + " " + person2.job}</h3>
        <p>My first react paragraph</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          } 
          {
            products.map(product => <li>{product.name} - {product.price}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li> */
        }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        <Person name={nayoks[0]} nayika={nayikas[4]}></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

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
