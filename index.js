//Binary Search 
let arr = [10,20,30,40,50,60,70,80,90,99,100,900,2000,12521316]; 
console.log("Given List "+arr);

let startIndex = 0;
let endIndex = arr.length-1;
let searchElement = 12521316;
console.log("Search element :12521316")
binarySearch(arr,startIndex,endIndex,searchElement)
function binarySearch(arr,startIndex,endIndex,searchElement){
    if(startIndex>endIndex){
        console.log("element not found");
        return false;
    }

    let mid = Math.floor((startIndex+endIndex)/2);
    if(searchElement == arr[mid]){
        console.log("Element found at the position : "+mid);
        return true;
    }
    else{
    if(searchElement < arr[mid]){
            return binarySearch(arr,startIndex,mid-1,searchElement);
        }

    else if(searchElement > arr[mid]){
            return binarySearch(arr,mid+1,endIndex,searchElement);
        }
    }
    
}

//another Javascript thingy
function conCatenate(/**/){
    var args = arguments;
    var temp = [];
    for(let arr of args){
        temp = temp.concat(arr);
    }
    return temp;
};

console.log(conCatenate([2],[3],[4],[54]));

// Oddish or Evenish

function odOrEve(num1){
    var dig=0;
    var sum=0;
    console.log("The number is : "+num1);
    while(num1>0){
        dig=num1%10;
        sum=sum+dig;
        num1 = Math.floor(num1/10);
        
    }
    sum = Math.round(sum);
    console.log("The sum is :"+sum);
    if(sum%2==0){
        console.log("Evenish")
    }
    else{
        console.log("Oddish");
    }
    return sum;
}
odOrEve(34);