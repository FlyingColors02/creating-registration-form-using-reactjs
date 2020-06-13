import React,{Component} from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Posts from "./components/posts";
import Products from "./components/products";
import Registration from "./components/registration/registration";
import Navbar from "./components/navbar/navbar";
import SignUp from "./components/registration/signup";
import SignIn from "./components/registration/loin";

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/products" component={Products}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/loin" component={SignIn}/>
                {/* <Redirect path="/signIn"/> */}
                </Switch>
            </div>
        )
    }
}
export default App;