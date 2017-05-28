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