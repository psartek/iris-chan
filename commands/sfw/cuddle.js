//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Cuddle extends Iris_command {
  constructor(client) {
    super(client, {
      name: "cuddle",
      description: "image 'cuddle'",
      usage: "Icuddle",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    var nekos = await Object.assign(neko.sfw.cuddle());
    let title = true;
    var user = message.mentions.users.first();
    if (user) {
      var member = message.guild.member(user);
      if (member) title = false;
    }
    message.channel.send({
      embed: {
        title: title ? `${this.client.username} carresse ${message.author.username}` : `${message.author.username} carresse ${user.username}`,
        color: this.client.colorEmbed(this.client.color),
        description: `${this.help.name} demandé par: ${message.author}`,
        image: {
          url: nekos.url,
        },
      }
    })
  };
};

module.exports = Cuddle;