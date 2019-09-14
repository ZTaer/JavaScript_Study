
// AJAX解析 - Asynchronous Javascript And Xml - 异步js和xml

// 关于fetch()函数获取API数据
    // 0. 用于获取API的数据
    // 1. 用法: fetch(`API链接`);

/*
// 0. then实战请求天气数据 - Fetch/Promises/then方法( 不推荐使用then,因为维护性不强，推荐使用async与then配合使用 )
    let cityWather = fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2151330/') // 请求API数据 - 在没有域名的情况下本地需要cros代理才能正常的获取API数据
    cityWather.then( cur => {
        return cur.json(); // 将json数据转换为对象类型
    } )
    .then( data =>{
        console.log(data);
        console.log('------');
        const today = data.consolidated_weather[0];
        console.log(`${data.title} - ${today.applicable_date} - 气温${today.the_temp} - 天气${today.weather_state_name}`);
    } )
    .catch( error => {
        console.log(error);
    } );
*/

// 1. async实战请求天气数据 - Fetch/Promises/async( 推荐使用async与then配合 )
    // 0. async检错机制
        // try{ ...代码内容 }catch(error){ ...代码内容 }
    async function getWether( cityNum ){
        try{
            let data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityNum}/`);
            data = await data.json();
            const today = data.consolidated_weather[0];
            console.log(`${data.title} - ${today.applicable_date} - 气温${today.the_temp} - 天气${today.weather_state_name}`);
            return data;
        }
        catch( error ){
            console.log(error);
        }
    }
    getWether(2151330); // async函数调用

    // async与then配合 - 处理async函数的异步数据
    getWether(44418).then( data => {
        console.log(data);
    } )
    .catch( error => console.log(error) );