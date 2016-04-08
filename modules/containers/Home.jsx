import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import  * as countactions from '../actions/count'
import { bindActionCreators } from 'redux'
import  Counter from '../components/Counter/Counter'

class Home extends Component {
  render() {
    const { value, actions } = this.props
    return (
       <Counter value={value} actions={actions}/>
    )
  }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    value: state.count.number
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
/*function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment())
  };
}*/

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countactions, dispatch)
  }
}

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(Compents)
/*export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home)*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)