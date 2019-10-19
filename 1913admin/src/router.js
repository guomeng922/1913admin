import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import ComponentImport from './utils/componentImport'
import CustomNav from './component/customNav'
// import Login from './component/login/load.js'
const Login = ComponentImport(() => import('./component/login'))
const Admin = ComponentImport(() => import('./component/admin'))
const Home = ComponentImport(() => import('./component/home'))
const User = ComponentImport(() => import('./component/user'))
// import Admin from './component/admin'
// import Home from './component/home'
// import User from './component/user'

class RootRouter extends Component{
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
          <Route path='/login' render={() => {
            return (
              <Login>
              </Login>
            )
          }}/>
          <Route path='/admin' render={() => {
            return (
              <Admin>
                {/* <CustomNav></CustomNav> */}
                <Route path='/admin/home' component={Home}/>
                <Route path='/admin/user' component={User}/>
              </Admin>
            )
          }}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter