/*
 * action types
 */
export const FLIP = 'FLIP';
export const NEXT_CARD = 'NEXT_CARD';
export const PREVIOUS_CARD = 'PREVIOUS_CARD';
export const CORRECT = 'CORRECT';
export const INCORRECT = 'INCORRECT';
export const DEFINITION_FIRST_CHANGED = 'DEFINITION_FIRST_CHANGED';
export const RESTART_QUIZ = 'RESTART_QUIZ';
/*
 * action creators
 */
export function flip() {
  return { type: FLIP };
};

export function nextCard() {
 return { type: NEXT_CARD };
};

export function previousCard() {
 return { type: PREVIOUS_CARD };
};

export function correct() {
 return { type: CORRECT };
};

export function incorrect(cardIndex) {
 return { type: INCORRECT, cardIndex };
};

export function definitionFirstChanged() {
 return { type: DEFINITION_FIRST_CHANGED }
};

export function restartQuiz() {
  return { type: RESTART_QUIZ }
};
