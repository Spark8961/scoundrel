import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output, stderr as errOutput } from "node:process";
import { startGame, update } from "../engine/engine.js";
import { render } from "./renderer.js";
import { parseInput } from "./inputparser.js";

const rl = createInterface({ input, output });

const gameLoop = async () => {
    let state = startGame();
    render(state);

    try {
        while (true) {
            try {
                const answer = await rl.question("test: ");
                const action = parseInput(answer);
                state = update(state, action);
                render(state);
            } catch (err) {
                errOutput.write(String(err) + "\n");
                process.exit(1);
            }
        }
    } finally {
        rl.close();
    }
};

gameLoop();
