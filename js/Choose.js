(function(){
    var Choose = window.Choose = function(number){
        //搞个画布出来
        this.number=number
        this.canvas = document.querySelector("#mycanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width=1400;
        this.canvas.height=800;
        var self=this;
        this.res={
            man:1,
            weapon:1,
            skill:1,
        }
        document.addEventListener("keydown", function(event) {
            if(event.key=='j'){game.state[self.number-1]=true}
         });
        //加载资源
        this.loadAllResource(function(){
            //新建
            var back=new Image();
            var fighter1 = new Image();
            var fighter2 = new Image();
            var fighter3 = new Image();
            //路径
            back.src="../images/20200711144841_rgxnl.gif";
            fighter1.src="../images/fighterKind1.png"; 
            fighter2.src="../images/fighterKind2.png"; 
            fighter3.src="../images/fighterKind3.png"; 
            // 确保所有图像都已加载完成后再绘制它们
            Promise.all([loadImage(back),loadImage(fighter1),loadImage(fighter2),loadImage(fighter3)]).then(images => {
            // 绘制
            var lpos=100;
            var tpos=230;
            var fighterHeight=100;
            var fighterWidth=100;
            self.ctx.drawImage(images[0], 0,0,1400,800);
            self.ctx.drawImage(images[1], 0,0,50,50,lpos,    tpos,fighterWidth,fighterHeight);
            self.ctx.drawImage(images[2], 0,0,50,50,lpos+350,tpos,fighterWidth,fighterHeight);
            self.ctx.drawImage(images[3], 0,0,50,50,lpos+700,tpos,fighterWidth,fighterHeight);
            self.ctx.textAlign="center";
            self.ctx.font='60px 华文琥珀';
            self.ctx.fillStyle="blue"
            self.ctx.fillText(`Player${self.number}请选择人物、属性与技能`,self.canvas.width/2,self.canvas.height/7)
            self.ctx.font='30px 华文琥珀';
            self.ctx.fillText(`按j确定`,self.canvas.width*0.85,self.canvas.height*0.9)
            self.ctx.font='30px 华文琥珀';
            self.ctx.fillStyle="rgb(62, 232, 50)"            
            self.ctx.fillText("人物选择",self.canvas.width*0.08,self.canvas.height*0.25)
            self.ctx.fillText("飞毛腿",self.canvas.width*0.11,self.canvas.height*0.45)
            self.ctx.fillText("我是谁",self.canvas.width*0.36,self.canvas.height*0.45)
            self.ctx.fillText("二踢脚",self.canvas.width*0.61,self.canvas.height*0.45)
            self.ctx.fillText("跑得快，跳不高",self.canvas.width*0.11,self.canvas.height*0.5)
            self.ctx.fillText("速度与高度均衡",self.canvas.width*0.36,self.canvas.height*0.5)
            self.ctx.fillText("跳得高，跑不快",self.canvas.width*0.61,self.canvas.height*0.5)
            self.ctx.fillText("武器属性",self.canvas.width*0.08,self.canvas.height*0.62)
            self.ctx.fillText("射击速度:20",self.canvas.width*0.11,self.canvas.height*0.8)
            self.ctx.fillText("射击速度:50",self.canvas.width*0.36,self.canvas.height*0.8)
            self.ctx.fillText("射击速度:80",self.canvas.width*0.61,self.canvas.height*0.8)
            self.ctx.fillText("击退距离:80",self.canvas.width*0.11,self.canvas.height*0.85)
            self.ctx.fillText("击退距离:50",self.canvas.width*0.36,self.canvas.height*0.85)
            self.ctx.fillText("击退距离:20",self.canvas.width*0.61,self.canvas.height*0.85)
            self.ctx.textAlign="left"
            self.ctx.fillText("武器一",110,560)
            self.ctx.fillText("武器二",460,560)
            self.ctx.fillText("武器三",810,560)
            self.ctx.font='40px 华文琥珀';
            self.ctx.fillText("技能选择",1100,200)
            self.ctx.font='30px 华文琥珀';            
            self.ctx.fillText("大   炮",1150,300)
            self.ctx.fillText("盾   牌",1150,400)
            self.ctx.fillText("二段跳",1150,500)
            self.ctx.fillText("烟雾弹",1150,600)
        });
            // 加载 Image 对象的函数
            function loadImage(image) {
                return new Promise((resolve, reject) => {
                    image.onload = () => resolve(image);
                    image.onerror = (err) => reject(err);
                });
            }
        })

        this.choosePerson(self)
        this.chooseWeapon(self)
        this.chooseAbility(self)
        //this.chooseSecond(self);
        //Choose.NextPage();
    }
    Choose.prototype.loadAllResource=function(callback){
        this.source={};
        callback();
    }
    Choose.prototype.choosePerson=function(self){
        var that=this
        document.addEventListener("mouseup",choose);
        function choose(event){
            let mouseX = event.clientX - self.canvas.getBoundingClientRect().left;
            let mouseY = event.clientY - self.canvas.getBoundingClientRect().top;
            self.ctx.strokeStyle="red"
            self.ctx.lineWidth=5
            var lpos=100;
            var tpos=230;
            var fighterHeight=100;
            var fighterWidth=100;
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    // 用户选择了角色
                    that.res.man=1
                    self.ctx.strokeRect(lpos-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+350 && mouseX < lpos+350 +fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    that.res.man=2
                    self.ctx.strokeRect(lpos+350-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+700 && mouseX < lpos+700 + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    that.res.man=3
                    self.ctx.strokeRect(lpos+700-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }   
        }
    }
    Choose.prototype.chooseWeapon=function(self){
        var that=this
        document.addEventListener("mouseup",choose);
        function choose(event){
            let mouseX = event.clientX - self.canvas.getBoundingClientRect().left;
            let mouseY = event.clientY - self.canvas.getBoundingClientRect().top;
            self.ctx.strokeStyle="red"
            self.ctx.lineWidth=5
            var lpos=105;
            var tpos=530;
            var fighterHeight=50;
            var fighterWidth=100;
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    // 用户选择了角色
                    that.res.weapon=1
                    self.ctx.strokeRect(lpos-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+350 && mouseX < lpos+350 +fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    that.res.weapon=2
                    self.ctx.strokeRect(lpos+350-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+700 && mouseX < lpos+700 + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight){
                    that.res.weapon=3
                    self.ctx.strokeRect(lpos+700-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }   
        }
    }
    Choose.prototype.chooseAbility=function(self){
        var that=this
        document.addEventListener("mouseup",choose);
        function choose(event){
            let mouseX = event.clientX - self.canvas.getBoundingClientRect().left;
            let mouseY = event.clientY - self.canvas.getBoundingClientRect().top;
            self.ctx.strokeStyle="red"
            self.ctx.lineWidth=5
            var lpos=1140;
            var tpos=270;
            var fighterHeight=50;
            var fighterWidth=100;
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    // 用户选择了角色
                    that.res.skill=1
                    self.ctx.strokeRect(lpos-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos && mouseX < lpos+fighterWidth &&
                mouseY > tpos+100 && mouseY < tpos+100 + fighterHeight) {
                    that.res.skill=2
                    self.ctx.strokeRect(lpos-3,tpos+100-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos+200 && mouseY < tpos+200 + fighterHeight){
                    that.res.skill=3
                    self.ctx.strokeRect(lpos-3,tpos+200-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos+300 && mouseY < tpos+300 + fighterHeight){
                    that.res.skill=4
                    self.ctx.strokeRect(lpos-3,tpos+300-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }
        }
    }

})();

