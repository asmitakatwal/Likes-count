import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

const App=()=> {
 const [LikeCount,setLikeCount]=useState(0);
 const [isLiked,setLiked]=useState(false)

  return (
    <div className="App">
  <button style={{backgroundColor: isLiked?'skyblue' :null}}
  onClick={()=>setLiked(true)}
  >{isLiked? 'Liked':'Like'}</button>

<button >{LikeCount}</button>
    </div>
  );
}

export default App;
