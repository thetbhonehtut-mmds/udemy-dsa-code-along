function averagePair(arr,avg){
    arr.sort((a,b)=> a-b)

    if(arr.length<2){
        return false
    }

    let leftPointer = 0
    let rightPointer = arr.length-1

    while(leftPointer <rightPointer){
      
        if((arr[rightPointer]+arr[leftPointer])/2 > avg){
            rightPointer--
        }
        else if((arr[rightPointer]+arr[leftPointer])/2 < avg){
            leftPointer++
        }
        else if((arr[rightPointer]+arr[leftPointer])/2 == avg){
            return true
        }
    }

    return false
}

averagePair([1,2,2,3,4,5,6,7,8,9,12,20,23,25],16)