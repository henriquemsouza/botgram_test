const botgram = require("botgram")
const bot = botgram("token_here")


var date = new Date();
var current_hour = date.getHours();

var counter = 0;

bot.command("start", (msg, reply) =>
  reply.text(`Ola meu guerreiro,  eu sou ${bot.get("firstname")}`))

bot.command("help", (msg, reply) =>
  reply.text("I have no idea what is going on."))


bot.command("id", function (msg, reply, next) {
  reply.text(`Meu id: ${bot.get("id")}`);
});

bot.command("up", function (msg, reply, next) {
  counter++;
  reply.text(counter.toString().split("").map(numberToEmoji).join(""));
});

function numberToEmoji(n) { return n + "\u20E3"; }

// bot.message(function (msg, reply, next) {
//   reply.text("");
//   try {
//     reply.message(`Echo: ${msg}`);
//   } catch (err) {
//     reply.text("Você fala de uma forma burra cara");
//   }
// });



bot.on("synced", function () {
  console.log("Bot ready.");
});

bot.command((msg, reply) =>
  reply.text("Invalid command."))
