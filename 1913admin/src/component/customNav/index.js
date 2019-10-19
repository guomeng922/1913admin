import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'

let navData = [
  {name:'首页',path:'/home'},
  {name:'设置',path:'/setting'},
  {name:'用户管理',
    path:'/user',
    children:[
      {name:'用户列表',path:'/user/list'},
      {name:'用户删除',
       path:'/user/del',
       children:[
        {name:'用户列表1',path:'/user/list'},
        {name:'用户删除2',path:'/user/del'},
      ]
    },
    ]
  },
]
const {SubMenu} = Menu
class customNav extends Component{
  renderItem = (data) => {
    return data.map((item,index) => {
      if(item.children) {
        return (
        <SubMenu title={item.name}>
          {this.renderItem(item.children)}
        </SubMenu>
        )
      } else {
        return <Menu.Item>{item.name}</Menu.Item>
      }
    })
  }
  render() {
    console.log(this,'自定义导航')
    return (
      <div className="custom">
        <Menu style={{ width: 250 }} mode="vertical">
          {this.renderItem(navData)}
          {/* <Menu.Item>首页</Menu.Item>
          <Menu.Item>设置</Menu.Item>
          <SubMenu title='用户管理'>
            <Menu.Item>用户列表</Menu.Item>
            <Menu.Item>用户删除</Menu.Item>
          </SubMenu>
          <SubMenu title='权限管理'>
            <Menu.Item>权限列表</Menu.Item>
            <Menu.Item>权限删除</Menu.Item>
          </SubMenu> */}
      </Menu>
      </div>
    )
  }
}

export default withRouter(customNav)