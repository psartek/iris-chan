//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Holo extends Iris_command {
  constructor(client) {
    super(client, {
      name: "holo",
      description: "image 'holo'",
      usage: "Iholo",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    var nekos = await Object.assign(neko.sfw.holo());
    message.channel.send({
      embed: {
        color: this.client.colorEmbed(this.client.color),
        description: `${this.help.name} demandé par: ${message.author}`,
        image: {
          url: nekos.url,
        },
      }
    })
  };
};

module.exports = Holo;