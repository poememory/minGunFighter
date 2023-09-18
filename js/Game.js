(function(){
    var Game = window.Game = function(){
        this.startAiudio=new Audio()
        this.startAiudio.src="../audio/gamestart.mp3"
        this.canvas = document.querySelector("#mycanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width=1400;
        this.canvas.height=800;
        var self=this;
        this.choose1=new Choose(1)
        this.state=[false,false,false]
        var timer1=null;
        var timer2=null;
        var timer3=null;
        this.information={
            man1:{"speed":6,
            upingSpeed:11,},
            man2:{"speed":5,
            upingSpeed:12,},
            man3:{"speed":4,
            upingSpeed:13,},
            weapon1:{
                gunCooling:170,
                attackBack:150,
                speed:13
            },
            weapon2:{
                gunCooling:100,
                attackBack:100,
                speed:20
            },
            weapon3:{
                gunCooling:80,
                attackBack:80,
                speed:25
            },
            skill1:'cannon',
            skill2:'defence',
            skill3:'doubleJump',
            skill4:'smoke',
        }
        timer1= setInterval(() => {
            if(self.state[0]){
                self.choose2=new Choose(2)
                clearInterval(timer1)
            }      
        }, 200);
        timer2= setInterval(() => {
            if(self.state[1]){
                self.ctx.clearRect(0, 0, 1400,800);
                self.sence=new Scene()
                clearInterval(timer2)
            }      
        }, 200);
        timer3= setInterval(() => {
            if(self.state[2]){
                self.ctx.clearRect(0, 0, 1400,800);
                self.start({
                    man1:Object.assign({
                        "number":1,
                        FighterKind:self.choose1.res.man,
                        "shootbtn":'j',
                        ability:self.information['skill'+self.choose1.res.skill],
                        "weapon":self.information['weapon'+self.choose1.res.weapon]
                    },self.information['man'+self.choose1.res.man]),
                    man2:Object.assign({
                        "number":2,
                        FighterKind:self.choose2.res.man,
                        "shootbtn":'1',
                        ability:self.information['skill'+self.choose2.res.skill],
                        "weapon":self.information['weapon'+self.choose2.res.weapon]
                    },self.information['man'+self.choose2.res.man])
                })
                clearInterval(timer3)
            }      
        }, 200);
        

    }
    Game.prototype.next=function(){
        var gga=new Audio()
        gga.src="../audio/gameOver.mp3"
        gga.play()
        this.timer=null
        this.ctx.font="40px"
        this.ctx.fillStyle="red"
        this.ctx.fillText("Game over",1400*0.45,800*45)
        setTimeout(() => {
            window.location.replace("cover.html")
        }, 4000);
    }
    Game.prototype.start=function(params){
        this.startAiudio.play()
        var self=this;
        this.keys = {};
        this.background=new Background(self.sence.background);
        this.BulletArr=[]
        this.ability1=new Ability(1,self.information['skill'+self.choose1.res.skill])
        this.ability2=new Ability(2,self.information['skill'+self.choose2.res.skill])
        this.Fighter1=new Fighter(params.man1);
        this.Fighter2=new Fighter(params.man2);
        document.addEventListener("keydown", function(event) {
            self.keys[event.key] = true;
         });
        document.addEventListener("keyup", function(event) {
             self.keys[event.key] = false;
        });
        this.timer=setInterval(function(){
            self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
            self.background.update();
            self.background.render();
            self.Fighter1.update();
            self.Fighter2.update(); 
            self.Fighter1.render();
            self.Fighter2.render();
            self.ability1.update();
            self.ability2.update();
            self.ability1.render();
            self.ability2.render();
            self.BulletArr.forEach(bullet=> {
                bullet.render();
                bullet.update();
            });
        },1000/60);
        // function animate() {
        //     self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
        //     self.background.update();
        //     self.background.render();
        //     self.Fighter1.update();
        //     self.Fighter2.update(); 
        //     self.Fighter1.render();
        //     self.Fighter2.render();
        //     self.ability1.update();
        //     self.ability2.update();
        //     self.ability1.render();
        //     self.ability2.render();
        //     self.BulletArr.forEach(bullet=> {
        //         bullet.render();
        //         bullet.update();
        //     });
        //     requestAnimationFrame(animate);
        //   }
          
        //   animate(); // 启动动画
    }
})();
