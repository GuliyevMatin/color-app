import { SETCOLOR, SETGROUP } from "../types/color";
const initialState = {
  color: [],
  groups: [],
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCOLOR:
      if (state.color.length === 6) {
        return { ...state, color: [] };
      } else {
        return { ...state, color: [...state.color, action.payload] };
      }
    case SETGROUP:
      return { ...state, groups: [...state.groups, action.payload] };
    default:
      return state;
  }
};
