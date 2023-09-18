(function(){
    var Scene=window.Scene=function(){
        this.canvas = document.querySelector("#mycanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width=1400;
        this.canvas.height=800;
        var self=this;
        this.over=false
        this.background=1
        this.loadAllResource(function(){
            //var scene0=new Image();
            var scene1=new Image();
            var scene2=new Image();
            var scene3=new Image();
            var scene4=new Image();
            var scene5=new Image();
            var scene6=new Image();

            scene1.src="../images/background1.jpg";//具体的图等等lx
            scene2.src="../images/background2.jpg";
            scene3.src="../images/background3.jpg";
            scene4.src="../images/background4.jpg";
            scene5.src="../images/background5.jpg";
            scene6.src="../images/white.jpg";

            Promise.all([loadImage(scene1),loadImage(scene2),loadImage(scene3),
                loadImage(scene4),loadImage(scene5),loadImage(scene6)])
                .then(images => {
                    var lpos=50;
                    var tpos=150;
                    var fighterWidth=400;
                    var fighterHeight=200;
                    self.ctx.drawImage(images[0],lpos,    tpos    ,fighterWidth,fighterHeight);
                    self.ctx.drawImage(images[1],lpos+450,tpos    ,fighterWidth,fighterHeight);
                    self.ctx.drawImage(images[2],lpos+900,tpos    ,fighterWidth,fighterHeight);
                    self.ctx.drawImage(images[3],lpos,    tpos+250,fighterWidth,fighterHeight);
                    self.ctx.drawImage(images[4],lpos+450,tpos+250,fighterWidth,fighterHeight);
                    self.ctx.drawImage(images[5],lpos+900,tpos+250,fighterWidth,fighterHeight);
                    self.ctx.textAlign="center";
                    self.ctx.font="100px 华文琥珀"
                    self.ctx.fillText("场景选择",self.canvas.width/2,self.canvas.height/8)
                    self.ctx.font="50px 华文琥珀"
                    self.ctx.fillText("点击场景进入",self.canvas.width*0.83,self.canvas.height*0.9)
                    
            });
            function loadImage(image) {
                return new Promise((resolve, reject) => {
                    image.onload = () => resolve(image);
                    image.onerror = (err) => reject(err);
                });
            }
        })
        this.choose(self)
    }
    Scene.prototype.loadAllResource=function(callback){
        this.source={};
        callback();
    }
    Scene.prototype.choose=function(self){
        var that=this
        document.addEventListener("mouseup",choose);
        function choose(event){
            let mouseX = event.clientX - self.canvas.getBoundingClientRect().left;
            let mouseY = event.clientY - self.canvas.getBoundingClientRect().top;
            self.ctx.strokeStyle="red"
            self.ctx.lineWidth=5
            var lpos=50;
            var tpos=150;
            var fighterWidth=400;
            var fighterHeight=200
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    // 用户选择了场景
                    that.background=1
                    game.state[2]=true
                    self.ctx.strokeRect(lpos-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+450 && mouseX < lpos+450 +fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    that.background=2
                    game.state[2]=true
                    self.ctx.strokeRect(lpos+450-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+900 && mouseX < lpos+900 + fighterWidth &&
                mouseY > tpos && mouseY < tpos + fighterHeight) {
                    that.background=3
                    game.state[2]=true
                    self.ctx.strokeRect(lpos+900-3,tpos-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }
            if (mouseX > lpos && mouseX < lpos + fighterWidth &&
                mouseY > tpos+250 && mouseY < tpos +250+ fighterHeight) {
                    that.background=4
                    game.state[2]=true
                    self.ctx.strokeRect(lpos-3,tpos+250-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+450 && mouseX < lpos+450 +fighterWidth &&
                mouseY > tpos+250 && mouseY < tpos+250 + fighterHeight) {
                    that.background=5
                    game.state[2]=true
                    self.ctx.strokeRect(lpos+450-3,tpos+250-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);
            }
            if (mouseX > lpos+900 && mouseX < lpos+900 + fighterWidth &&
                mouseY > tpos+250 && mouseY < tpos+250 + fighterHeight) {
                    that.background=6
                    game.state[2]=true
                    self.ctx.strokeRect(lpos+900-3,tpos+250-3,fighterWidth+6,fighterHeight+6);
                    document.removeEventListener("mouseup",choose);                                   
            }
        }
    }
})();