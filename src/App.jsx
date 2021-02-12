import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { set_data , facebook_login } from './store/action';
import firebase from 'firebase';

class App extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h1>hello</h1>
        <button onClick={()=>this.props.set_data()} >setdata</button>
        <button onClick={()=>this.props.facebook_login()} >FB Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  users:state.users
})

const mapDispatchToProps = (dispatch) =>({
  set_data:()=>dispatch(set_data()),
  facebook_login:()=>dispatch(facebook_login())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
