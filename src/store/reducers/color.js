import {SETCOLOR} from "../types/color"

const initialState = {
  color: [],
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCOLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
