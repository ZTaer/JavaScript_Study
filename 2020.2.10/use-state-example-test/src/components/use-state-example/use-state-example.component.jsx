/**
 * hooks的函数实践测试( 完成笔记 )
 * 0. hooks的注意事项:
 *    a) 不能在class中使用: 因为hooks目的之一就是为了避免使用class, 降低代码的复杂度
 *    b) 代替"React生命周期": 当组件随着功能增, 其在生命周期的代码复杂度增加, 用于代替react默认的生命周期, 降低代码复杂度.
 * 1. useState使用方式
 *    a) 创建: const [ xxx, setXxx ] = useState('默认值'); 这里使用了数组的解构
 *    b) 使用: setXxx('改变的值'): 使用此函数后xxx的值将改变
 */
import React, { useState, useEffect } from 'react';
import Card from '../card/card.component';

const UseStateExample = () => {
  const [ name, setName ] = useState('ZTaer');
  const [ address, setAddress ] = useState('山东菏泽');

  /**
   * useEffect使用方式
   *    a) useEffect的注意事项:
   *      0. 不能将useEffect嵌套在if等大括号内
   *      1. 必须在"组件函数"的顶级位置
   *    b) useEffect的3种情况:
   *      0. useEffect( ()=>{}, [xxx] )
   *        a) 当xxx发生改变时,促发useEffect的函数
   *        b) 组件初始化时,也将促发
   *      1. useEffect( ()=>{}, [] )
   *        a) 当组件初始化时, 促发一次useEffect的函数
   *        b) 生命周期: 相当于react的生命周期componentDidMount()
   *      2. useEffect( ()=>{} )
   *        a) 组件中每一次改变都会促发useEffect的函数
   *        b) 谨慎使用, 容易造成组件的死循环
   *        c) 如果要求"数据保持实时最新"可以使用,但依然要谨慎使用,因为他使程序的可控性降低
   *    c) 使用地方:
   *      0. 通常使用在监听目标, 做出反应
   */
  useEffect( ()=>{
    console.log('目标值改变时/初始化时,促发');
  },[name,address] );

  useEffect( ()=>{
    console.log('初始化时促发');
  },[] );

  useEffect( ()=>{
    console.log('每一次改动都将促发');
  } );

  return(
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={ ()=>setName('OO7__ZTaer') } >Set Name to Andrei</button>
      <button onClick={ ()=>setAddress('牡丹区') } >Set Address</button>
    </Card>
  );
};

export default UseStateExample;
