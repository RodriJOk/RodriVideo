import { BrowserRouter as Router, Route, NavLink, BrowserRouter, Switch } from 'react-router-dom'
import Error404 from '../containers/Error404'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Layout from '../components/Layout'
import Player from '../containers/Player'

const App = () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/player/:id" component={Player}></Route>
                <Route component={Error404}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App