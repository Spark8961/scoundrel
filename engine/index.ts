import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output, stderr as errOutput } from "node:process";

const rl = createInterface({ input, output });

const gameLoop = async () => {
    try {
        const answer = await rl.question("test: ");
        output.write(answer + "\n");
    } catch (err) {
        errOutput.write(String(err) + "\n");
        process.exit(1);
    } finally {
        rl.close();
    }
};

gameLoop();
