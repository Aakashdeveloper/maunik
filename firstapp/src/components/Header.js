import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super()

        this.state = {
            title: 'React App',
            keyword: 'User Text Here'
        }
    }

    inputChanges(event){
        console.log(event.target.value);
        this.setState({keyword: event.target.value})
        this.props.newsSearch( event.target.value)
    } 
        
    render(){
        return(
            <header>
                <div className="logo"
                onClick={() => { console.log("hiii")}}>
                    {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChanges.bind(this)}/>
                    <p>{this.state.keyword}</p>
                </center>
            </header>
        )
    }
}

export default Header;