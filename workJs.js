function positiveToNegative(arr) {
   let sum;
   for(let y = 0; y<arr.length; y++){
      sum = arr[y] + sum;
   }
   if(sum===0){
      return arr;
   }
   for(let i = 0; i<arr.length; i++){
      if(arr[i] == 1){
         arr[i] = 0;
      }else{
         arr[i] = 1;
      }
   }
   for(let j = arr.length -1; j>0; j--){
      if (arr[j] === 0){
         arr[j]=1;
         break;
      }
   }
   return arr;
 }

 console.log(positiveToNegative([0, 0, 0, 0]));