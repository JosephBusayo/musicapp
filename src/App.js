import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import './App.css';

//const url = "https://itunes.apple.com/search?term=the%20grateful%20dead"

function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState('')
  let [data, setData] = useState([])

const API_URL = "https://itunes.apple.com/search?term=";

useEffect(() => {
  if(search){
  const fetchData = async () => {
    document.title = `${search} Songs`
    const response = await fetch(API_URL + search)
    const resData = await response.json()
    //console.log(resData)
    if(resData.results.length > 0){
      setData(resData.results)
    }else {
      setMessage("Content not found")
    }
  }
  fetchData()
  }
}, [search])

const handleSearch = (e, term) => {
  e.preventDefault()
  setSearch(term)
}

  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch}/>
        {message}
      <div className='data'>
        <Gallery data={data}/>
      </div>
    </div>
  );
}

export default App;







