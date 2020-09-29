
exports.min = function min (array) {
  console.log(array);
  return (array && array.length > 0)?array.sort( (a,b)=>{
    if(a>b){
      return 1
    }else if (a==b){
      return 0
    }else{
      return -1
    }
  })[0]: 0;
}

exports.max = function max (array) {
  return  (array && array.length > 0)?array.sort( (a,b)=>{
    if(a>b){
      return 1
    }else if (a==b){
      return 0
    }else{
      return -1
    }
  })[array.length - 1]: 0;
}

exports.avg = function avg (array) {
  return  (array && array.length > 0)? array.reduce( (prev, el) => {return prev + el}, 0) / array.length  : 0;
}
