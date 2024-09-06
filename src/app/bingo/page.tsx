"use client"; 

import React, { useEffect, useState } from 'react'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';

const Page: React.FC = () => {

  const [inPlay, setInPlay] = useState<boolean>(false);
  const [allNumbers, setAllNumbers] = useState<number[]>([]);
  const [transitionNumber, setTransitionNumber] = useState<number>(0);
  const [drawnNumber, setDrawnNumber] = useState<number>(0);
  const [drawnNumberHistory, setDrawnNumberHistory] = useState<number[]>([]);
  const [isFlying, setIsFlying] = useState<boolean>(false);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i<=75; i++) {
      numbers.push(i);
    }
    setAllNumbers(numbers);
  }, []);
  
  useEffect(() => {
    if (!inPlay) {
      return;
    }
    console.log(`フラグ切り替え -> isFlying:${isFlying}`);
    // 抽選中タイマー
    let rollingInterval: NodeJS.Timeout | undefined;;
    // ランダムな番号
    let randomNumber: number;
    if (isFlying) {
      // drawingがtrueの間、番号をランダムに切り替える
      rollingInterval = setInterval(() => {
        do {
          // 1～75までの数字をランダムに取得
          randomNumber = Math.floor(Math.random() * 75) + 1;
          // 履歴に既に存在する場合は再生成
        } while (drawnNumberHistory.includes(randomNumber));
        setTransitionNumber(randomNumber);
      }, 50); // 50msごとに番号を切り替える
    } else {
      // drawingがfalseになったら番号の切り替えを停止する
      clearInterval(rollingInterval);
      makeNumber();
    }
    // コンポーネントがアンマウントされる際にインターバルをクリア
    return () => {
      if (rollingInterval) {
        clearInterval(rollingInterval);
      }
    };
  }, [inPlay, isFlying]);

  function clearGame() {
    if (!window.confirm('本当に消しますか？')) {
      return;
    }
    setInPlay(false);
    setTransitionNumber(0);
    setDrawnNumber(0);
    setDrawnNumberHistory([]);
    setIsFlying(false);
  }

  const handleClick = async () => {
    console.log(`鳥クリック.`);
    if (drawnNumberHistory.length === allNumbers.length) {
      alert('すべての番号が出ました。「ゲームクリア」を押してください。');
      return;
    }
    if (!inPlay) {
      setInPlay(true);
    }
    setIsFlying((prev) => !prev);
  }

  // 番号の抽選
  const makeNumber = async () => {
    console.log(`ランダム番号を取得!`);
    // ストップ
    let randomNumber;
    do {
      // 1～75までの数字をランダムに取得
      randomNumber = Math.floor(Math.random() * 75) + 1;
      // 履歴に既に存在する場合は再生成
    } while (drawnNumberHistory.includes(randomNumber));
    setDrawnNumber(randomNumber);
    const newHistory = drawnNumberHistory.concat();
    newHistory.push(randomNumber);
    setDrawnNumberHistory(newHistory);
  }

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      style={wrapperStyle}
    >
      <div>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="text-3xl">Bingo Bird</h2>
          <div>
            {/* {isFlying ? 'ジャラララー' : '　'} */}
          </div>
        </Stack>
      </div>
      {/* 番号抽選 */}
      <div>
        <div>
          <IconButton onClick={handleClick} sx={{ padding: 0 }}>
            <FlutterDashIcon
              fontSize='large'
              sx={{
                animation: isFlying ? `${flyAnimation} 1s ease-in-out infinite` : 'none',
              }}
            />
          </IconButton>
        </div>
        <div style={drawnNumberStyle}>
          {isFlying 
            ? <span className="text-teal-500">{transitionNumber}</span>
            : <>
                {drawnNumber 
                  ? <span className="text-teal-700">{drawnNumber}</span>
                  : <span className="text-gray-500 text-sm">Ready..</span>
                }
              </>
          }
        </div>
      </div>
      {/* 抽選番号履歴 */}
      <div style={LeftSideStyle}>
        <div className="text-xs">First</div>
        {drawnNumberHistory.map((number, index) => 
          <div key={index}>{number}</div>
        )}
        <div className="text-xs">Latest</div>
      </div>
      <div style={RightSideStyle}>
        <div className="text-xs">Small</div>
        {drawnNumberHistory.concat().sort((a, b) => a - b).map((number, index) =>
          <div key={index}>{number}</div>
        )}
        <div className="text-xs">Big</div>
      </div>
      {/* クリア */}
      <div>
        <Button
          variant='text'
          onClick={() => clearGame()}
        >
          ゲームクリア
        </Button>
      </div>
    </Stack>
  );
}
export default Page;

// 羽ばたきアニメーション
// const flyAnimation = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-40px); } /* ゆっくり上に移動 */
//   55% { transform: translateY(-40px); } /* ホバリング状態を少し維持 */
//   100% { transform: translateY(0); }    /* 元に戻る */
// `;
const flyAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); } /* 上に移動 */
  100% { transform: translateY(0px); }    /* 元に戻る */
`;

// スタイル
const wrapperStyle: React.CSSProperties = {
  height: "100vh",
  textAlign: "center",
}
const drawnNumberStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  border: "8px solid rgb(251 113 133)",
  borderRadius: "50%",
  width: "160px",
  height: "160px",
  fontSize: "75px",
};
const LeftSideStyle: React.CSSProperties = {
  overflow: "auto",
  height: "95vh",
  position: "absolute",
  top: "0",
  left: "0",
  color: "#ccc",
};
const RightSideStyle: React.CSSProperties = {
  overflow: "auto",
  height: "95vh",
  position: "absolute",
  top: "0",
  right: "0",
  color: "#ccc",
};