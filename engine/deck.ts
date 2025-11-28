import type { Card, Deck, Ranks, Suits } from "./types.js";

const SUITS: Suits[] = ["clubs", "spades", "diamonds", "hearts"];
const RANKS: Ranks[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const createDeck = () => {
    const deck: Deck = [];
    for (const suit of SUITS) {
        for (const rank of RANKS) {
            if ((suit === "diamonds" || suit === "hearts") && rank > 10) continue;
            deck.push({ suit, rank });
        }
    }
    return deck;
};

export const shuffle = (deck: Deck) => {
    const copy: Deck = [...deck];

    if (deck.length < 2) return copy;

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
};

export const getCardFace = (card: Card) => {
    switch (card.rank) {
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
        case 14:
            return "A";
        default:
            return card.rank.toString();
    }
};

export const getCardSuit = (card: Card) => {
    switch (card.suit) {
        case "spades":
            return "♠";
        case "diamonds":
            return "♦";
        case "clubs":
            return "♣";
        case "hearts":
            return "♥";
    }
};
