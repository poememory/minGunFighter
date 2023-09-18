(function(){
    var Ability=window.Ability=function(number,ability){
        this.state=false,
        this.number=number
        this.ability=ability
        this.Bomblist=[]
        this.smokeWhere=[]
        switch (ability) {
            case "doubleJump":
                this.coolingtime=1000/20  
                this.lastingtime=20;        
                break;
            case "cannon":
                this.coolingtime=4000/20  
                this.lastingtime=20; 
                break;
            case "defence":
                this.coolingtime=5000/20  
                this.lastingtime=5000/20; 
                break;
            case "smoke":
                this.coolingtime=7000/20  
                this.lastingtime=7000/20; 
            break;
        } 
    }
    Ability.prototype.render=function(){
        if(this.state){
            switch (this.ability) {
                case "defence":
                    game.ctx.beginPath();
                    game.ctx.arc(game['Fighter'+this.number].x+20, game['Fighter'+this.number].y+25, 30, 0,2 * Math.PI);
                    game.ctx.lineWidth = 4;
                    game.ctx.strokeStyle = "#FDFF03";
                    game.ctx.stroke();
                    game.ctx.lineWidth = 1;
                    break;
            
                case "smoke":
                    var radius = 150;
                    game.ctx.beginPath();
                    game.ctx.arc(this.smokeWhere[0],this.smokeWhere[1], radius, 0, 2*Math.PI);
                    game.ctx.fillStyle = "#fff";
                    game.ctx.fill();
                    break;
            }
        }
        this.Bomblist.forEach(element => {
            element.render()
            element.update()
        }); 
    }
    Ability.prototype.update=function(){
        if(this.coolingtime&&!this.state){this.coolingtime-- }
        if(this.state){this.lastingtime--}
        if(this.lastingtime==0){
            this.state=false
            if(this.ability=='doubleJump'){
                this.coolingtime=1000/20
                this.lastingtime=20
            }
            if(this.ability=='cannon'){
                this.coolingtime=4000/20
                this.lastingtime=20
            }
            if(this.ability=='defence'){
                game['Fighter'+this.number].defence=false;
                this.coolingtime=10000/20
                this.lastingtime=5000/20
            }
            if(this.ability=='smoke'){
                this.coolingtime=7000/20
                this.lastingtime=7000/20
            }
        }
    }
    Ability.prototype.action=function(number,ability){
        if(!this.coolingtime&&!this.state){
            switch (ability) {
                case "doubleJump":
                    if((game['Fighter'+number].state==3||game['Fighter'+number].state==1)){
                        this.state=true
                        this.coolingtime=1000/20
                        game['Fighter'+number].state=3;
                        game['Fighter'+number].upingSpeed=game['Fighter'+number].upingSpeedsecure
                        game['Fighter'+number].fallingSpeed=0
                        
                }
                    break;
                case "cannon":
                    let distnace=40
                        if(game['Fighter'+number].face=="left"){distnace=-30}
                        let a= new Bomb({
                            "speed":8,
                            "toward":game['Fighter'+number].face,
                            attackBack:250,
                            x:game['Fighter'+number].x+distnace,
                            y:game['Fighter'+number].y+10,
                        })
                    this.Bomblist.push(a)
                    this.coolingtime=4000/20        
                    break;
                case "defence":
                    this.state=true
                    game['Fighter'+number].defence=true
                    break;
                case "smoke":
                    this.state=true
                    let somkeAudio=new Audio()
                    somkeAudio.src='../audio/smoke.wav'
                    this.smokeWhere=[game['Fighter'+number].x+20, game['Fighter'+number].y+25]
                    break;
            }
        }
    }
})();
(function(){
    var Bomb=window.Bomb=function(params){
        this.speed=params.speed;
        this.toward=params.toward;
        this.attackBack=params.attackBack;
        this.x=params.x;
        this.y=params.y;
        this.shooted=false;
        this.shootedAudio=new Audio()
        this.shootedAudio.src='../audio/bomb.wav'
    }
    Bomb.prototype.render=function(){
        if(!this.shooted){
            game.ctx.beginPath();
            game.ctx.arc(this.x,this.y, 15, 0, 2 * Math.PI);
            game.ctx.fillStyle = 'black';
            game.ctx.fill();
        }
    }
    Bomb.prototype.update=function(){
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