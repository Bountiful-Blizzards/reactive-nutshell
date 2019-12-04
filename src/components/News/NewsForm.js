import React, { Component } from 'react';
import NewsManager from '../../Modules/NewsManager';


class NewsForm extends Component {

    state = {
        articles: [],
        url: "",
        title: "",
        synopsis: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };
    
    addNewArticle = evt => {
        evt.preventDefault();
        if (this.state.url === "" || this.state.title === "") {
            window.alert("NOPE NOPE NOPE");
        } else {
            this.setState({ loadingStatus: true });
            const article = {
                url: this.state.url,
                title: this.state.title,
                
            }
            
            NewsManager.post()
            .then(articles => this.setState({articles: articles}))
            }
        
    }
    
    
  render() {
    return (

    <div className="card">
        <div className="card-body">
        <article id="newArticleForm"><h1>Add New Article</h1>
        <section>
            <label htmlFor="articleTitle">News Article</label>
            <input type="text" required className="articleTitle-input" onChange={this.handleFieldChange}
             id="articleTitle-input" value={this.state.article}/>
        </section>
    
        <section>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea type="text" required className="synopsis-input" onChange={this.handleFieldChange} id="synopsis-input" value={this.state.article} rows="3"></textarea>
        </section>
    
        <section>
        <label htmlFor="url">Article URL</label>
        <input type="text" required className="url-input" onChange={this.handleFieldChange} id="url-input" value={this.state.article}/>
        </section>
        <button onClick={this.handleFieldChange} id="saveArticle">Save Article</button>
        </article>
        </div>
    </div>
    )
}
}
  
  export default NewsForm