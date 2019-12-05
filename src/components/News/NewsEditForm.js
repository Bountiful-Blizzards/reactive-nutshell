import React, { Component } from 'react';
import NewsManager from '../../Modules/NewsManager';
import './NewsForm.css'

class NewsEditForm extends Component {

    state = {
        articles: [],
        url: "",
        title: "",
        synopsis: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };
    
    editArticle = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editArticle = {
          id: this.props.match.params.articles,
          url: this.state.url,
          title: this.state.title,
          synopsis: this.state.synopsis
                
            };
            
            NewsManager.update(editArticle)
                .then(() => this.props.history.push("/articles"));
            }
        

    componentDidMount() {
        NewsManager.get(this.props.match.params.articles)
        .then(articles => {
          this.setState({
           title: articles.title,
            loadingStatus: false,
            url: articles.url,
            synopsis: articles.synopsis
          });
        });
    }
    
    
  render() {
    return (

    <div className="card">
        <div className="card-body">
        <article id="editArticleForm"><h1>Edit Article</h1>
        <section>
            <label htmlFor="articleTitle">News Article</label>
            <input type="text"  onChange={this.handleFieldChange}
             id="title" value={this.state.title} />
        </section>
    
        <section>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea type="text"  onChange={this.handleFieldChange} id="synopsis"  rows="3" value={this.state.synopsis}></textarea>
        </section>
    
        <section>
        <label htmlFor="url">Article URL</label>
        <input type="text"  onChange={this.handleFieldChange} id="url" value={this.state.url} />
        </section>
        <button disabled={this.state.loadingStatus} onClick={this.editArticle} id="saveArticle">Save Article</button>
        </article>
        </div>
    </div>
    )
}
}
  
  export default NewsEditForm