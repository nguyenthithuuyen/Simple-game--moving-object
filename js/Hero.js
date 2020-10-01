class Hero {
    constructor(image, top, left, size,speed) {
        this.image = image;
        this.top = top;
        this.left = left;

        this.speed = speed;

        this.size = size;
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="'  + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };
moveRight() {
        this.left += 30;
        console.log('ok: ' + this.left);
    };
moveDown(){
        this.top += 30;
        console.log('ok: ' + this.top);
    };
moveLeft () {
        this.left -= 30;
        console.log('ok: ' + this.left);
    }
    moveUp() {
        this.top -= 30;
        console.log('ok: ' + this.top);
    }
}