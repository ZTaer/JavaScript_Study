import React, { useState, useEffect, useRef } from "react";

import {
  ReactOwnersVideoContainer,
  ReactOwnersVideoControl,
  ReactOwnersVideoControlContainer,
  ReactOwnersVideoControlHeader,
  ReactOwnersVideoControlBody,
  ReactOwnersVideoControlFotter,
} from "./react-owners-video.styled";
import ReactPlayer from "react-player";
import useMouse from "@react-hook/mouse-position";
import useHover from "@react-hook/hover";
import ScreenFull from "screenfull";

const ReactOwnersVideo = (props) => {
  /**
   * 变量区
   */
  const { url = "", heightProps = "620px" } = props;
  const [player, setPlayer] = useState({}); // 组件回调信息，常用其中seekTo函数用于跳跃进度条
  const [controlVisible, setControlVisible] = useState(true);
  const containerTarget = useRef(null);
  const mouseContainerTarget = useMouse(containerTarget, {
    fps: 5,
    enterDelay: 100,
    leaveDelay: 100,
  });
  const mouseHoverContainerTarget = useHover(containerTarget, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  /**
   * 运算逻辑区
   */
  // 获取播放视频信息
  const handleCpuPlayer = (e) => {
    setPlayer(e);
  };

  // 取整
  const handleCpuToFixedNum = (num) => parseFloat(num.toFixed(1));

  // 操控视频状态属性
  const handleCpuChangeVideoState = (target) => {
    try {
      setPlayer({ ...player, ...target });
      if (target.volume) {
        // 保证音量0~1范围

        setPlayer({ ...player, volume: handleCpuToFixedNum(target.volume) });
        if (target.volume > 1) setPlayer({ ...player, volume: 1 });
        else if (target.volume < 0) setPlayer({ ...player, volume: 0 });
      }
    } catch {
      console.warn("handleCpuChangeVideoState error");
    }
  };

  /**
   * 异步逻辑区
   */

  /**
   * 交互逻辑区
   */
  // 操控控制栏显示
  const handleUiControlVisible = (props) => {
    setControlVisible(props);
  };

  // 暂停/播放视频
  const handleUiPlayVideo = () => {
    handleCpuChangeVideoState({ playing: !player.playing });
  };

  /**
   * 初始化区
   */
  console.log("react-owners-video", props, player);
  console.log(
    "mouse & hover :>> ",
    mouseContainerTarget,
    mouseHoverContainerTarget
  );

  return (
    <React.Fragment>
      <h5>Mouse: {JSON.stringify(mouseContainerTarget, null, 2)}</h5>
      <ReactOwnersVideoContainer
        ref={containerTarget}
        onMouseLeave={() => {
          handleUiControlVisible(false);
          console.log("leave");
        }}
        onMouseEnter={() => {
          handleUiControlVisible(true);
          console.log("enter");
        }}
        className="react-owners-video"
      >
        <ReactPlayer
          width="100%"
          height={heightProps}
          style={{
            margin: "0px auto",
          }}
          url={url}
          ref={handleCpuPlayer}
        />
        {
          // 控制栏显示
          controlVisible && (
            <ReactOwnersVideoControl style={{ height: heightProps }}>
              <ReactOwnersVideoControlContainer>
                <ReactOwnersVideoControlHeader>
                  <h1>header</h1>
                </ReactOwnersVideoControlHeader>
                <ReactOwnersVideoControlBody>
                  <h1>
                    <button onClick={handleUiPlayVideo}>Play</button>
                  </h1>
                </ReactOwnersVideoControlBody>
                <ReactOwnersVideoControlFotter>
                  <h1>footer</h1>
                </ReactOwnersVideoControlFotter>
              </ReactOwnersVideoControlContainer>
            </ReactOwnersVideoControl>
          )
        }
      </ReactOwnersVideoContainer>
    </React.Fragment>
  );
};

export default React.memo(ReactOwnersVideo);
