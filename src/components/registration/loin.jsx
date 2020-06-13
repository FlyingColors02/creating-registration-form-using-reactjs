import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import {browserHistory} from "react-router"
class SignIn extends Component{

    
    constructor(props){
        super(props);
        this.state={
                userName:"",
                password:"",

        };
        this.validator= new SimpleReactValidator({autoForceUpdate:this})
              

    }
setUserName=(e)=>{
  this.setState({userName:e.target.value});
}
setPassword=(e)=>{
    this.setState({password:e.target.value});
  }

fetchInputData=(e)=>{
   e.preventDefault();
    if(this.validator.allValid()){
        alert("SignIn Successful!");
        let  data={
                userName:this.state.userName,
                password:this.state.password
        }
        browserHistory.push("/home")
    }else{
        this.validator.showMessages();
        this.forceUpdate();
    }
    
}
    render(){
        return(
            <React.Fragment>
               <div className="container">
               <h5>Sign In</h5>
                   <div className="container" style={{marginTop:"20px"}}>
                       <form action="/" method="post" onSubmit={this.fetchInputData}>
                           
                           <div className="form-group">
                               <div className="col-md-7">
                                   <input type="text" className="form-control" name="userName" placeholder="UserName/EmailId"
                                   onChange={this.setUserName}/>
                                   {this.validator.message("userName",this.state.userName,'email|required')}
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-md-7">
                                   <input type="password" className="form-control" name="password" placeholder="password"
                                   onChange={this.setPassword}/>
                                   {this.validator.message("password",this.state.password,'string|required')}
                               </div>
                           </div>
                           <div className="form-group row">
                               <div className="offset-sm-2 col-sm-10">
                                   <button type="submit" className="btn btn-primary">SignIn</button>
                               </div>
                           </div>
                       </form>
                   </div>
                   
               </div>
            </React.Fragment>
        )
    }
}

export default SignIn; 