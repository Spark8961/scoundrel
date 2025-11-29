import type { GameAction } from "../engine/types.js";

export const parseInput = (answer: string): GameAction => {
    const command = answer.trim().toLowerCase();
    if (command === "q") return { type: "quit_game" };
    if (command === "s") return { type: "skip_room" };

    let index = Number(command) - 1;
    if (isNaN(index) || (index < 0 && index > 3)) return { type: "invalid_input" };
    return { type: "use_card", index: index };
};
