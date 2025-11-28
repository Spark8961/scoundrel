export type Suits = "spades" | "hearts" | "diamonds" | "clubs";

export type Ranks = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
    suit: Suits;
    rank: Ranks;
};

export type Deck = Card[];
export type Room = Card[];
export type Discard = Card[];

type Player = {
    currentHp: number;
    maxHp: 20;
    weapon: Ranks | null;
};

export type GameState = {
    deck: Deck;
    room: Room;
    discard: Discard;
    player: Player;
    lastMessage: string | null;
};

export type GameAction = { type: "use_card"; index: number } | { type: "skip_room" } | { type: "quit_game" };
