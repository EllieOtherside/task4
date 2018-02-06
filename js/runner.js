
function Runner() {
    var speed;
    var left = 0;
    var image;

    this.getSpeed = function () {
        return speed;
    }

    this.setSpeed = function (value) {
        if (value >=0) {
            speed = value;
        }
    }

    this.setLeft = function (value) {
        left = value;
    }

    this.getLeft = function () {
        return left;
    }
    
    this.getImage = function () {
        return image;
    }

    this.setImage = function (value) {
        image= value;
    }
}

Runner.prototype.run = function() {
    if(this.getLeft() + this.getSpeed() >= Game.TRACK_LENGTH) {
        this.setLeft(Game.TRACK_LENGTH);
    } else {
        this.setLeft(this.getPosition() + this.getSpeed());
    }
    document.querySelector('.' + this.getImage()).style.left = Game.CEIL_WIDTH * this.getLeft() + 'px';
}

Runner.prototype.init = function() {
    var template = document.getElementById('tmplate').cloneNode(true);
    template.classList.add(this.getImage());
    template.classList.remove('hidden');
    return template;
}
