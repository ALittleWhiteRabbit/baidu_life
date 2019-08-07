var lineChart = {
    'data' : [],
    'linechart_height' : 200,  //canvas高度
    'dot_space' : 45,  //数据点之间横向间隔距离
    'radius' :2.5, //数据点的半径
    'lineWidth' : 5, //线条的宽度
    'line_color' :  ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7', '#d4ec59','#668ed6', '#e9668e'],//柱子颜色

    //设置数据
    'setdata' : function (data) {
        this.data = data;
    },

    'drawChart' : function () {
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d"),
            list = this.data,
            len = list.length,
            tempArray = [],  //暂时存储数据的数组
            max = 0,  //柱状图中最大值
            ratio = 0,
            xWidth = 0, //横轴的宽度
            yHeight = 0, //纵轴的高度
            dot_x = this.radius, //数据点x的坐标
            dot_y = 0; //数据点y的坐标

        /*拿到柱状图中的最大值Max
        根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例*/
        for(var i=0;i<len;i++) {
            tempArray.push(Math.max.apply(null,list[i]['sale']));
        }
        max = Math.max.apply(null,tempArray);
        ratio = (this.linechart_height-10)/max;

        xWidth = list[0]['sale'].length * this.dot_space;
        yHeight = this.linechart_height;

        canvas.setAttribute('width',xWidth);
        canvas.setAttribute('height',yHeight);

        //绘制横轴及纵轴
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.moveTo(0,0);
        ctx.lineTo(0,yHeight);
        ctx.lineTo(xWidth,yHeight);
        ctx.stroke();
        ctx.restore();

        //计算将要绘制柱子的高度和位置,绘制每一个柱子
        for(var i=0;i<len;i++) {

            //每次绘制一条线的时候就重新开始画路径 重置颜色 线的起始点 
            ctx.beginPath();
            dot_x = 0;
            dot_y = 0;
            ctx.strokeStyle = this.line_color[i];
            ctx.fillStyle = this.line_color[i];

            for(var j=0;j<list[i]['sale'].length;j++) {

                //连线部分
                dot_y = this.linechart_height - ratio * list[i]['sale'][j];
                ctx.lineTo(dot_x + this.radius,dot_y);
                ctx.stroke();

                //数据点部分
                ctx.beginPath();
                ctx.arc(dot_x + this.radius*2 ,dot_y,this.radius,0,Math.PI*2,true);
                ctx.fill();
                dot_x = dot_x + this.dot_space ;
            }

        }
    }

}