import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRoom: '',
      currentRoom: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      nextRoom: event.target.value.toUpperCase(),
    });
  }

  handleSubmit(event) {
    // TODO open the real chat room link that matches the room
    window.open('https://www.bing.com/search?q=' + this.state.nextRoom, '_blank');
    this.setState({
      nextRoom: '',
      currentRoom: this.state.nextRoom,
    });
    event.preventDefault();
  }

  render() {
    let footer = '';
    if (this.state.currentRoom) {
      footer = <footer>
        <p>
          You have joined the {this.state.currentRoom} room.
        </p>
      </footer>
    };

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>
                Type in a room name to join it.
              </p>
              <p>
                <input type="text" name="room-entry" value={this.state.nextRoom} onChange={this.handleChange}/>
              </p>
            </label>
            <p>
              <input type="submit" name="submit" value="Join"/>
            </p>
          </form>
        </main>
        {footer}
      </div>
    );
  }
}

export default App;
