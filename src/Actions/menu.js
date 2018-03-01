/*
 * action types
 */

export const GOTO_QUIZ = 'GOTO_QUIZ';
export const GOTO_NOTECARD_EDITOR = 'GOTO_NOTECARD_EDITOR'

/*
 * action creators
 */

export function gotoQuiz() {
  return { type: GOTO_QUIZ }
}

export function gotoNotecardEditor() {
  return { type: GOTO_NOTECARD_EDITOR }
}
