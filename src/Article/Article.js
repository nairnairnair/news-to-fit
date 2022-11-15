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
            <section className='article-info'>
                <h2>{arty.title}</h2>
                <p>{arty.byline}</p>
                <p>Published: {arty.published_date}, Updated: {arty.updated_date}</p>
            </section>
            <p>{arty.abstract}</p>
            <p>
                <a href={arty.url}>Read the full story at The New York Times.</a>  Don't hit the paywall too hard!
            </p>
            <button className="return-button" onClick={returnHandler}>Return</button>
        </article>
      </div>
    );
  }
  
  export default Article;