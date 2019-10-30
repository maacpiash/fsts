// Describing the shape of the 'Demo' slice of the AppState
export interface DemoState {
  // Fields of 'Demo' State go here
}

// Types of actions go here
export const DEMO_GET_TYPE = "DEMO_GET_TYPE";
export const DEMO_POST_TYPE = "DEMO_POST_TYPE";

interface DemoGetAction {
  type: typeof DEMO_GET_TYPE;
  payload: DemoState;
}

interface DemoPostAction {
  type: typeof DEMO_POST_TYPE;
  payload: DemoState;
}

export type DemoActionTypes = DemoGetAction | DemoPostAction;
