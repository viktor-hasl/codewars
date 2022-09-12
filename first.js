function countSheep (num){
    let sheep = "";
    if(num<0){
        num = -num;
    }
    for (let i = 0; i < num; i++){
        sheep += `${i+1} sheep...`;
    }
    console.log(sheep);
    return sheep;
  }

countSheep(-3);