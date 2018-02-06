
function Zayec(){
    Runner.call(this);

    this.setImage('zayec');
    this.setSpeed(Zayec.SPEED);
}

Zayec.SPEED = 5;
Zayec.prototype = Object.create(Runner);
Zayec.prototype.constructor = Zayec;