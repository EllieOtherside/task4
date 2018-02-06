//console.log ( '%c%s', 'color: green; font: 46px Tahoma;', 'Пора писать логику игры' );

function Game() {
    var track1;
    var track2;

    this.getTrack1 = function () {
        return track1;
    }

    this.getTrack2 = function () {
        return track2;
    }

    this.setTrack1 = function (value) {
        track1 = value;
    }

    this.setTrack2 = function (value) {
        track2 = value;
    }
}

window.onload = function () {

    Game.CEIL_WIDTH = 55;
    Game.TRACK_LENGTH = 20;

    game = new Game();
    game.init();

    document.getElementById("runBtn").onclick = function () {
        game.run();
    }

    document.getElementById("restartBtn").onclick = function () {
        game.restart();
    }

}

Game.prototype.init = function () {
    this.setTrack1(document.getElementById("track1"));
    this.setTrack2(document.getElementById("track2"));

    volk = new Volk();
    zaec = new Zayec();

    this.getTrack1().appendChild(zaec.init());
    this.getTrack2().appendChild(volk.init());
}

Game.prototype.run = function () {
//
}

