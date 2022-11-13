import './Results.css'

function Results({articles, setArticleView, setArticleClicked}) {

    const clickHandler = (article) => {
        setArticleClicked(article);
        setArticleView(true);
        console.log('click handled article', article)
      };

    const deConstArticles = articles
    
    console.log("result articles:", articles)
    return (
        <div className="results">{deConstArticles.map((article) => {
            return (
                <section className="article-result" onClick={() => clickHandler(article)} key={article.short_url}>
                    <h2>{article.title}</h2>
                    {article.multimedia ? <img src={article.multimedia[0].url} alt={article.multimedia[0].caption}/> : <p>no image</p>}
                    <p>{article.published_date}</p>
                    <h3>{article.subsection}</h3>
                </section>)
                } 
        )}
        </div>
    );
  }
  
  export default Results;