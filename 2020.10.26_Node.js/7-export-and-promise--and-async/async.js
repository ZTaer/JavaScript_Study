
const fs = require('fs');
const superagent = require('superagent');

/**
 * 回调地狱写法演示( 生产环境切忽使用 )( 完成笔记 )
 *      a) API测试文档: https://dog.ceo/dog-api/breeds-list
 * 
 * 安装superagent超级代理库: 类似于axios( 完成笔记 )
 *      a) 安装: yarn add superagent 
 *      b) 使用方式: 因为superagent本身为promise故可以直接使用then等进处理，catch进行错误处理
 */

 // a) 回调地狱写法演示( 注意: 切忽在生产环境使用, 会被打死的 )
 fs.readFile( `${__dirname}/txt/search.txt`, "utf-8", ( err, data ) => {
     if( err ) return console.log('地狱回调: 文件读取错误', err);

     // 获取api数据，类似于axios
     superagent
     .get(`https://dog.ceo/api/breed/${data}/images/random`)
     .then( ( res ) => {
        // 写入获取的数据
        fs.writeFile( 
            `${__dirname}/txt/search-result.txt`, 
            res.body.message, 
            "utf-8", 
            (err) => err ? console.log('地狱回调: 写入数据失败', err) : console.log('地狱回调: 写入成功 - success!!') 
        )
    } )
    .catch( ( err ) => {
        console.log('地狱回调: 请求数据失败', err.message);
    } );

 } );


 /**
  * 解决: 地狱回调 ( 完成笔记 ) 
  *     0. 方式一: 单纯的使用promise ( 不推荐 )
  *     1. 方式二: promise配合async ( 推荐 )
  *         a) 总体思路:
  *             0. 第一步: 构建promise回调函数
  *             1. 第二步: 配合async/await书写逻辑
  */

  // a) 方式一: Promise改进回调函数( 核心 | 完成笔记 )
  //    0. 目的: 避免回调写法，修正为promise做逻辑
  const readFilePro = ( fileUrl ) => {
      return new Promise( ( resolve, reject ) => {
          fs.readFile( fileUrl, "utf-8", ( err, data ) => {
              if( err ) reject(" 方式一: 无法找到文件! ", err);
              resolve(data);    // 抛出数据
          } );
      } );
  };

  const writeFilePro = ( fileUrl, fileContent ) => {
    return new Promise ( ( resolve, reject ) => {
        fs.writeFile( fileUrl, fileContent, "utf-8", ( err ) => {
            if( err ){
                reject( " 方式一: 写入失败! ", err );
            };
            resolve( " 方式一: 写入成功! " );
        } );
    } );
  }

  // b) Promise做逻辑
  readFilePro( `${__dirname}/txt/search.txt` )
  .then( ( res ) => {
      return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`); 
  } )
  .then( ( data ) => {
    return writeFilePro( `${__dirname}/txt/search-result1.txt`, data.body.message );
  } )
  .then( ( data ) => {
      console.log( data );
  } )
  .catch( ( err ) => {
    console.log('方式一: 失败');
  } );

  // b) 方式二: promise配合async ( 推荐 )
  //    0. 额外: 执行顺序, 4, 1, 5, 2, 3
  //        a) 原因: async的await之后才算异步 ( 核心 )
  //    1. 注意: async return也为promise故可以使用then
  const getDogData = async () => {
      try{
          console.log(' 执行顺序测试 - 1 ');
          const search = await readFilePro( `${__dirname}/txt/search.txt` );
          console.log(' 执行顺序测试 - 2 ');
          const data = await superagent.get(`https://dog.ceo/api/breed/${search}/images/random`);
          await writeFilePro( `${__dirname}/txt/search-result2.txt`, data.body.message );
          console.log('方式二: 写入成功');
      }
      catch( err ){
        console.log('方式二: 写入失败');
      }
      console.log(' 执行顺序测试 - 3 ');
  };
  console.log(' 执行顺序测试 - 4 ');
  getDogData();
  console.log(' 执行顺序测试 - 5 ');

  /**
   * await配合Promise.all([])进行多个promise异步等待 ( 完成笔记 )
   */
   const getDogData2 = async () => {
      try{
          const search = await readFilePro( `${__dirname}/txt/search.txt` );
          
          const data1 = superagent.get(`https://dog.ceo/api/breed/${search}/images/random`);
          const data2 = superagent.get(`https://dog.ceo/api/breed/${search}/images/random`);
          const data3 = superagent.get(`https://dog.ceo/api/breed/${search}/images/random`);

          const allData = await Promise.all([ data1, data2, data3 ]);   // 核心演示

          const newAllData = allData.map( e => e.body.message );
          await writeFilePro( `${__dirname}/txt/search-result3.txt`, newAllData.join('\n') );
          console.log('promise all: 写入成功');

      }
      catch( err ){
        console.log('promise all: 写入失败');
      }
  };
  getDogData2();

