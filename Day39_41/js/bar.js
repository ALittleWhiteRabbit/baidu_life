var barChart = {

    'data' : [],
    'barchart_height':200, //svg的高度
    'bar_width' : 40, //矩形的宽度
    'bar_space' : 10, //矩形的间隔
    'bar_color' :  ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7', '#d4ec59','#668ed6', '#e9668e'],//柱子颜色

    'setData' : function(data) {
        this.data = data;
    },

    //给svg的元素添加属性
    'makeSvg' : function (tag,attrs) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg',tag);
        for(i in attrs) {
            svg.setAttribute(i,attrs[i]);
        }
        return svg;
    },

    'drawChart' : function () {
        var bar_chart = document.getElementById("barchart"), //柱状图的绘制DOM节点位置
            tempArray = [],
            list = this.data,
            len = list.length,
            barWidth = this.bar_width/len,
            xline = null,  //x轴
            yline = null,
            rect = null,
            xWidth = 0, //x轴宽度
            yHeight = 0, //y轴高度
            bar_x = 5, //矩形的左侧位置
            bar_y = 0;  //矩形的顶端位置
            ratio = 0, //比例
            barHeight = 0,  //柱高
            max = 0;  //最大值

            xWidth = list[0]['sale'].length *(this.bar_space + this.bar_width);
            yHeight = this.barchart_height;

        /*拿到柱状图中的最大值Max
        根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例*/
        for(var i=0;i<len;i++) {
            tempArray.push(Math.max.apply(null,list[i].sale));
        }
        max = Math.max.apply(null,tempArray);
        ratio = this.barchart_height/max;  
    
        //绘制横轴及纵轴
        bar_chart.innerHTML = ''  //每次绘制前清空
        yline = this.makeSvg('line',{x1: 0, y1: 0, x2: 0, y2: yHeight});
        xline = this.makeSvg('line',{x1: 0, y1: yHeight, x2: xWidth, y2:yHeight});
        barchart.appendChild(xline);
        barchart.appendChild(yline);

        //计算将要绘制柱子的高度和位置,绘制每一个柱子
        for(var i=0;i<list[0].sale.length;i++) {
            for(var j=0;j<len;j++) {
                barHeight = list[j]['sale'][i]*ratio;  //根据比例设置矩形的高度
                bar_y = this.barchart_height - barHeight;
                rect = this.makeSvg('rect',{width:barWidth,height:barHeight,x:bar_x,y:bar_y,fill:this.bar_color[j]});
                bar_x = bar_x + barWidth;
                barchart.appendChild(rect);
            }
            bar_x = bar_x + this.bar_space;
        }

        bar_chart.style.height = this.barchart_height+ 'px';
        bar_chart.style.width = xWidth+ 'px';
    }
}