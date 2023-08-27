import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Edit from './components/Edit';
import { useEffect, useState } from 'react';
import Axios from "axios";
import { Grid } from '@mui/material';

function App() {
  const [state,statefunc] = useState(-1);
  const [memes,setmemes] = useState([]);
  useEffect(()=>{
    Axios.get("https://api.imgflip.com/get_memes")
    .then(res=>setmemes(res.data.data.memes));
  },[])

  return (
    <div className="App">
      <Navbar />
      <Grid container>
      {state===-1 && memes.map((e,i)=>{
        return(
        <Grid key={i} item lg={3} md={4} sm={6} xs={12}>
        <Meme
          key={i}
          id={i}
          url={e.url}
          statefunc={statefunc}
        />
        </Grid>
        )
      })}
      </Grid>
      {state!==-1 && <Edit
        statefunc={statefunc}
        url={memes[state].url}
      />}
    </div>
  );
}

export default App;
