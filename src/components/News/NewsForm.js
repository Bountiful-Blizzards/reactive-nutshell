import React, { Component } from 'react';


class NewsForm extends Component {
  render() {
    return (

    <div className="card">
        <div className="card-body">
        <article id="newArticleForm"><h1>Add New Article</h1>
        <section>
            <label htmlFor="articleTitle">News Article</label>
            <input type="text" id="articleTitle-input"/>
        </section>
    
        <section>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea type="text" id="synopsis-input" rows="3"></textarea>
        </section>
    
        <section>
        <label htmlFor="url">Article URL</label>
        <input type="text" id="url-input"/>
        </section>
        <button id="saveArticle">Save Article</button>
        </article>
        </div>
    </div>
    )
}
}
  
  export default NewsForm