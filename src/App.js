import React from 'react';
import logo from './logo.svg';
import './App.css';
import roomConfig from './Room.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRoom: '',
      currentRoom: null,
      roomMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openRoom = this.openRoom.bind(this);
    this.roomEntry = React.createRef();
  }

  openRoom(roomKey) {
    if (roomKey in roomConfig) {
      window.open(roomConfig[roomKey].link, '_blank');
      this.setState({
        roomMessage: "You have joined the " + roomConfig[roomKey].name + " room.",
        nextRoom: '',
        currentRoom: roomKey,
      });
    } else {
      this.setState({
        roomMessage: "You can't find the " + roomKey.toUpperCase() + " room.",
        nextRoom: '',
      });
    }
  }

  componentDidMount() {
    this.roomEntry.current.focus();
  }

  handleChange(event) {
    this.setState({
      nextRoom: event.target.value.toUpperCase(),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.openRoom(this.state.nextRoom.toLowerCase());
  }

  render() {
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
                <input type="text" name="room-entry" value={this.state.nextRoom} onChange={this.handleChange} ref={this.roomEntry}/>
              </p>
            </label>
            <p>
              <input type="submit" name="submit" value="Join"/>
            </p>
          </form>
        </main>
        <footer>
          <p>
            {this.state.roomMessage}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

