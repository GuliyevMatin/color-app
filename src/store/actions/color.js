import { SETCOLOR, SETGROUP } from "../types/color";

export const setColor = (payload) => ({
  type: SETCOLOR,
  payload,
});


export const setGroup = (payload) => ({
  type: SETGROUP,
  payload
})
