import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

    constructor(){
        super();
        this.state = {
           articles: [],
           loading: false,
           page: 1
        }
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18b1ad644e834eb698ea2e7847387adb&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false     
      })
    }

    handlePrevClick = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18b1ad644e834eb698ea2e7847387adb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
    }

    handleNextClick = async()=>{
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        // fixing next btn (agar agge data hai to he next hoga)
      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18b1ad644e834eb698ea2e7847387adb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        })
      }
    }

// This app is made withnthe help of NewsAPI
  render() {
    return (
      <div className='container my=3'>
        <h1 className='text-center my-5 display-4'>News4You - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {/* with this we can iterate all array items */}
          {/* use element */}
          {/* we can also do this by destructuring */}
          {!this.state.loading && this.state.articles.map((element)=>{
            // we are returning div so we gave "key" in div
            return <div className="col-md-4 my-2" key={element.url}>
                {/* each child should have unique "key" */}
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>     

        <div className="comtainer d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  
      </div>
    )
  }
}

export default News