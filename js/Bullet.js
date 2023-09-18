(function(){
    var Bullet=window.Bullet=function(params){
        this.speed=params.speed;
        this.toward=params.toward;
        this.attackBack=params.attackBack;
        this.x=params.x;
        this.y=params.y;
        this.shooted=false;
        this.shootedAudio=new Audio()
        this.shootedAudio.src='../audio/shoot.wav'
    }
    Bullet.prototype.render=function(){
        if(!this.shooted){
            game.ctx.fillStyle='#FF4006'
            game.ctx.fillRect(this.x,this.y,20,5);
        }
    }
    Bullet.prototype.update=function(){
        if(!this.shooted){
            this.toward=="right"?this.x+=this.speed:this.x-=this.speed;
            if(this.x+10>game.Fighter1.x&&this.x+10<game.Fighter1.x+30&&this.y>game.Fighter1.y&&this.y<game.Fighter1.y+50){
                // console.log("shooted");
                this.shootedAudio.play()
                game.Fighter1.shooted(this.toward,this.attackBack)
                this.shooted=true;
            }
            if(this.x+10>game.Fighter2.x&&this.x+10<game.Fighter2.x+30&&this.y>game.Fighter2.y&&this.y<game.Fighter2.y+50){
                // console.log("shooted");
                this.shootedAudio.play()
                game.Fighter2.shooted(this.toward,this.attackBack)
                this.shooted=true;
            }
        }

    }
})();