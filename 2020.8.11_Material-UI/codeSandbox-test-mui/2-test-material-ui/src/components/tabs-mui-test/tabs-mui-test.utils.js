// a) 数组防重复添加
export const moreChoose_utils = ( value, valueArray ) => {
  const result = [ ...valueArray ];

  if( valueArray.includes( value ) ){
    const target = result.indexOf( value );
    target === 0 ?
      result.shift() :
      result.splice( target, 1 );
  }else {
    result.push( value );
  }

  return result;
};