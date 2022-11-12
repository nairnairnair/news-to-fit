import './App.css';
import { useState, useEffect } from 'react';
import getData from '../API Calls/APICall';
import Article from '../Article/Article';
import Header from '../Header/Header';

function App() {

  const [section, setSection] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
      getData(section)
        .then(data => {
          setArticles(data.results)
        })
     console.log("articles:", articles)
    }, [section])

  return (
    <div className="App">
      <header className="App-header">
      <Header setSection={setSection}></Header>
      </header>
    </div>
  );
}

export default App;
