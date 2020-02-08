import { take, takeEvery, takeLatest, delay, put } from 'redux-saga/effects'; // 注意: redux-saga函数导出的位置

// redux-saga: takeLatest( type, 生成器函数 )与delay配合: 达到必须等上一个saga完成, 才会促发一个新saga( 完成笔记 )
  // 0. redux-saga的核心: 经常使用他来获取服务器的异步数据, 防止多次重复请求数据
  // 1. 注意: delay要在put之前才有效果所述效果
  // 2. 限制请求间隔非常有用
export function* onIncrement(){
  yield console.log( '必须等上一个saga完成, 才会促发一个新saga' );
  yield delay( 300 );
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeLatest( 'INCREMENT', onIncrement ); // 循环监听到type则促发一个异步的saga函数, 多个异步函数保证不冲突且不影响主程序
}

/*
// redux-saga: takeEvery( type, 生成器函数 )循环监听type促发saga( 完成笔记 )
  // 0. take之促发一次sagas，takeEvery将循环促发sagas； 
  // 1. 核心: takeEvery每一次促发都会创建一个异步saga
  // 2. 保证异步函数之间不冲突, 且不影响主程序
export function* onIncrement(){
  yield console.log( 'takeEvery循环多次促发saga' );

  // redux-saga: delay(毫秒)因delay在创建的异步saga中,并不影响takeEvery的监听效果( 完成笔记 )
  yield delay(2000); 
  
  // redux-saga: put( action函数 )可直接执行redux的action函数( 完成笔记 )
    // 0. put({ type: 'xxx' })可以直接执行对应的reducer
    // 1. 同样dispatch()也可以做到, 因为毕竟返回的就是{ type: xx, action: payload }
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeEvery( 'INCREMENT', onIncrement ); // 循环监听到type则促发一个异步的saga函数, 多个异步函数保证不冲突且不影响主程序
}
*/

/*
// take模仿takeEvery方法( 完成笔记 )
// delay( ms )延迟时间( 完成笔记 )
export function* incrementSaga() {
  while( true ){
    yield take('INCREMENT');
    console.log('take模仿takeEvery');
    yield delay(3000); // 延迟3秒时间,当前3秒期间将无法促发saga( 完成笔记 )
  }
}
*/

/*
// redux-saga: take( type )监听action只促发一次saga( 完成笔记 )
  // 0. type就是redux的type字符串,指定的对应action函数
  // 1. 注意他只有一个参数take( 'type' )监测相应的action 
  // 2. 只促发一次saga
export function* incrementSaga() {
  yield take('INCREMENT');
  console.log( '促发take' );
}
*/