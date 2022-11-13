import './App.css';
import { useState, useEffect } from 'react';
import getData from '../API Calls/APICall';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Results from '../Results/Results';

function App() {

  const [section, setSection] = useState('home')
  const [articles, setArticles] = useState([])
  const [articleView, setArticleView] = useState(false)
  const [articleClicked, setArticleClicked] = useState()

  useEffect(() => {
    setArticleView(false)
      getData(section)
        .then(data => {
          setArticles(data.results)
        })
        .then(console.log("articles:", articles))
    }, [section])

  return (
    <div className="App">
        <Header setSection={setSection}></Header>
      <main>
        {!articleView
          ? <Results articles={articles}></Results>
          : <Article articleClicked={articleClicked}></Article>
        }
      </main>
    </div>
  );
}

export default App;
