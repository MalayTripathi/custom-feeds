import React, { Component } from 'react';
import axios from 'axios';
import openSocket from 'socket.io-client';
import 'assets/css/boot.css';
import moment from 'moment';
const socket = openSocket(process.env.REACT_APP_SOCKET, {path:'/latestnews'});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feeds: [],
      socket: socket
    }
  }
  componentWillMount() {
    axios.get(process.env.REACT_APP_SERVER+'/news').then(result => {
      this.setState({feeds: result.data.newsList})
    })
    socket.on('message', message => {
      if(this.state.feeds.length > 0) {
        let flag = true
        this.state.feeds.forEach(f => {
          if(f.link === message.link) flag = false
        })
        if(flag)
          this.setState({feeds: [message, ...this.state.feeds]})
      }
    })
  }
  createTable() {
    const { feeds } = this.state
    if(feeds && feeds.length) {
      return feeds.slice().sort((a,b) => {return a.isoDate > b.isoDate}).map((ob,i) => {
          return <tr key={i}>
            <td>
              <ul className="list-unstyled">
                <li className="list-group-item"><strong>Link: </strong><a href={ob.link} target="__blank">{ob.link}</a></li>
                <li className="list-group-item"><strong>Title: </strong>{ob.title}</li>
                <li className="list-group-item"><strong>Content: </strong>{ob.content}</li>
                <li className="list-group-item"><strong>Date: </strong>{moment(ob.isoDate).toString()}</li>
              </ul>
            </td>
          </tr>
      })

    } else {
      return <tr><td className="text-center">No feeds</td></tr>
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">

          <table className="table table-responsive">
            <tbody>
              {this.createTable()}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
