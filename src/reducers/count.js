import { INCREMENT, DECREMENT } from '../actions'

const inititalState = { value: 0 }
export default (state = inititalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
    default:
      return state
  }
}