import {reqTest} from '../api/index.js'
import {RECEIVE_TEST} from './mutations-type.js'
export default {
  getTest ({state, commit}) {
    const result = reqTest()
    commit(RECEIVE_TEST, result)
  }
}
