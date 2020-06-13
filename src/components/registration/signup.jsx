import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Redirect } from "react-router-dom";
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            address:"",
            UserLogin:{
                emailId:"",
                password:""
            }
        };
        this.validator= new SimpleReactValidator({autoForceUpdate:this})

    }
setFirstName=(e)=>{
  this.setState({firstName:e.target.value});
}
setLastName=(e)=>{
    this.setState({lastName:e.target.value});
  }
  setAddress=(e)=>{
    this.setState({address:e.target.value});
  }
  setEmailId=(e)=>{
    let email = Object.assign({},this.state.UserLogin.emailId);
    email=e.target.value;
    this.setState({emailId:email});
  }
  setPassword=(e)=>{
    let p = Object.assign({},this.state.UserLogin.password);
    p=e.target.value;
    this.setState({password:p});
  }

fetchInputData=(e)=>{
   e.preventDefault();
    if(this.validator.allValid()){
        alert("Registration Done!");
        let  data={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            UserLogin:{
                emailId:this.state.emailId,
                password:this.state.password
            }
        }
        {this.props.router.push("/loin")}
    }else{
        this.validator.showMessages();
        this.forceUpdate();
    }
    
    
}
    render(){
        
        return(
            <React.Fragment>
               <div className="container">
               <h5>Sign Up</h5>
                   <div className="container" style={{marginTop:"20px"}}>
                       <form action="/" method="post" onSubmit={this.fetchInputData}>
                           <div className="form-group">
                               <div className="col-lg-7">
                                   <input type="text" className="form-control" name="firstname" placeholder="firstname"
                                   onChange={this.setFirstName}/>
                                   {this.validator.message("firstName",this.state.firstName,'alpha|required')}
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-lg-7">
                                   <input type="text" className="form-control" name="lastname" placeholder="lastname"
                                   onChange={this.setLastName}/>
                                   {this.validator.message("lastName",this.state.lastName,'alpha|required')}
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-lg-7">
                                   <input type="text" className="form-control" name="address" placeholder="Enter Address"
                                   onChange={this.setAddress}/>
                                   {this.validator.message("address",this.state.address,'string|min:10|max:200|required')}
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-lg-7">
                                   <input type="text" className="form-control" name="emailId" placeholder="Enter Email Id"
                                   onChange={this.setEmailId}/>
                                   {this.validator.message("emailId",this.state.emailId,'email|required')}
                               </div>
                           </div>
                           <div className="form-group">
                               <div className="col-lg-7">
                                   <input type="password" className="form-control" name="password" placeholder="password"
                                   onChange={this.setPassword}/>
                                   {this.validator.message("password",this.state.password,'string|required')}
                               </div>
                           </div>
                           <div className="form-group row">
                               <div className="offset-sm-2 col-sm-10">
                                   <button type="submit" className="btn btn-primary">SignUp</button>
                               </div>
                           </div>
                       </form>
                   </div>
                   
               </div>
            </React.Fragment>
        )
    }
}

export default SignUp; 