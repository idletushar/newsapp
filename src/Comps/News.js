import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }
// This app is made withnthe help of NewsAPI
  render() {
    return (
      <div className='container my=3'>
        <h1>News4You - Top Headlines</h1>
        <div className='row'>
            <div className="col-md-4">
                <NewsItem />
            </div>
            <div className="col-md-4">
                <NewsItem />
            </div><div className="col-md-4">
                <NewsItem />
            </div>
        </div>    
      </div>
    )
  }
}

export default News
