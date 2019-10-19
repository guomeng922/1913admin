import React from 'react'
import Loadable from 'react-loadable'

//通用的过场组件
const loadingComponent = ()=>{
  return (
    <div>loading</div>
  )
}
// console.log(LoadingComponent)
 
export default Loadable({
  loader:() => import('./index.js'),
  // 需要被懒加载的组件
  loading:loadingComponent
  // 加载过程中显示的过场
});