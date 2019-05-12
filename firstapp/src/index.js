import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <h1>My React App</h1>
            <h2>This is firstapp</h2>
            <hr/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))



