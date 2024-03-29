const search = require('yt-search');

module.exports = {
  name: "search",
  guildOnly: true,
  musicCMD: true,
  async execute(client, message, args, ops) {
    search(args.join(' '), function(err, res) {
      if (err) return message.channel.send("Something went wrong.");
      let videos = res.videos.slice(0, 10);
      let resp = '';
      for (var i in videos) {
        resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
      }
      resp += `\n**Choose a number between \`1-${videos.length}\`**`;
      message.channel.send(resp);
      const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
      const collector = message.channel.createMessageCollector(filter);
      collector.videos = videos;
      collector.once('collect', function(m) {
        let commandFile = require(`./play.js`);
        commandFile.execute(client, message, [this.videos[parseInt(m.content)-1].url], ops);
        console.log("https://www.youtube.com" + this.videos[parseInt(m.content)-1].url);
      })
    });
  }
}
