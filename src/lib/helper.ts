import { FormValues } from "../containers/ContactForm";

 function renameFiles(arr:any){
  let count:any = {};
  arr.forEach((x:any, i:any) => {

    if ( arr.indexOf(x) !== i ) {
      var c = x in count ? count[x] = count[x] + 1 : count[x] = 1;
      var j = c + 1;
      var k = x + '(' + j + ')';

      while( arr.indexOf(k) !== -1 ) k = x + '(' + (++j) + ')';
      arr[i] = k;
    }
  });
  return arr;
}

export function getValues (array:FormValues[]) {
  let arr = array.map((i:FormValues):string=>{
        return i.name
      })
      renameFiles(arr)
      return arr
  }