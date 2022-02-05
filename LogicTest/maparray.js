function productArray(arr){
    let length = arr.length;
    const product=[];
    const pengganti=[];
    let hasil;
    for (let i=0;i<length;i++){
        
        hasil=1;
        // return console.log(hasil);
        for(let j=0;j<length;j++){
            if (i==j){
                pengganti[j]=1;
            }else {
                pengganti[j]=arr[j];
            }
            hasil = hasil * pengganti[j];
        }
        product[i]=hasil;
    }
    console.log(product);
    
}
productArray([12,20])
productArray([12,20])
productArray([3,27,4,2])
productArray([13,10,5,2,9])
productArray([16,17,4,3,5,2])