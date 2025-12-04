import type { GameAction, Phase } from "../engine/types.js";

export const parseInput = (answer: string, phase: Phase): GameAction => {
    const command = answer.trim().toLowerCase();
    if (command === "q") return { type: "quit_game" };
    if (command === "s" && phase === "select_card") return { type: "skip_room" };

    let index = Number(command) - 1;
    if (isNaN(index)) return { type: "invalid_input" };
    if (phase === "select_card") {
        if (index < 0 || index > 3) return { type: "invalid_input" };
        return { type: "use_card", index: index };
    } else {
        if (index === 0) return { type: "attack", mode: "barehand" };
        if (index === 1) return { type: "attack", mode: "weapon" };
        return { type: "invalid_input" };
    }
};
