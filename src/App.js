// root component

import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

let apikey = process.env.REACT_APP_NEWS_API;
function MyComponent (){
  const [mode,setState] = useState('light')
  const [progress,changeProgress] = useState(0)

    const handleMode = () =>{
      if(mode === 'light'){
        setState('dark');
      }
      else{
        setState('light');
      }
      document.body.classList.toggle('dark')
      Array.from(document.getElementsByClassName('card')).forEach(function(card){
        card.classList.toggle('dark-card')
      })
      
    }
    const setProgress = (prog) =>{
      changeProgress(prog)
    }

       return (
        <>
          <Router>
          <Navbar handleMode={handleMode} mode={mode} />
          <LoadingBar
        color='red'
        progress={progress}
        height={2}
       
          />
          <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={12} country='in' category='general' mode={mode} apikey={apikey} />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={12} country='in' category='business' mode={mode} apikey={apikey} />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={12} country='in' category='entertainment' mode={mode} apikey={apikey} />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={12} country='in' category='health' mode={mode} apikey={apikey} />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={12} country='in' category='science' mode={mode} apikey={apikey} />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={12} country='in' category='sports' mode={mode} apikey={apikey} />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={12} country='in' category='technology' mode={mode} apikey={apikey} />} />
          </Routes>
          </Router>

        </>
       )
    }  


export default MyComponent;


