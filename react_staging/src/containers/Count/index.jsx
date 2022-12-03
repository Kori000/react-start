// 引入 Count 的 UI 组件
import CountUI from '../../components/Count';
// 引入 connect 用于连接 redux 与 UI 组件
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/count_action';


export default connect(
  state => ({ kx: state }),
  // 终极简写 API 层面的优化
  {
    jia: createIncrementAction,
    jian: createDecrementAction
  }
)(CountUI)
