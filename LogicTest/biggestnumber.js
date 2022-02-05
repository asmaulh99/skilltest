function maxRedigit(bil) {
    var bilangan = bil;
    if (bil==0){
       return console.log(null);
    } else if (bil<0) {
        return console.log(null);
    } else if (bil>999){
        return console.log(null);
    } else if (bil<100){
        return console.log(null);
    }
    // console.log(bilangan);
    var slit = (""+bilangan).split("").map(Number);
    if (slit[0]==slit[1] || slit[0]==slit[2 || slit[1]==slit[2]] || slit[0]==0){
        return console.log(null);
    }
    slit.sort();
    slit.reverse();
    console.log(slit[0]+""+slit[1]+""+slit[2]);
}

maxRedigit(123) 
maxRedigit(231)
maxRedigit(321)

maxRedigit(-1)
maxRedigit(0)
maxRedigit(99)
maxRedigit(1000)