// eslint-disable-next-line
import React , {Component} from 'react';
// eslint-disable-next-line 
import {connect} from 'react-redux';
import {addMessage} from '../store/ducks/landing';
//import Axios from 'axios';
// Change code below this line
class Presentational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    //this.getApiPersons = this.getApiPersons.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input)
    this.setState({input:''})
    console.log(this.props, this.state)
  }
  // async getApiPersons(){
  //  let responseApi = await Axios.get("")
  //}
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="/">Action 1</a>
                                <a className="dropdown-item" href="/">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <h2>Type in a new Message:</h2>
            <input value={this.state.input} onChange={this.handleChange}/>
            <br/>
            <button onClick={this.submitMessage}>Submit</button>
            <ul>
                {
                    this.props.messages&&this.props.messages.map( (message, idx) => {
                        return (
                            <li key={idx}>{message}</li> 
                        )
                    })
                }
            </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {
      messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)