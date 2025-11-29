import { getCardFace, getCardSuit } from "../engine/deck.js";
import type { GameState } from "../engine/types.js";

export const render = (state: GameState) => {
    let layout = "";
    layout += `HP: ${state.player.currentHp} `;
    layout += `Weapon: ${!state.player.weapon ? "None" : state.player.weapon.toString()}\n`;
    layout += `Deck: ${state.deck.length} cards remaining.\n`;
    layout += `Room: \n`;
    state.room.cards.forEach((card, i) => {
        layout += `${i + 1}: ${getCardFace(card)}${getCardSuit(card)}\n`;
    });
    layout += `Last: ${state.lastMessage ?? "-"} \n`;
    layout += `Actions:\n[1-4]: Play Card\ns: Skip Room\nq: Quit Game\n`;
    console.clear();
    process.stdout.write(layout);
};
