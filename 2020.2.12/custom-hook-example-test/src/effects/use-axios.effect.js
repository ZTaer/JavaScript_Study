/**
 * 构建: 自定义hooks容器( 完成笔记 )
 *      0. 注意文件结构以及名称
 *          a) use-xxx.effect.js
 *      1. hooks容器,调用一次执行一次,因此无需为useEffect强制指定监听目标
 *      2. 但是为了稳定性/可控性,需要给useEffect指定目标
 */

 import { useEffect, useState } from 'react';
 import axios from 'axios';

 const useAxios = url => {
    const [ data, setData ] = useState('');
    useEffect( ()=>{
        const content = async () => {
        try{
            const axiosContent = await axios(url);
            await setData( axiosContent.data[0] );
        }
        catch(error){
            console.log(error);
        }
        }
        content();
    },[url]);
    return data;
 }

 export default useAxios;
