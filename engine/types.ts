export type Suits = "spades" | "hearts" | "diamonds" | "clubs";

export type Ranks = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
    suit: Suits;
    rank: Ranks;
};

export type Deck = Card[];
export type Room = { cards: Card[]; canHeal: boolean };
export type Discard = Card[];
export type Weapon = { rank: Ranks; lastHit: Ranks[] | null } | null;

type Player = {
    currentHp: number;
    maxHp: 20;
    weapon: Weapon;
};

export type GameState = {
    deck: Deck;
    room: Room;
    discard: Discard;
    player: Player;
    lastMessage: string | null;
};

export type GameAction = { type: "use_card"; index: number } | { type: "skip_room" } | { type: "quit_game" } | { type: "invalid_input" };
