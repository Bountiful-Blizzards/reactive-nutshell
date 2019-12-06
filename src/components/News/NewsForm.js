import React, { Component } from 'react';
import NewsManager from '../../Modules/NewsManager';
import './NewsForm.css'

class NewsForm extends React.Component {

    state = {
        articles: [],
        url: "",
        title: "",
        synopsis: "",
        timeStamp: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };
    
    addNewArticle = evt => {
        evt.preventDefault();
        if (this.state.url === "" || this.state.title === "" || this.state.synopsis ==="") {
            window.alert("NOPE NOPE NOPE");
        } else {
            this.setState({ loadingStatus: true});
            const article = {
                url: this.state.url,
                title: this.state.title,
                synopsis: this.state.synopsis,
                timeStamp: new Date (),
                
            };
            
            NewsManager.post(article)
                .then(() => this.props.history.push("/articles"));
            }
        
    };

    componentDidMount() {
        NewsManager.getAll()
        .then(articles => this.setState({article: articles}))
    }
    
    
  render() {
    return (

    <div className="card">
        <div className="card-body">
        <article id="newArticleForm"><h1>Add New Article</h1>
        <section>
            <label htmlFor="articleTitle">News Article</label>
            <input type="text"  onChange={this.handleFieldChange}
             id="title" />
        </section>
    
        <section>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea type="text"  onChange={this.handleFieldChange} id="synopsis"  rows="3"></textarea>
        </section>
    
        <section>
        <label htmlFor="url">Article URL</label>
        <input type="text"  onChange={this.handleFieldChange} id="url" />
        </section>
        <button disabled={this.state.loadingStatus} onClick={this.addNewArticle} id="saveArticle">Save Article</button>
        </article>
        </div>
    </div>
    )
}
}
  
  export default NewsForm