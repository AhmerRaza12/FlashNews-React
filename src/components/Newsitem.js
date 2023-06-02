
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date}= this.props;
    return (
      <div className='my-3'>
        <div className="card" >
     <img src={!imageurl?"https://images.livemint.com/img/2022/09/27/600x338/Apple-iPhone13_1646912229120_1664274350899_1664274350899.jpg":imageurl} className="card-img-top" alt="..."/>
     <div className="card-body">
      <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">By {author?author:"unknown"} on {new Date (date).toGMTString()}</small></p>

    <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read</a>
  </div>
</div>
       </div>
    )
  }
}

export default Newsitem