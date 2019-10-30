var arr2 = [];
for (let i = 0; i < 5; i++ ) {
   arr2.push( Math.round( Math.random() * 10 ));
}
console.log('Massiv = '+arr2);
let max=arr2[0];
let min = arr2[0];
    for (let i = 0; i < arr2.length; ++i){
        if (arr2[i] > max){
             max = arr2[i];
        }else if(arr2[i] < min){
            min = arr2[i];
    }
    }
console.log(max);
console.log(min);