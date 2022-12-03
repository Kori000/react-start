// 引入 Count 的 UI 组件
import CountUI from '../../components/Count';
// 引入 redux
import store from '../../redux/store'
// 引入 connect 用于连接 redux 与 UI 组件
import { connect } from 'react-redux'


export default connect()(CountUI)
