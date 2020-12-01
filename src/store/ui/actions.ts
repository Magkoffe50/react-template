import {Action} from '../../types/model';

type ActionTypes = 'RESET_UI' | string;

export type UIAction = Action<ActionTypes>;

export const resetUI = (): UIAction => ({
  type: 'RESET_UI',
});
