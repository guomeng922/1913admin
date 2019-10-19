import React,{Component} from 'react'
import './index.less'
import CustomNav from '../customNav'

class Admin extends Component{
  render() {
    return (
      <div className="admin">
        <div className="admin-nav">
          <CustomNav></CustomNav>
        </div>
        <div className="admin-content">
          <div className="admin-content-head">
            头部信息
          </div>
          <div className="admin-content-middle">
            222
            {this.props.children}
          </div>
          <div className="admin-content-foot">
            底部信息
          </div>
        </div>
      </div>
    )
  }
}

export default Admin