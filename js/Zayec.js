
function Zayec(){
    Runner.call(this);

    this.setImage('zayec');
    this.setSpeed(Zayec.SPEED);
}

Zayec.SPEED = 5;
Zayec.prototype = Object.create(Runner.prototype);
Zayec.prototype.constructor = Zayec;