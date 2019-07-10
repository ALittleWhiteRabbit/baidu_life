//将数组分别按从大到小以及从小到大进行排序后在console中输出
var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];

var arraAfter = arr.sort((a,b) => a-b);
console.log(arraAfter);

var arraAfter = arr.sort(function(a,b) {
    return b-a;
});
console.log(arraAfter);

//将数组分别按字母顺序a-z及z-a进行排序，在console中输出
var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];

var arraAfter = arr.sort((a,b)=>{
    return a<b?-1:1;
})
console.log(arraAfter);

var arraAfter = arr.sort((a,b) =>{
    return a>b?-1:1;
})
console.log(arraAfter);

/*将二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
[[22, 63], [16, 60], [7, 44], [26, 35], [10, 14]]*/

var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];

var arraAfter = arr.sort(function(a,b){
    a = a[1];
    b = b[1];
    return b-a;
});
console.log(arraAfter);

//将数组分别按元素对象的value值从小到大进行排序后输出
var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

var arraAfter = arr.sort(function(a,b){
    a = a.value;
    b = b.value;
    return a-b;
});

console.log(arraAfter);