// 引入 Count 的 UI 组件
import CountUI from '../../components/Count';
// 引入 connect 用于连接 redux 与 UI 组件
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/count_action';



function mapStateToProps (state, store) {
  return { kx: state }
}
function mapDispatchToProps (dispatch, store) {
  return {
    jia: data => dispatch(createIncrementAction(data)),
    jian: data => dispatch(createDecrementAction(data)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
