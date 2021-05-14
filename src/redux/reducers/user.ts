// @flow
import { Dispatch } from 'redux';

import initialState from '../initialState';
import { ReduxActions } from '../../types/ReduxActions';
import { InitialState, User } from '../../types/StateTypes';

// Actions
const GET_PROFILE = 'user/GET-PROFILE';
const UPDATE_PROFILE = 'user/UPDATE-PROFILE';

// Reducer
export default function reducer(
  state: InitialState = initialState,
  action: ReduxActions,
): InitialState {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function getProfile(payload: User) {
  return async (dispatch: Dispatch) => dispatch({ type: GET_PROFILE, payload });
}

export function updateProfile(input: User) {
  return async (dispatch: Dispatch) =>
    dispatch({ type: UPDATE_PROFILE, payload: input });
}
