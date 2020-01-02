import * as React from "react";
import "./index.scss";


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

const Home = () => {
    return (
        <>
            <Link to="/posts">Posts</Link>{" "}
            <Link to="/comments">Comments</Link>
        </>
    )
};

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/posts" render={props => <Posts {...props} />} />
                <Route path="/comments" render={props => <Comments {...props}/>} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

