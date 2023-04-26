const { stdin: input, stdout: output } = require("node:process");
const { version } = require("../package.json");
const readline = require("node:readline");

const r = readline.createInterface({ input, output });
const prefix = "!";

console.log(`Copenhagent v${version}`);
console.log(`Type "${prefix}help" for more information.`);

r.on("line", (data) => {
    const args = data.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    switch (cmd) {
        case "help": require("./commands/help").exec({ prefix, args });
        break;
        case "lookup": require("./commands/lookup").exec({ prefix, args });
        break;
        default: console.error(`Command: "${cmd}" does not exist.`);
    }
});