import React from 'react';

const NewsList = (props) => {
    console.log("prosp in newslist>>>", props)
    const items = props.newsdata.map((item) => {
        return(
            <div>
                <h2>{item.title}</h2>
                <h4>{item.feed}</h4>
            </div>
        )
    })
    return(
        <div> 
            {items}
        </div>
    )
}

export default NewsList;