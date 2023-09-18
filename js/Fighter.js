(function(){
    var Fighter=window.Fighter=function(params){
        this.img=new Image();
        this.img.src=`../images/fighterKind${params.FighterKind}.png`
        this.lives=3
        this.color=params.color;
        this.speed=params.speed;
        this.number=params.number;
        this.shootbtn=params.shootbtn;
        this.weapon=params.weapon
        this.ability=params.ability
        this.x=params.number*450;
        this.y=0;
        this.positonLine=[]
        this.face=this.number==1?"right":"left"
        this.state=1;//人物状态：1下落，2平地，3上升
        this.fallingSpeed=0;
        this.upingSpeed=params.upingSpeed;
        this.upingSpeedsecure=params.upingSpeed;
        this.Xmutiply=0;
        this.defence=false;
        var self=this;
        let cooling=null;//枪械冷却
        this.jumpAudio=new Audio()
        this.jumpAudio.src='../audio/jump.mp3'
        document.addEventListener("keydown", function(event) {
                    if(event.key==self.shootbtn){
                        clearTimeout(cooling)
                        cooling=setTimeout(() => {
                            let distnace=40
                            if(self.face=="left"){distnace=-30}
                            let a= new Bullet({
                                "speed":self.weapon.speed,
                                "toward":self.face,
                                attackBack:self.weapon.attackBack,
                                x:self.x+distnace,
                                y:self.y+20,

                            })
                            game.BulletArr.push(a)   
                            }, self.weapon.gunCooling);//枪械开枪间隔
                        
                    }

                
        });
    }
    Fighter.prototype.render=function(){
        let Ymutiply=this.face=="left"?1:2;
        if(this.number==1&&(this.keys["a"]||this.keys["d"])){
            this.Xmutiply++
            if(this.Xmutiply==4){this.Xmutiply=0}
        }
        if(this.number==2&&(this.keys["ArrowLeft"]||this.keys["ArrowRight"])){
            this.Xmutiply++
            if(this.Xmutiply==4){this.Xmutiply=0}
        }
        game.ctx.drawImage(this.img,54*this.Xmutiply,55*Ymutiply,50,50, this.x, this.y, 40, 50);
        for (let index = 0; index < this.lives; index++) {
            game.ctx.fillText("❤",index*50+(this.number==1?50:1200),50)
        }   
        
    }
    Fighter.prototype.update=function(){
        var self=this
        this.keys=game.keys
        if(this.state==1){
            this.y+=this.fallingSpeed;
            this.fallingSpeed+=0.5
        }
        if(this.state==2&&(this.x+20<this.positonLine[0]||this.x+20>this.positonLine[1])){
            this.state=1
        } 
        if(this.state==3){
            this.y-=this.upingSpeed;
            this.upingSpeed-=0.5;
            if(this.upingSpeed==0){
                this.state=1
            }
        } 
        if(this.number==1){   
            if (this.keys["a"]) {
                this.x -= this.speed;
                this.face="left"
            }
            if (this.keys["d"]) {
                this.x += this.speed;
                this.face="right"
            }
            if(this.keys['w']&&self.state==2){
                self.state=3;
                self.jumpAudio.play()
                self.upingSpeed=self.upingSpeedsecure
            }
            if(this.keys['s']&&self.state==2){
                self.state=1;
                self.y+=30
            }
            if(this.keys["k"]){
                game["ability"+self.number].action(self.number,self.ability);
            }
        } 
        else if(this.number==2){   
            if (this.keys["ArrowLeft"]) {
                this.x -= this.speed;
                this.face="left"
            }
            if (this.keys["ArrowRight"]) {
                this.x += this.speed;
                this.face="right"
            }
            if(this.keys["ArrowDown"]&&self.state==2){
                self.state=1;
                self.y+=30
            }
            
            if(this.keys["ArrowUp"]&&self.state==2){
                self.state=3;
                self.jumpAudio.play()
                self.upingSpeed=self.upingSpeedsecure
            }

            if(this.keys["2"]){
                game["ability"+self.number].action(self.number,self.ability);
            }
            
        }
        if(this.y>850){
            this.state=1
            this.lives--
            if(this.lives==0){game.next()}
            else{
                this.x=this.number*450;
                this.y=-800
                this.fallingSpeed=0
            }
        }   
    }    
    Fighter.prototype.shooted=function(toward,attackBack){
        if(this.defence)attackBack*=0.5
            switch (toward) {
                case "left":
                    this.x-=attackBack;
                    break;
            
                case "right":
                    this.x+=attackBack;
                    break;
            }
    }
})();