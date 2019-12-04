import React, { Component } from 'react';


class NewsCard extends Component {
  render() {
    return (

    <div class="card">
        <div class="card-body">
        <article id="newArticleForm"><h1>Add New Article</h1>
        <section>
            <label for="articleTitle">News Article</label>
            <input type="text" id="articleTitle-input"/>
        </section>
    
        <section>
            <label for="synopsis">Synopsis</label>
            <textarea type="text" id="synopsis-input" rows="3"></textarea>
        </section>
    
        <section>
        <label for="url">Article URL</label>
        <input type="text" id="url-input"/>
        </section>
        <button id="saveArticle">Save Article</button>
        </article>
        </div>
    </div>
    )
}
}
  
  export default NewsCard