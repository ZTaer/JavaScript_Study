/***
 * Firebase谷歌登陆配置( 完成笔记 )
 */

import firebase from 'firebase/app'; // 获取firebase/app我们只需要它就够用拉
import 'firebase/firestore'; // 获取应用函数库
import 'firebase/auth'; // 获取认证函数库

// 认证签名信息
const config = {
    apiKey: "AIzaSyB2ypDqAys_PEcg2kSW4bZwAJh0PxnjNtw",
    authDomain: "shopping-react-test.firebaseapp.com",
    databaseURL: "https://shopping-react-test.firebaseio.com",
    projectId: "shopping-react-test",
    storageBucket: "shopping-react-test.appspot.com",
    messagingSenderId: "448778125411",
    appId: "1:448778125411:web:887aaf1acf4e8723c23856",
    measurementId: "G-DQ5KCRGZB0"
}

firebase.initializeApp(config); // 提交认证前面信息

export const auth = firebase.auth(); // 认证函数库
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // 初始化谷歌登陆
provider.setCustomParameters({ prompt: 'select_account' }); // 开启弹窗选择账号
export const signInWithGoogle = () => auth.signInWithPopup(provider); // 验证用户

export default firebase; // 默认导出

/*
// Firebase配置Google登陆,核心函数总结：
    // Firebase配置:
        // 0. 准备好需要用的库:
            import firebase from 'firebase/app'; // 获取firebase/app我们只需要它就够用拉
            import 'firebase/firestore'; // 获取应用函数库
            import 'firebase/auth'; // 获取认证函数库
        // 1. 得到firbase的认证: 
            // a) firebase.initializeApp(config);
            // b) config信息在firbase中获得
        // 2. 第三方登陆认证库: firbase.auth()
        // 3. firbase程序包/扩展功能小背包: firebase.firestore()
    // 谷歌登陆配置:
        // 0. 初始化谷歌登陆: const provider = new firebase.auth.GoogleAuthProvider();
        // 1. 开启弹窗登陆: provider.setCustomParameters({ prompt: 'select_account' });
        // 2. 此函数开启谷歌登陆窗口: export const signInWithGoogle = () => auth.signInWithPopup(provider);
            // a) 开启谷歌登陆窗口: signInWithGoogle();
            // b) 获取登陆者信息( 返回一个对象,别忘记防内存泄漏 ): auth.onAuthStateChanged( user => console.log(user) );
            // c) 退出登陆: auth.signOut()
*/