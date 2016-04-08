import React,{Component,PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import 'antd/lib/index.css';
import './app.css'
import { Menu, Breadcrumb, Icon } from 'antd';
import { fetchMenusIfNeeded } from '../actions/menu'
import 'babel-polyfill'
import { connect } from 'react-redux'


const SubMenu = Menu.SubMenu;

class App  extends Component{
  constructor(props) {
    console.log(props,"constructor=======")
    super(props)
  }
  componentDidMount() {
    console.log('componentDidMount')
    const {dispatch} = this.props
    console.log(dispatch)
    dispatch(fetchMenusIfNeeded())
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps)
     /*if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
     }*/
  }
  
 render(){
   const {menus} = this.props
   console.log("render====",menus)
    
    var createItem = function(item) {
      return <SubMenu key={item.id} title={<span><Icon type="user" />{item.text}</span>}>
         <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/foo">Foo</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/bar">bar</Link></Menu.Item>
                <Menu.Item key="4"><a href="https://www.baidu.com">baidu</a></Menu.Item>
      </SubMenu>;
    };
    
   return(

<div className="ant-layout-topaside">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-logo">baidu金融demo</div>
        </div>
      </div>      
      <div className="ant-layout-wrapper">
        <div className="ant-layout-container">
          <aside className="ant-layout-sider">
            <Menu mode="inline"  defaultSelectedKeys={['1']} defaultOpenKeys={['1']} >
              {

                menus.map(createItem)

              }
            </Menu>
          </aside>
          <div className="ant-layout-content">
            <div style={{ height: 240 }}>
              <div style={{clear: 'both'}}>{this.props.children}</div>
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
          
        </div>
      </div>
    </div>
    )

 }






/*    render(){
      return(
       <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
        {' '}
        <a href="https://www.baidu.com">baidu</a>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
    </div>
    )
    }*/



}
App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    items: menus
  } = state.menu

  return {
    menus,
    isFetching,
    lastUpdated
  }
}



export default connect(
  mapStateToProps
)(App)