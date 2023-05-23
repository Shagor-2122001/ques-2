function tempconverter(far){
    const ans = ((far - 32)/1.8).toFixed(2);
    return ans;
}

console.log(tempconverter(50));

function countZeros(test){
    let zeroCount = 0;
    for(let i=0; i<test.length; i++) 
    {
        if(test[i]>1)
        {
            return "invalid input";
        }
        else if(test[i]=="0")
        {
            zeroCount++;
        }
    }
    return zeroCount;
}
let test ="10101";
console.log(countZeros(test));
