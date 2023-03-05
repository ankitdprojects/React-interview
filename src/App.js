import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    axios 
    .get('https://jsonplaceholder.typicode.com/posts')
          .then((res) => setData(res.data))
  },[]);

  return (
    <div className="App">
     {data.map((post) => {
      const {id,body,title} = post;

      return <div key={id}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
     })} 
    </div>
  );
}

export default App;
