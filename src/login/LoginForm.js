import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

 class LoginForm extends React.Component {

     constructor(props) {
         super(props);

         this.state = {
             username: '',
             password: ''
         };
         this.handlePasswordChange = this.handlePasswordChange.bind(this);
         this.handleUsernameChange = this.handleUsernameChange.bind(this);
         this.loginRequest = this.loginRequest.bind(this);
     }

     handlePasswordChange(e){
        this.setState({password : e.target.value});
     }

     handleUsernameChange(e){
         this.setState({username : e.target.value});
     }


     loginRequest(e){
         e.preventDefault();
         axios.get('https://fersilogin.herokuapp.com/account/'+this.state.username +'/'+this.state.password)
             .then(response => {
                 if(response.data){
                     alert("LOGGEADO");
                 }else{
                     alert("Wrong Password or Usernameq");
                 }
             },errorCallback => {
                 alert("Wrong Password or Username");
             })
     }

 render () {
     return(
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2 offset-lg-4 offset-md-4 offset-sm-1 float-md-center">
             <div className="text-center">
                 <h1 >FERSI</h1>
             </div>
            <div className="jumbotron">
                 <form>
                     <div className="form-group">
                         <label htmlFor="exampleInputEmail1">Username</label>
                         <input type="text" onChange={this.handleUsernameChange} className="form-control" value={this.state.username} aria-describedby="emailHelp"
                                placeholder="Enter your username"/>
                             <small id="emailHelp" className="form-text text-muted">
                             </small>
                     </div>
                     <div className="form-group">
                         <label htmlFor="exampleInputPassword1">Password</label>
                         <input onChange={this.handlePasswordChange} type="password" className="form-control" value={this.state.password} placeholder="Password"/>
                     </div>

                     <button type="submit" className="btn btn-primary" onClick={this.loginRequest}>Submit</button>
                </form>
            </div>
        </div>);
 }
}
export  default  LoginForm;