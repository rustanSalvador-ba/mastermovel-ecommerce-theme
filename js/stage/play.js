import * as me from '../../node_modules/melonjs/dist/melonjs.module.js'; 
import * as HUD from '../renderables/hud/container.js'
import data from '../../data/data.js'

export default class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        // game.world.addChild(new ColorLayer("background", "#202020"));

        // // add a font text display object
        // HUD.game.world.addChild(new me.BitmapText(game.viewport.width / 2, game.viewport.height / 2,  {
        //     font : "PressStart2P",
        //     size : 4.0,
        //     textBaseline : "middle",
        //     textAlign : "center",
        //     text : "Aventuras de Nina"
        // }));
        me.level.load("mapa3");
		// reset the score
		data.score = 0;

		// add our HUD to the game world
		this.HUD = new me.Container();
        console.log("hud",this.HUD)
		me.game.world.addChild(this.HUD);
        
    }

    onDestroyEvent() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
};
