
module.exports = {
  guildOnly: false,
  execute(client, message, args) {
    message.author.send(`Here are the commands:
**ADMINISTRATIVE**

__!ban__:
Bans a specified member.
Context: "!ban (member) (number of hours OR indef) [reason]"

__!kick__:
Kicks a specified member.
Context: "!kick (member) [reason]"

__![un]mute__:
[Un]Mutes a specified member.
Context: "![un]mute (member)"

__!clear__:
Clears a specified number of messages.
Context: "!clear (number from 1 to 99)"

**MUSIC**
__!play__
Plays or adds a specified song to queue.
Context: "!play (Song URL)"

**MISCELLANEOUS**

__!ping__:
Depicts the ping of your your connection.
Contect: "!ping"`);
  },
};
