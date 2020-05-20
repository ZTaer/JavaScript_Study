/**
 * Jest Testing( 完成笔记 )
 */

 // 模拟谷歌搜索
 const googleDatabase = [
     'cats.com',
     'pornhub.com',
     'baidu.com',
     'morecats.com',
     'oo7.fun',
     'onecats.com',
     'earthlees.com',
     'nocats.com'
 ];

 const googleSearch = ( serarchInput, db ) => {
    const result = db.filter( websit => {
        return websit.includes( serarchInput );
    } );
    return result.length > 3 ? result.slice(0,3) : result; 
 }

 // console.log(googleSearch( 'cat', googleDatabase ));

 module.exports = googleSearch;