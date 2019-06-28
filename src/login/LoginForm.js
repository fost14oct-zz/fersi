import React from 'react';
import ReactDOM from 'react-dom';

 class LoginForm extends React.Component {
 render () {
     return(

         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2 offset-lg-4 offset-md-4 offset-sm-1 float-md-center">
             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2 offset-lg-4 offset-md-4 offset-sm-1 float-md-center">
                 <h1>FERSI</h1>
             </div>
            <div className="jumbotron">
                 <form>
                     <div className="form-group">
                         <label htmlFor="exampleInputEmail1">User name</label>
                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter your username"/>
                             <small id="emailHelp" className="form-text text-muted">
                             </small>
                     </div>
                     <div className="form-group">
                         <label htmlFor="exampleInputPassword1">Password</label>
                         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                     </div>

                     <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>);
 }
}
export  default  LoginForm;