import { createDeck, shuffle } from "./deck.js";
import type { Deck, GameAction, GameState } from "./types.js";

const drawRoom = (deck: Deck, isNewRoom: boolean = true) => {
    const cardsToDraw = isNewRoom ? 4 : 3;
    const drawn = deck.slice(0, cardsToDraw);
    const remaining = deck.slice(cardsToDraw);
    return { drawn, remaining };
};

export const startGame = () => {
    const deck = shuffle(createDeck());
    const { drawn, remaining } = drawRoom(deck);
    const initialState: GameState = {
        deck: remaining,
        room: drawn,
        discard: [],
        player: {
            currentHp: 20,
            maxHp: 20 as const,
            weapon: null,
        },
        lastMessage: null,
    };

    return initialState;
};

export const update = (state: GameState, action: GameAction) => {
    const nextState = { ...state };
    nextState.lastMessage = "Update Called";
    return nextState;
};
