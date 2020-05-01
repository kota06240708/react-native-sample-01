import { Action } from 'redux'

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

// export interface IUpdateMessageAction extends Action {
//   message: string;
// }
/**
 * メッセージを変更するアクションを作成する
 * @param message 変更するメッセージ
 */
export const countUp: () => Action = (): Action => {
  return {
    type: UPDATE_MESSAGE
  }
}
