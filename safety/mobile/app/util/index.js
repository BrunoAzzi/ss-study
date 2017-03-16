

/**
  convert a array of elements [e1,e2,e3...eN] to a new array
  with elements [ {id:0,value:map(e1)}, ..., {id:N-1,value:map(eN)} ]
  where map(e) is a function to tranform a element (e) if nescessary
 * @param  {array}      : [e1,e2,e3...eN]
 * @param  {map}        : a function to map a element(e) to a result(r), r = map(e)
 * @return {new_array}  : [ { id:0, value:r1 }, ..., { id:N-1, value:rN } ]
 */
export const transform = (array, map) => {
  new_array = [];
  for(id=0; id<array.length; id++){
    const value = map(array[id]);
    new_array.push({id,value});
  }
  return new_array;
}
