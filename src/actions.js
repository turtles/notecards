/*
 * action types
 */

export const ADD_NOTECARD = 'ADD_NOTECARD'
export const REMOVE_NOTECARD = 'REMOVE_NOTECARD'
export const UPDATE_NOTECARD = 'UPDATE_NOTECARD'

/*
 * action creators
 */

export function addNotecard() {
  return { type: ADD_NOTECARD }
}

export function removeNotecard(id) {
  return { type: REMOVE_NOTECARD, id }
}

export function updateNotecard(id, word, definition) {
  return { type: UPDATE_NOTECARD, id, word, definition }
}
