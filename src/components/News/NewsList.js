import React, { Component } from 'react'
import NewsManager from '../../Modules/NewsManager'
import NewsCard from './NewsCard'

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

    render() {
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.groups.history.push("/articles/new") }}>
            </button>
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