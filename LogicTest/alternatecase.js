function alternateCase(str){
var split = str.split("");
var j = split.length;
// return console.log(j);
for (let i = 0; i<j;i++){
    if(split[i]==split[i].toUpperCase()){
        split[i]=split[i].toLowerCase();
        // return console.log(split[i]);
    } else {
        split[i]=split[i].toUpperCase();
    }
}

console.log(split.join(''));
}

alternateCase("abc");
alternateCase("ABC");
alternateCase("Hello World");
