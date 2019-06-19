import React from 'react';
import logo from './banana.jpg';
import './App.css';

class FetchTeam extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://pixelcorp.dev/team")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.firstName} {item.lastName}
              </li>
            ))}
          </ul>
        );
      }
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>        
        <br></br>        
        <p>
          Welcome to <code>PixelCorp</code>
        </p>
        <h3>Team:</h3>
        <FetchTeam />
      </header>
    </div>
  );
}

export default App;
