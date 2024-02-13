import { commentService } from "../services/comment.service"

export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_FILTER = 'SET_FILTER'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    comments: [],
    isLoading: false,
    filterBy: commentService.getDefaultFilter(),
}

export function commentReducer(state = initialState, action) {
    let comments

    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: action.comments }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ADD_COMMENT:
            comments = [action.comment, ...state.comments]
            return { ...state, comments }

        // Filter
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

        default:
            return state
    }
}


