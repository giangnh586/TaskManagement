export interface AppAction {
  type: string,
  payload: any
}

function BaseAction (type: string, payload: any): AppAction {
  let action: AppAction = {type: type, payload: payload};
  return action;
}

export default BaseAction;
