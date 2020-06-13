import React,{Component} from "react";
import SignUp from "./signup";
import SignIn from "./loin";

const Registration=(props)=>{
        
        return(
            <div className="container" style={{marginTop:"20px"}} >
                <div className="row" >
                <div className="col-md-5"  >
                <SignIn/>
                </div>
                <div className="col-sm-1" style={{borderLeft:"2px solid #007bff", height:"400px"}}></div>
                <div className="col-md-5" >
                    <SignUp/> 
            </div>
                </div>
            </div>
        )
    }

export default Registration;