/*
Designed and coded by richardn(richard20020815).The whole program is under MIT license.It means you can use it freely without
deleting my name.
*/
var canvasInHTML = document.getElementById("canvas1");
if(canvasInHTML.getContext){
    var myCanvas =canvasInHTML.getContext("2d");
}
function drawPoint(drawPosX,drawPosY,color,round){
    myCanvas.fillStyle=color;
    myCanvas.fillRect(1+(drawPosX-1)*pixelWidth,1+round*(height*pixelWidth+50)+(drawPosY-1)*pixelWidth,pixelWidth,pixelWidth);
}
var requestNumber =function(question){
        var number=prompt(question)*1;//javascript will recognize the output of prompt as a string
	if(isNaN(number)){
        while(isNaN(number)){
        	alert("Input invaild!");//avoid jokers
        	number =prompt(question)*1;//so you need the *1 to convert the answer to an integer
        }
        return number;
	}else{
		return number;
	}
}
var times = requestNumber("How many rounds you would like the cells to live?");
var width = requestNumber("Width?"); //width
var height = requestNumber("Height?"); //height
var pixelWidth = requestNumber("PixelWidth?");
canvasInHTML.height=times*(height*pixelWidth+50);
canvasInHTML.width=width*pixelWidth;
var data = [];
var density=requestNumber("Density(0~1)?(of starting living cells)");
for (var i = 0;i<width*height;i++){
    if(Math.random()<=density){
        data.push(true);
    }else{                        //randomly set a starting point
        data.push(false);
    };
};
var dataNextTime = [];
console.log(data);
var count =0;
var pos = function (x,y){
        return((y-1)*width+x-1);
    };
var leftUp = false;
var up = false;
var rightUp = false;
var left = false;        
var right = false;
var leftDown = false;
var down = false;
var rightDown = false;
var liveOrNot = function (posX,posY) {
    count = 0;//counts how many blocks surrounding survived
    leftUp = false;
    up = false;
    rightUp = false;
    left = false;//reset the data of surrounding 8 blocks
    right = false;
    leftDown = false;
    down = false;
    rightDown = false;
    if(posX==1&&posY==1){//leftUp
        right = data[pos(posX+1,posY)];
        down = data[pos(posX,posY+1)];//get the data of surrounding 3 blocks
        rightDown = data[pos(posX+1,posY+1)];
        //now counts how many blocks surrounding survived
        if(right){
            count++;
        };
        if(down){
            count++;
        };
        if(rightDown){
            count++;
        };
        //judge can it survive?
        switch(count){
            case 2:
            return(data[pos(posX,posY)]);
            break;
            case 3:
            return(true);
            break;
            default:
            return(false);
            break;
        }
    }
    if(posX==width&&posY==height){//rightDown
        leftUp = data[pos(posX-1,posY-1)];
        up = data[pos(posX,posY-1)];//get the data of surrounding 3 blocks
        left = data[pos(posX-1,posY)];     
        //now counts how many blocks surrounding survived   
        if(leftUp){
            count++;
        };
        if(up){
            count++;
        };
        if(left){
            count++;
        };                 
        //judge can it survive?                        
        switch(count){
            case 2:
            return(data[pos(posX,posY)]);
            break;
            case 3:
            return(true);
            break;
            default:
            return(false);
            break;
        }
    }
    if(((posX!=1&&posX!=width)&&posY!=1)&&posY!=height){//middle
        leftUp = data[pos(posX-1,posY-1)];
        up = data[pos(posX,posY-1)];
        rightUp = data[pos(posX+1,posY-1)];
        left = data[pos(posX-1,posY)];//get the data of surrounding 8 blocks
        right = data[pos(posX+1,posY)];
        leftDown = data[pos(posX-1,posY+1)];
        down = data[pos(posX,posY+1)];
        rightDown = data[pos(posX+1,posY+1)];
        //now counts how many blocks surrounding survived
        if(leftUp){
            count++;
        };
        if(up){
            count++;
        };
        if(rightUp){
            count++;
        };
        if(left){
            count++;
        };                 
        if(right){
            count++;
        };
        if(leftDown){
            count++;
        };
        if(down){
            count++;
        };
        if(rightDown){
            count++;
        };
        //judge can it survive?
        switch(count){
            case 2:
            return(data[pos(posX,posY)]);
            break;
            case 3:
            return(true);
            break;
            default:
            return(false);
            break;
        }
    }
    if(posX==1&&posY==height){//leftDown
                    up = data[pos(posX,posY-1)];
                    rightUp = data[pos(posX+1,posY-1)];//get the data of surrounding 3 blocks
                    right = data[pos(posX+1,posY)];
                    if(up){
                        count++;
                    };
                    if(rightUp){
                        count++;
                    };
                    //now counts how many blocks surrounding survived
                    if(right){
                        count++;
                    };
                    //judge can it survive?
                    switch(count){
                        case 2:
                        return(data[pos(posX,posY)]);
                        break;
                        case 3:
                        return(true);
                        break;
                        default:
                        return(false);
                        break;
                    }
    }
    if(posX==width&&posY==1){//rightUp
        left = data[pos(posX-1,posY)];
        leftDown = data[pos(posX-1,posY+1)];//get the data of surrounding 3 blocks
        down = data[pos(posX,posY+1)];
        //now counts how many blocks surrounding survived
        if(left){
            count++;
        };                
        if(leftDown){
            count++;
        };
        if(down){
            count++;
        };
        //judge can it survive?
        switch(count){
            case 2:
            return(data[pos(posX,posY)]);
            break;
            case 3:
            return(true);
            break;
            default:
            return(false);
            break;
        }
    }
    if((posX==1&&posY!=height)&&posY!=1){//left
        up = data[pos(posX,posY-1)];
                    rightUp = data[pos(posX+1,posY-1)];
                    right = data[pos(posX+1,posY)];//get the data of surrounding 5 blocks
                    down = data[pos(posX,posY+1)];
                    rightDown = data[pos(posX+1,posY+1)];
                    if(up){
                        count++;
                    };
                    if(rightUp){
                        count++;
                    };
                    //now counts how many blocks surrounding survived
                    if(right){
                        count++;
                    };
                    if(down){
                        count++;
                    };
                    if(rightDown){
                        count++;
                    };
                    //judge can it survive?   
                    switch(count){
                        case 2:
                        return(data[pos(posX,posY)]);
                        break;
                        case 3:
                        return(true);
                        break;
                        default:
                        return(false);
                        break;
                    }    
    }
    if((posX==width&&posY!=height)&&posY!=1){//right
        leftUp = data[pos(posX-1,posY-1)];
        up = data[pos(posX,posY-1)];
        left = data[pos(posX-1,posY)];//get the data of surrounding 5 blocks
        leftDown = data[pos(posX-1,posY+1)];
        down = data[pos(posX,posY+1)];
        //now counts how many blocks surrounding survived
        if(leftUp){
            count++;
        };
        if(up){
            count++;
        };
        if(left){
            count++;
        };                 
        if(leftDown){
            count++;
        };
        if(down){
            count++;
        };
        //judge can it survive?             
        switch(count){
            case 2:
            return(data[pos(posX,posY)]);
            break;
            case 3:
            return(true);
            break;
            default:
            return(false);
            break;
        }
    }
    if((posX!=1&&posX!=width)&&posY==height){//down
       leftUp = data[pos(posX-1,posY-1)];
       up = data[pos(posX,posY-1)];
       rightUp = data[pos(posX+1,posY-1)];   //get the data of surrounding 5 blocks
       left = data[pos(posX-1,posY)];
       right = data[pos(posX+1,posY)];
       //now counts how many blocks surrounding survived
       if(leftUp){
          count++;
       };
       if(up){
          count++;
       };
       if(rightUp){
          count++;
       };
       if(left){      
          count++;
       };
       if(right){
          count++;
       };
       //judge can it survive?
       switch(count){
          case 2:
          return(data[pos(posX,posY)]);
          break;
          case 3:
          return(true);
          break;
          default:
          return(false);
          break;
        }  
    }
    if((posY==1&&posX!=width)&&posX!=1){//up
        left = data[pos(posX-1,posY)];
                right = data[pos(posX+1,posY)];
                leftDown = data[pos(posX-1,posY+1)];//get the data of surrounding 5 blocks
                down = data[pos(posX,posY+1)];
                rightDown = data[pos(posX+1,posY+1)];
                if(left){
                    count++;
                };
                if(right){
                    count++;
                };
                if(leftDown){         //now counts how many blocks surrounding survived
                    count++;
                };
                if(down){
                    count++;
                };
                if(rightDown){
                    count++;
                };
                //judge can it survive?
                switch(count){
                        case 2:
                        return(data[pos(posX,posY)]);
                        break;
                        case 3:
                        return(true);
                        break;
                        default:
                        return(false);
                        break;
                    }  
    }
}
for(var z=0;z<times;z++){
    for (var a=1;a<=width;a++){
        for(var b=1;b<=height;b++){
            dataNextTime[pos(a,b)] = liveOrNot(a,b);
            if(liveOrNot(a,b)){
                drawPoint(a,b,"000000",z);
            }
        }
    }
    for (var w=0;w<width*height;w++){
        //fxxk arrays
        //If two arrays are"equal"(A=B),javascript will give A[n],B[n] the same address in the computer's memory.
        //So,if A[n] changes,B[n] will magically follow it and get the same value
        //This is why I don't use data=dataNextTime
        //It took me days to find this problem
        if (dataNextTime[w]){
            data[w]=true;
        }else{                 
            data[w]=false;
        }
    }
    console.log(data);
    console.log("Round "+(z+1)+" finished!");
};
var livingCells =0;
for(var n=0;n<width*height;n++){
    if(data[n]){
        livingCells++;
    }
}
alert(livingCells+" cell(s) survived!");
alert("Open the console.(Be careful...)");
function output(){
    Canvas2Image.saveAsPNG(canvas1);
}
