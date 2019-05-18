import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';

import JSON from './db.json';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={ 
            news: JSON,
            filtered:JSON
        }
    }

    filterNews(keywords) {
        let output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }
    render(){
        // console.log('Json in app>>>', this.state.news)
        return(
            <div>
                <Header newsSearch={(userInput) => this.filterNews(userInput)}/>
                <hr/>
                <NewsList newsdata={this.state.filtered}/>
                <hr/>
            </div>  
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))



