import React,{ useEffect, useState } from "react";

const SlickInterView  = ({ 
    children, 
    autoPlay=true,  // 是否自动播放
    autoTime=1000   // 自动播放时间间隔
}) => {

    const [ nowActive, setNowActive ] = useState(0);
    const [ nowAotoPlay, setNowAotoPlay ] = useState(autoPlay);

    // 自动轮播
    useEffect(()=>{
        if(nowAotoPlay){
            setTimeout(()=>{
                setNowActive((nowActive + 1) % children.length);
            },autoTime) 
        }
    });

    // 异步开启轮播，为了左右切换轮播时不出BUG
    const initAutoPlay = () => {
        setTimeout(()=>{
            setNowAotoPlay(true);
        },autoTime)
    }

    // 左轮播
    const handleCutActive = () => {
        setNowAotoPlay(false);
        if( nowActive === 0 ){
            setNowActive( children.length - 1 );
        }
        else{
            setNowActive((nowActive - 1) % children.length);
        }
        initAutoPlay();
    }

    // 右轮播功能
    const handleAddActive = () => {
        setNowAotoPlay(false);
        setNowActive((nowActive + 1) % children.length);
        initAutoPlay();
    }

    // 设定指定跳转
    const handleJumpActive = ( num ) => {
        const target = +num.target.textContent;
        setNowAotoPlay(false);
        setNowActive(target);
        initAutoPlay();
    };

    return(
        <div className="slick-interview-container">
            {   // 渲染锚点
                children.map( ( cur, index )=>{
                    return(
                        <button 
                            key={index} 
                            onClick={ handleJumpActive } 
                        >
                            {index}                            
                        </button>
                    )
                } )
            }
            {   // 渲染轮播图
                children.map(( item, index )=>{
                    return index === nowActive ?
                    item :  
                    null;
                })
            }

            <button onClick={handleCutActive} >
                Left
            </button>
            <button onClick={handleAddActive} >
                Right
            </button>
        </div>
    );
}

export default React.memo(SlickInterView);