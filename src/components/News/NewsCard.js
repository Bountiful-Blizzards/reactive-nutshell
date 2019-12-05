import React, { Component } from 'react';
import { Link } from "react-router-dom"


class NewsCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input type="checkbox"></input>
                    <Link to={`/articles/${this.props.article.id}`} className="card-title" style={{ width: "18rem" }}><h5><b>{this.props.article.title}</b></h5></Link>
                    <div className="input-group-append" id="button-addon4">
                        <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)} >Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard