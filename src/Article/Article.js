import './Article.css'

function Article({articleClicked, setArticleView}) {

    const returnHandler = () => {
        setArticleView(false);
      };

      const arty = articleClicked

    return (
      <div className="Article">
        <article className="article-view">
            <section>
                <img className="modal-img" src={arty.multimedia[0].url} alt={arty.multimedia[0].caption}/>
            </section>
            <h2>{arty.title}</h2>
            <p>{arty.byline}</p>
            <p>Published: {arty.published_date}, Updated: {arty.updated_date}</p>
            <p>{arty.abstract}</p>
            <p>
                <a href={arty.url}>Read the full story on The New York Times site.</a>
                Don't hit the paywall too hard!
            </p>
            <button className="returnButton" onClick={returnHandler}>Return</button>
        </article>
      </div>
    );
  }
  
  export default Article;