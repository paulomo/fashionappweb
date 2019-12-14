import { combineReducers } from 'redux';
import authReducer from '../../pages/auth/store/reducers';

/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = asyncReducers =>
  combineReducers({
    authReducer,
    ...asyncReducers
  });

export default createReducer;