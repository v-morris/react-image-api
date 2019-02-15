import React from 'react';
import ReactDOM from 'react-dom';

let API = "https://jsonplaceholder.typicode.com/photos";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then (res => {
            let filter50 = res.filter((image, index) => index <10); //this variable needs set state to be used outside of here
            this.setState({photos: filter50});
        })
        .catch(error => alert('error: ', error)) //this is a callback function
    }

    render() {
        console.log('Rendered!');
        return (
            <div>
                <h3>Photo List</h3>
                {this.state.photos.map(pic => (
                    <img key = {pic.id} src = {pic.thumbnailUrl} />                ))}
            </div>
            
        );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
