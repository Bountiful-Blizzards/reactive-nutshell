import React, { Component } from 'react'
import NewsManager from '../../Modules/NewsManager'
import NewsCard from './NewsCard'
import { Link } from "react-router-dom"

class Newslist extends Component {
    state = {
        articles: [],
    }


    componentDidMount() {
        NewsManager.getAll()
            .then((articles) => {
                this.setState({
                    articles: articles
                })
            })

    }
        deleteArticle=id=>{
            NewsManager.delete(id)
            .then(() => {
                NewsManager.getAll()
                .then((newArticles) => {
                    this.setState({
                        articles: newArticles
                    })
                })
            })
        }
    render() {
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.groups.history.push("/articles/new") }}>
            </button>
            <Link to={`/articles/new`}>ADD NEW</Link>
                </section>
                <div className="container-cards">
                    {this.state.articles.map(article =>
                        <NewsCard
                            key={article.id}
                            article={article}
                            deleteArticle={this.deleteArticle}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}



export default Newslist