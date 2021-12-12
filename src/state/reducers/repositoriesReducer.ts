import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface IRepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: IRepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: IRepositoriesState = initialState,
  action: Action
): IRepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
