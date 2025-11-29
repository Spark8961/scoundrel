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
        room: {
            cards: drawn,
            canHeal: true,
        },
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

    if (action.type === "invalid_input") nextState.lastMessage = "Invalid input.";

    if (action.type === "use_card") {
        const index = action.index;
        const card = nextState.room.cards[index];
        if (!card) nextState.lastMessage = "That slot is empty";
        const suit = card.suit;
        const rank = card.rank;

        if (suit === "hearts") {
            const preHealHp = nextState.player.currentHp;
            const hpToHeal = nextState.room.canHeal ? rank : 0;

            nextState.player = { ...nextState.player };
            nextState.room = { ...nextState.room, cards: [...nextState.room.cards] };

            nextState.player.currentHp = Math.min(nextState.player.maxHp, nextState.player.currentHp + hpToHeal);
            nextState.lastMessage = `Healed ${nextState.player.currentHp - preHealHp} HP`;
            nextState.room.canHeal = false;
        } else {
            nextState.lastMessage = "This Suit is not implemented.";
            nextState.room = { ...nextState.room, cards: [...nextState.room.cards] };
        }

        nextState.discard = [...nextState.discard, card];
        nextState.room.cards = nextState.room.cards.filter((_, i) => i !== index);
    }

    return nextState;
};
