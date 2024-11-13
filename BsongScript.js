
function main(){
    var result="";
    var count=99;

   for(var i = count; i > 0; i--){
    if (i==1){
                result += i + " bottle of beer on the wall, " + i + " bottle of beer.<br/>Take one down and pass it around, no more bottles of beer on the wall.<br/><br/>";
             }
             else{
                result += i + " bottles of beer on the wall, " + i + " bottles of beer.<br/>" + "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br/><br/>";
                }
   }
   result += "No more bottles of beer on the wall, no more bottles of beer.<br/>" + "Go to the store and buy some more, 99 bottles of beer on the wall.";
   document.getElementById("result").innerHTML = result;
}
window.onload = main;

