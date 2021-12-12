import { ActionType } from '../action-types';

export interface ISearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface ISearchSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface IErrorsAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | ISearchRepositoriesAction
  | ISearchSuccessAction
  | IErrorsAction;
