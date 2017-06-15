
//Comparing array of strings and array of objects to form new object
function mapWithKeys(obj1,obj2) {
objTemp = [];
for(var i=0;i<obj1.length;i++){
count =0;
  for(var j=0;j<obj2.length;j++){
		if(obj1[i] == obj2[j].name){
        	objTemp.push(obj2[i]);
         	count+=1;   
        }
  }
  if(count == 0){
  	objTemp.push(obj1[i]);
  }
}
return objTemp;  
}
//Comparing array of strings and array of objects to form new object


//Counting occurence of each word in a given string
function getWordsCount(str){
	var obj = {};
	var str = str.split(" ");
	for(var i=0;i<str.length;i++){
		obj[str[i]] = obj[str[i]] ? obj[str[i]]+=1 : 1;
	}
	return obj;
}
//Counting occurence of each word in a given string


//Method to sort array in Decending order
function arrayDescending(arr){
  arr.sort(function(a,b){
    return (b-a);
  });
  return arr;
}
//Method to sort array in Decending order


//Method to sort array in Ascending order
function arrayAscending(arr){
  arr.sort(function(a,b){
    return (a-b);
  });
  return arr;
} 
//Method to sort array in Ascending order


//Program to find given string is Polindrome or not
function checkPolindrome(str){
    if(str === str.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}
//Program to find given string is Polindrome or not


//Method to find missing number in an array
function missingNumber(arr){
  arr = arr.sort(function(a,b){
    return a-b;
  });
  var arraySum = arr.reduce(function(total,num){
          return total+=num;
         });
  var firstNtotal = (arr[arr.length-1])*((arr[arr.length-1]+1)/2);
  return firstNtotal-arraySum;
}
//Method to find missing number in an array