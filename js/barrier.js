
function Barrier() {
    var left;
    var image;
    var affect;
    
    this.getLeft = function () {
        return left;
    }
    
    this.getImage= function () {
        return image;
    }
    
    this.getAffect = function () {
        return affect;
    }

    this.setLeft = function (value) {
        left = value;
    }

    this.setImage= function (value) {
        image = value;
    }

    this.setAffect = function () {
        affect = value;
    }

}
Barrier.prototype.init = function () {
    this.setAffect(Math.floor(Math.random() * 6) -3);

    if (this.getAffect() > 0) {
        this.setImage('yagoda');
    } else {
        this.setImage('kamen');
    }
}

Barrier.prototype.destroy = function () {
    //
}