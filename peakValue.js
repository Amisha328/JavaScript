function peakValue(arr){
    const n = arr.length;
    const peak = [];

    if(n == 0) return peak;

    if(n == 1 || arr[0] > arr[1]){
        peak.push(arr[0]);
        return peak;
    }
    if(arr[n-1] > arr[n-2]){
        peak.push(arr[n-1]);
        return peak;
    }
    for(let i = 1; i < n-1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            peak.push(arr[i]);
        }
    }

    return peak;
}

const arr = [4,5,2,7,5,8,3,2,8,0];
const peak = peakValue(arr);
console.log("Peak value: "+peak);

// 5 7 8 8
