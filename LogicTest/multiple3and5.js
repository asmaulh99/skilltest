function solution(int){
    var a=0;
    const bil=[];
    for (let i=1;i<int;i++){
        if (i%3==0){
            bil[a]=i;
            // console.log(bil[a]);
            a=a+1;
        }
        else if (i%5==0){
            bil[a]=i;
            // console.log(bil[a]);
            a=a+1;
        }
    }
    total=0;
    for (let j=0;j<bil.length;j++){
        total +=  bil[j];
    }
    console.log(total+" = "+bil.join(" + "));
}

solution(10);
solution(20);