import { DEMO_GET_TYPE, DEMO_POST_TYPE, DemoState, DemoActionTypes } from '../actions/types';

const initialState: DemoState = {
  // Application State values initialized here
  fieldToBeUpdatedForGetType: {},
  fieldToBeUpdatedForPostType: {}
};

export function demoReducer(
  state = initialState,
  action: DemoActionTypes
) {
  switch(action.type) {
    case DEMO_GET_TYPE:
      return {
        ...state,
        fieldToBeUpdatedForGetType: action.payload
      };
    
    case DEMO_POST_TYPE:
      return {
        ...state,
        fieldToBeUpdatedForPostType: action.payload
      };

    default:
      return state;
  }
}
