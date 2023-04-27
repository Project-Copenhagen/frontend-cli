const path = require("node:path");
const fs = require("node:fs");

module.exports = {
    name: "help",
    description: "The command that you are seeing right now.",
    exec: ({ prefix }) => {
        console.log("\nCommands:")
        console.log("----------------------------------");

        const files = fs.readdirSync(path.join("src", "commands"))
            // .filter(name => name !== "help.js");

        for (let i = 0; i < files.length; i++) {
            const file = require(
                path.resolve(
                    path.join("src", "commands", files[i])
                )
            );

            console.log(`${prefix + file.name}  ${file.description}`);
        }

        if (files.length === 0) {
            console.log("No commands are found...");
        } else {
            console.log("\n");
        }
    }
}