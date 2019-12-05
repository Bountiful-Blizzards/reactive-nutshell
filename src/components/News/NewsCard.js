import React, { Component } from 'react';
import { Link } from "react-router-dom"
import NewsManager from "../../Modules/NewsManager"

class NewsCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input type="checkbox"></input>
                    <h5 onClick={() => {this.props.history.push(`/articles/${this.props.article.id}/edit`)}} className="card-title" style={{ width: "18rem" }}><b>{this.props.article.title}</b></h5>
                    <div className="input-group-append" id="button-addon4">
                        <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)} >Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard