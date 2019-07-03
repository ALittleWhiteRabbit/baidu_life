var tb = document.getElementById("tbody");
/*var arr=[];
document.write('<table>');
for (i=1;i<=9;i++) {
    document.write('<tr>');
    for (j=1;j<=i;j++) {
        result=i*j;
        arr.push(i+'*'+j+'='+result+' ');
        document.write('<td>'+i+'*'+j+'='+result+'</td>');
    }
    document.write('</tr>');
    arr.push('\n');
}
document.write('</table>');
console.log(arr.join(''));
*/
var tb = document.getElementById("tbody");
var arr = [];
var table='';
for (i=1;i<=9;i++) {
    var ans='';
    for (j=1;j<=i;j++) {
        result=i*j;
        arr.push(i+'*'+j+'='+result+' ');
        ans += '<td>'+i+'*'+j+'='+result+'</td>';
    }
    table+='<tr>'+ans+'</tr>'
    arr.push('\n');
}
console.log(arr.join(''));
tb.innerHTML = table;
