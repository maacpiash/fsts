import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../store'
import { DEMO_GET_TYPE, DEMO_POST_TYPE } from './types';

export const demoGet = (payload: any) => (dispatch: any) =>
  dispatch({
    type: DEMO_GET_TYPE,
    payload
  });

export const demoPost = (payload: any): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: any) => {
  const result = await GetSomeString();
  return dispatch({
    type: DEMO_POST_TYPE,
    payload: result
  });
}

const GetSomeString = async () => Promise.resolve('Just a demo string, could have been an API call');
