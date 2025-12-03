import { getCardFace, getCardSuit } from "../engine/deck.js";
import type { GameState } from "../engine/types.js";

export const render = (state: GameState) => {
    let layout = "";
    layout += `HP: ${state.player.currentHp}\n`;
    layout += `Weapon: ${!state.player.weapon ? "None" : state.player.weapon.rank.toString()} | `;
    layout += `Past Hits: ${!state.player.weapon?.lastHit ? "None" : state.player.weapon.lastHit.toString()}\n`;
    layout += `Deck: ${state.deck.length} cards remaining.\n`;
    layout += `Room: \n`;
    for (let i = 0; i <= 3; i++) {
        const card = state.room.cards[i];
        layout += !card ? `${i + 1}: [EMPTY]\n` : `${i + 1}: ${getCardFace(card)}${getCardSuit(card)}\n`;
    }
    layout += `Last: ${state.lastMessage ?? "-"} \n`;
    layout += `Actions:\n[1-4]: Play Card\ns: Skip Room\nq: Quit Game\n`;
    console.clear();
    process.stdout.write(layout);
};
