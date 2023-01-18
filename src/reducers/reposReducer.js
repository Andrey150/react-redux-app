const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING_ERROR = 'SET_IS_FETCHING_ERROR';

const defaultState = {
  items : [

  ],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  isFetchingError: false,
}


export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        isFetching: false,
        totalCount: action.payload.total_count
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case SET_IS_FETCHING_ERROR:
      return {
        ...state,
        isFetchingError: action.payload
      }

    default:
      return state
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload:repos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload:bool})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload:page})
export const setIsFetchingError = (bool) => ({type: SET_IS_FETCHING_ERROR, payload:bool})

