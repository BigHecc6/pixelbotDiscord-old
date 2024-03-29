module.exports = {
  name: "queue",
  guildOnly: true,
  musicCMD: true,
  async execute(client, message, args, ops) {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send("There currently isn't any music playing.");
    let queue = fetched.queue;
    let nowPlaying = queue[0];
    let resp = `__**Now Playing:**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue:**__\n`;
    for (var i = 1; i < queue.length; i++) {
      resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
    }
    message.channel.send(resp);
  }
}
