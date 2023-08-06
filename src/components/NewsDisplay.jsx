import React from 'react'

function NewsDisplay(props) {
  if (props.News === "") {
    return <h1>Nothing to show</h1>
      
  }
  return(
    <div className="wrapper">
        <ul>
      {props.News.articles.map((current, i)=>{
        return(
          <li>
            {current.title}
          </li>
        )
      })}
        </ul>
    </div>
  )

}

export default NewsDisplay