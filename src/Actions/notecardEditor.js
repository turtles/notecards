/*
 * action types
 */

export const ADD_NOTECARD = 'ADD_NOTECARD'
export const REMOVE_NOTECARD = 'REMOVE_NOTECARD'
export const UPDATE_NOTECARD = 'UPDATE_NOTECARD'
export const IMPORT_NOTECARDS = 'IMPORT_NOTECARDS';
export const EXPORT_NOTECARDS = 'EXPORT_NOTECARDS';

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

export function importNotecards(results) {
  return { type: IMPORT_NOTECARDS, results }
}

export function exportNotecards() {
  return { type: EXPORT_NOTECARDS }
}
