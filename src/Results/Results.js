import './Results.css'

function Results(articles) {
    console.log("result articles:", articles)
    return (
        <div className="results">{articles.articles.map((article) => {
            return (
                <article className="article-result" key={article.short_url}>
                    <h2>{article.title}</h2>
                    {article.multimedia ? <img src={article.multimedia[0].url} alt={article.multimedia[0].caption}/> : <p>no image</p>}
                    <p>{article.published_date}</p>
                    <h3>{article.subsection}</h3>
                </article>)
                } 
        )}
        </div>
    );
  }
  
  export default Results;