/* eslint-disable */
import questions from './questions';

export default {
  en: {
    translation: {
      "QUESTIONS": questions["QUESTIONS_EN_US"],
      "GAME_NAME": "Reindeer Trivia", // Be sure to change this for your skill.
      "HELP_MESSAGE": "I will ask you %s multiple choice questions. Respond with the number of the answer. " +
          "For example, say one, two, three, or four. To start a new game at any time, say, start game. ",
      "REPEAT_QUESTION_MESSAGE": "To repeat the last question, say, repeat. ",
      "ASK_MESSAGE_START": "Would you like to start playing?",
      "HELP_REPROMPT": "To give an answer to a question, respond with the number of the answer. ",
      "STOP_MESSAGE": "Would you like to keep playing?",
      "CANCEL_MESSAGE": "Ok, let\'s play again soon.",
      "NO_MESSAGE": "Ok, we\'ll play another time. Goodbye!",
      "TRIVIA_UNHANDLED": "Try saying a number between 1 and %s",
      "HELP_UNHANDLED": "Say yes to continue, or no to end the game.",
      "START_UNHANDLED": "Say start to start a new game.",
      "NEW_GAME_MESSAGE": "Welcome to %s. ",
      "WELCOME_MESSAGE": "I will ask you %s questions, try to get as many right as you can. " +
      "Just say the number of the answer. Let\'s begin. ",
      "ANSWER_CORRECT_MESSAGE": "correct. ",
      "ANSWER_WRONG_MESSAGE": "wrong. ",
      "CORRECT_ANSWER_MESSAGE": "The correct answer is %s: %s. ",
      "ANSWER_IS_MESSAGE": "That answer is ",
      "TELL_QUESTION_MESSAGE": "Question %s. %s ",
      "GAME_OVER_MESSAGE": "You got %s out of %s questions correct. Thank you for playing!",
      "SCORE_IS_MESSAGE": "Your score is %s. ",
    },
  },
  'en-US': {
    translation: {
      "QUESTIONS": questions["QUESTIONS_EN_US"],
      "GAME_NAME": "American Reindeer Trivia", // Be sure to change this for your skill.
    },
  },
  'en-GB': {
    translation: {
      QUESTIONS: questions["QUESTIONS_EN_GB"],
      GAME_NAME: "British Reindeer Trivia", // Be sure to change this for your skill.
    },
  },
  de: {
    "translation": {
      "QUESTIONS": questions["QUESTIONS_DE_DE"],
      "GAME_NAME": "Wissenswertes über Rentiere in Deutsch", // Be sure to change this for your skill.
      "HELP_MESSAGE": "Ich stelle dir %s Multiple-Choice-Fragen. Antworte mit der Zahl, die zur richtigen Antwort gehört. " +
          "Sage beispielsweise eins, zwei, drei oder vier. Du kannst jederzeit ein neues Spiel beginnen, sage einfach „Spiel starten“. ",
      "REPEAT_QUESTION_MESSAGE": "Wenn die letzte Frage wiederholt werden soll, sage „Wiederholen“ ",
      "ASK_MESSAGE_START": "Möchten Sie beginnen?",
      "HELP_REPROMPT": "Wenn du eine Frage beantworten willst, antworte mit der Zahl, die zur richtigen Antwort gehört. ",
      "STOP_MESSAGE": "Möchtest du weiterspielen?",
      "CANCEL_MESSAGE": "OK, dann lass uns bald mal wieder spielen.",
      "NO_MESSAGE": "OK, spielen wir ein andermal. Auf Wiedersehen!",
      "TRIVIA_UNHANDLED": "Sagt eine Zahl beispielsweise zwischen 1 und %s",
      "HELP_UNHANDLED": "Sage ja, um fortzufahren, oder nein, um das Spiel zu beenden.",
      "START_UNHANDLED": "Du kannst jederzeit ein neues Spiel beginnen, sage einfach „Spiel starten“.",
      "NEW_GAME_MESSAGE": "Willkommen bei %s. ",
      "WELCOME_MESSAGE": "Ich stelle dir %s Fragen und du versuchst, so viele wie möglich richtig zu beantworten. " +
      "Sage einfach die Zahl, die zur richtigen Antwort passt. Fangen wir an. ",
      "ANSWER_CORRECT_MESSAGE": "Richtig. ",
      "ANSWER_WRONG_MESSAGE": "Falsch. ",
      "CORRECT_ANSWER_MESSAGE": "Die richtige Antwort ist %s: %s. ",
      "ANSWER_IS_MESSAGE": "Diese Antwort ist ",
      "TELL_QUESTION_MESSAGE": "Frage %s. %s ",
      "GAME_OVER_MESSAGE": "Du hast %s von %s richtig beantwortet. Danke fürs Mitspielen!",
      "SCORE_IS_MESSAGE": "Dein Ergebnis ist %s. ",
    },
  },
};
