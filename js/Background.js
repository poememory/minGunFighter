(function(){
  var Background=window.Background=function(number){
    this.number=number
    var imagePath1 = "../images/background1.jpg";
var land1 = [
      // // ��һ��
      // [0, 100, 100],
      // [100, 200, 100],
      // [270, 370, 100],
      // [370, 470, 100],
      // [470, 570, 100],
      // [670, 770, 100],
      // [770, 870, 100],
      // [870, 970, 100],
      // [970, 1070, 100],
      // [1140, 1240, 100],
      // [1240, 1340, 100],
  
      // �ڶ���
      [0, 100, 210],
      [100, 200, 210],
      [200, 300, 210],
      [350, 450, 250],
      [450, 550, 250],
      [570, 670, 210],
      [740, 840, 210],
      [840, 940, 210],
      [1040, 1140, 210],
      [1140, 1240, 180],
      [1340, 1440, 180],
      [1240, 1340, 210],
  
      // ������
      [100, 200, 320],
      [400, 500, 320],
      [500, 600, 320],
      [640, 740, 320],
      [800, 900, 320],
      [940, 1040, 320],
      [1040, 1140, 320],
      [1140, 1240, 320],
      [1240, 1340, 280],
  
      // ������
      
      [100, 200, 370],
      [400, 500, 430],
      [550, 650, 430],
      [650, 750, 430],
      [800, 900, 430],
      [900, 1000, 430],
      [1000, 1100, 460],
      [1140, 1240, 430],
      [1240, 1340, 430],
  
      // ������
      [100, 200, 540],
      [200, 300, 480],
      [350, 450, 540],
      [450, 550, 540],
      [600, 700, 480],
      [700, 800, 480],
      [850, 950, 540],
      [950, 1050, 540],
      [1050, 1150, 540],
      [1200, 1300, 540],
      
  
      // ������
      [100, 200, 650],
      [300, 400, 650],
      [400, 500, 650],
      [500, 600, 650],
      [700, 800, 650],
      [900, 1000, 650],
      [1100, 1200, 650],
    ];
  
    var imagePath2 = "../images/background2.jpg";
    var land2 = [[200,1200,700],[300,600,610],[800,1100,610]]
  
var imagePath3 = "../images/background3.jpg";
var land3 = [
    //  // ��һ��
    //   [0, 100, 100],
    //   [100, 200, 100],
    //   [200, 300, 100],
    //   [300, 400, 100],
    //   [400, 500, 100],
    //   [500, 600, 100],
    //   [700, 800, 100],
    //   [800, 900, 100],
    //   [900, 1000, 100],
    //   [1000, 1100, 100],
    //   [1200, 1300, 100],
    //   [1300, 1400, 100],
  
      

  
    //   // ������
    //   [300, 400, 430],
    //   [400, 500, 430],
    //   [500, 600, 430],
    //   [600, 700, 430],
    //   [700, 800, 430],
    //   [800, 900, 430],
    //   [900, 1000, 430],
    //   [1000, 1100, 430],
    //   [1100, 1200, 430],
  
      // ������
    //   [100, 200, 540],
    //   [200, 300, 540],
    //   [300, 400, 540],
    //   [400, 500, 540],
    //   [500, 600, 540],
    //   [700, 800, 540],
    //   [800, 900, 540],
    //   [900, 1000, 540],
    //   [1000, 1100, 540],
    //   [1200, 1300, 540],
  
      // ������
      [300, 400, 650],
      [400, 500, 650],
      [500, 600, 650],
      [600, 700, 650],
      [700, 800, 650],
      [800, 900, 650],
      [900, 1000, 650],
      [1000, 1100, 650],
      [1100, 1200, 650],
    ];
  
    var imagePath4 = "../images/background4.jpg";
    var land4 = [
      // ������
      [100, 200, 430],
      [200, 300, 430],
      [300, 400, 430],
      [400, 500, 430],
      [550, 650, 430],
      [650, 750, 430],
      [750, 850, 430],
      [850, 950, 430],
      [1000, 1100, 430],
      [1100, 1200, 430],
    ];
    
    var imagePath5 = "../images/background5.jpg";
    var land5 = [
    //  // ��һ��
    //   [0, 100, 100],
    //   [100, 200, 100],
    //   [300, 400, 150],
    //   [400, 500, 150],
    //   [700, 800, 100],
    //   [800, 900, 100],
    //   [900, 1000, 150],
    //   [1000, 1100, 150],
    //   [1100, 1200, 100],
    //   [1200, 1300, 100],
    //   [1300, 1400, 150],
  
  
      // �ڶ���
      [0, 100, 210],
      [100, 200, 210],
      [300, 400, 260],
      [400, 500, 260],
      [600, 700, 210],
      [700, 800, 210],
      [800, 900, 260],
      [900, 1000, 260],
      [1000, 1100, 210],
      [1100, 1200, 210],
      [1200, 1300, 260],
    
  
      // ������
      [100, 200, 320],
      [300, 400, 370],
      [400, 500, 370],
      [700, 800, 320],
      [800, 900, 320],
      [900, 1000, 370],
      [1000, 1100, 370],
      [1100, 1200, 320],
      [1200, 1300, 320],
  
      // ������
      [100, 200, 430],
      [300, 400, 480],
      [400, 500, 480],
      [700, 800, 430],
      [800, 900, 430],
      [900, 1000, 480],
      [1000, 1100, 480],
      [1100, 1200, 430],
      [1200, 1300, 430],
  
      // ������
      [100, 200, 540],
      [300, 400, 590],
      [400, 500, 590],
      [700, 800, 540],
      [800, 900, 540],
      [900, 1000,590],
      [1000, 1100, 590],
      [1100, 1200, 540],
      [1200, 1300, 540],
      // ������
      [100, 200, 650],
      [300, 400, 720],
      [400, 500, 720],
      [700, 800, 650],
      [800, 900, 650],
      [900, 1000, 720],
      [1000, 1100, 720],
      [1100, 1200, 650],
      [1200, 1300, 650],
    ];
  
    var imagePath6 = "../images/white.jpg";
    var land6 = [
    //  // ��һ��
    //   [200, 300, 90],
    //   [300, 400, 100],
    //   [400, 500, 110],
    //   [500, 600, 120],
    //   [600, 700, 130],
    //   [750, 850, 130],
    //   [850, 950, 120],
    //   [950, 1050, 110],
    //   [1050, 1150, 100],
    //   [1150, 1250, 90],
    //   [1300,1400, 130],
  
  
      // �ڶ���
      [100, 200, 210],
      [200, 300, 210],
      [350, 450, 260],
      [450, 550, 260],
      [600, 700, 210],
      [700, 800, 210],
      [800, 900, 240],
      [900, 1000, 210],
      [1000, 1100, 250],
      [1100, 1200, 250],
      [1200, 1300, 250],
    
  
      // ������
      [0, 100, 340],
      [100, 200, 340],
      [200, 300, 360],
      [300, 400, 360],
      [400, 500, 340],
      [600, 700, 320],
      [700, 800, 320],
      [950, 1050, 370],
      [1050, 1150, 370],
      [1200, 1300, 320],
      [1300, 1400, 320],
  
      // ������
      [100, 200, 430],
      [200, 300, 430],
      [300, 400, 440],
      [400, 500, 440],
      [600, 700, 460],
      [700, 800, 460],
      [800, 900, 480],
      [1000, 1100, 470],
      [1100, 1200, 470],
      [1200, 1300, 430],
  
      // ������
      [0, 100, 570],
      [100,200, 570],
      [200, 300, 600],
      [300, 400, 600],
      [400, 500, 550],
      [600, 700, 560],
      [800, 900, 540],
      [800, 950, 540],
      [1000, 1100, 550],
  
      // ������
      [100, 200, 720],
      [200, 300, 720],
      [400, 500, 660],
      [500, 600, 660],
      [800, 900, 650],
      [900, 1000, 650],
      [1000, 1100, 720],
      [1100, 1200, 720],
      [1300, 1400, 660],
    ]
    
    this.backgroundImg=new Image()
    switch (this.number) {
        case 1:
            this.backgroundImg.src=imagePath1
            this.landArray=land1
            break;
        case 2:
                this.backgroundImg.src=imagePath2
                this.landArray=land2
            break;
        case 3:
                this.backgroundImg.src=imagePath3
                this.landArray=land3
            break;
         case 4:
                this.backgroundImg.src=imagePath4
                this.landArray=land4
            break;
        case 5:
                this.backgroundImg.src=imagePath5
                this.landArray=land5
            break;
        case 6:
                this.backgroundImg.src=imagePath6
                this.landArray=land6
            break;
        
    
    }
  }

  // 获取Canvas元素
//   var canvas = document.getElementById('mycanvas');
//   var ctx = canvas.getContext('2d');
//   // 创建一个Image对象来加载图片
  var image = new Image();
  // // 设置图片源
 image.src = '../images/block.jpg';


  // 图片加载完成后执行回调函数
  Background.prototype.render=function(){
    game.ctx.drawImage(this.backgroundImg,0,0)
    // game.ctx.filltext('111111',10,10)
    this.landArray.forEach(element => {
        game.ctx.drawImage(image,0,0,986,122,element[0],element[2],element[1]-element[0],10)
    });

};

//  // 获取Canvas元素
//  var canvas2 = document.getElementById('myCanvas');
//  var ctx2 = canvas.getContext('2d');

//  // 设置Canvas的宽度和高度为窗口的宽度
//  canvas2.width = window.innerWidth;
//  canvas2.height = 200;
//  // 定义火焰的参数
//  var flameWidth = 50;
//  var flameHeight = 100;
//  var flameColors = ['#FF4400', '#FF8822', '#FFBB00'];
//  var flameSpeed = 2;

//  // 创建火焰对象
//  var Flame = function(x, y) {
//    this.x = x;
//    this.y = y;
//    this.color = flameColors[Math.floor(Math.random() * flameColors.length)];
//    this.offset = Math.random() * 100;
//  };

//  // 绘制火焰
//  Flame.prototype.draw = function() {
//    ctx2.fillStyle = this.color;
//    ctx2.fillRect(this.x, this.y, flameWidth, flameHeight);
//  };

//  // 更新火焰的位置
//  Flame.prototype.update = function() {
//    this.y = Math.sin((Date.now() + this.offset) / 300) * 20 + canvas.height - flameHeight;
//  };

//  // 创建火焰数组
//  var flames = [];
//  var numFlames = Math.floor(canvas.width / flameWidth);

//  // 初始化火焰
//  for (var i = 0; i < numFlames; i++) {
//    var x = i * flameWidth;
//    var y = canvas.height - flameHeight;
//    var flame = new Flame(x, y);
//    flames.push(flame);
//  }

//  // 动画更新函数
//  function update() {
//    // 清除火焰区域
//    ctx.clearRect(0, canvas.height - flameHeight, canvas.width, flameHeight);

//    // 更新并绘制火焰
//    for (var i = 0; i < flames.length; i++) {
//      var flame = flames[i];
//      flame.update();
//      flame.draw();
//    }

//    // 循环调用更新函数
//    requestAnimationFrame(update);
//  }

//  // 开始动画
//  update();

  Background.prototype.update=function(){
            this.landArray.forEach(line=> {//遍历每条背景线
                if(game.Fighter1.state==1&&line[2]-game.Fighter1.y<60&&line[2]>game.Fighter1.y+30&&game.Fighter1.x>line[0]&&game.Fighter1.x<line[1]){//人物落到线上
                    game.Fighter1.state=2//修改人物状态
                    game.Fighter1.fallingSpeed=0
                    game.Fighter1.y=line[2]-50//将人物与背景线对齐
                    setTimeout(() => {
                        game.Fighter1.positonLine=line//将人物所处目前的line传给人物
                    }, 300);
                }
                if(game.Fighter2.state==1&&line[2]-game.Fighter2.y<60&&line[2]>game.Fighter2.y+30&&game.Fighter2.x>line[0]&&game.Fighter2.x<line[1]){//人物落到线上
                    game.Fighter2.state=2//修改人物状态
                    game.Fighter2.fallingSpeed=0
                    game.Fighter2.y=line[2]-50//将人物与背景线对齐
                    setTimeout(() => {
                        game.Fighter2.positonLine=line//将人物所处目前的line传给人物
                    }, 300);
                }
            });
    }
})();