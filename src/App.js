import "./App.css";
import { useState, useEffect } from "react";
import NewsUpdates from "./components/NewUpdates";
import NewsDisplay from "./components/NewsDisplay"
import axios from "axios";

function App() {
  const apiKey= "9a1ec9ec5bc803519caff029ed8a2de6"
// --------------------------{APIKEY DATA}

const [news,setNews] = useState("")

// --------------------------{STATE}

const getNews = async(searchTerm)=>{
console.log(searchTerm);
  const response = await axios.get(`https://gnews.io/api/v4/search?q=${searchTerm}&category=general&apikey=${apiKey}`)
// ----- go to the site and search for News
console.log(response.data);



setNews(response.data)
// ----------> Take retrieved data and set it as current News

}




//-------------------------[ Function that uses async-await to fetch news data]
  return (
      <div className="App">
        <NewsUpdates newssearch={getNews} />
  
        <NewsDisplay News={news} />
      </div>
    );
  }
  
  export default App;
  
  