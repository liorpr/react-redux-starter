
import { INCREMENT, DECREMENT } from '../constants';

export default function( state = 0, action ) {
  switch ( action.type ) {
    case INCREMENT:
      return state + 1;
      break;

    case DECREMENT:
      return state - 1;
      break;

    default:
      return state;
  }
}
