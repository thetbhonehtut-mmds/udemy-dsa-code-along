function same(array1,array2){
    //check if elements in second array is the square of elements in first array 
    //,but frequency of each value must be the same, i.e, if array 1 has 2 '4's then, array 2 must have 2 '16's.
    //if there's only one '16', it is considered false

    //set up object for frequecy of array 1 and array 2
    let array1FrequencyObject = {}
    let array2FrequencyObject = {}
    
    //loop through array 1
    for(let i = 0;i < array1.length; i++){
         // if object[element] then object[element] ++
        // else object[element] = 1
        let currentElement = array1[i]
        array1FrequencyObject[currentElement]? array1FrequencyObject[currentElement]++: array1FrequencyObject[currentElement]=1
    }
       
  //loop through array 2
    for(let i = 0;i < array2.length; i++){
         // if object[element] then object[element] ++
        // else object[element] = 1]
        let currentElement = array2[i]
        array2FrequencyObject[currentElement]? array2FrequencyObject[currentElement]++: array2FrequencyObject[currentElement]=1
    }

    console.log(array1FrequencyObject,array2FrequencyObject)

    let result = true
    Object.entries(array1FrequencyObject).forEach(element=> {
       
        let frequencyOfSquaredElement = array2FrequencyObject[Math.pow(element[0],2)]
        let frequecyOfElement = element[1]
        // console.log(Math.pow(element[0]),element,frequencyOfSquaredElement,frequecyOfElement)
        if(!frequencyOfSquaredElement){
            result = false
        }
        if(frequecyOfElement != frequencyOfSquaredElement){
            result = false
        }
        
        
    } )

    return result

}