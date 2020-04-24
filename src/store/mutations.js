import {RECEIVE_TEST} from './mutations-type.js'
export default {
  [RECEIVE_TEST] (state, result) {
    state.test = result
  }
}
