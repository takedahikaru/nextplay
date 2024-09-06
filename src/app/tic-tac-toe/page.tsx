"use client"; 

import React, { useEffect, useState } from 'react'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FlightIcon from '@mui/icons-material/Flight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Face3Icon from '@mui/icons-material/Face3';
import Face5Icon from '@mui/icons-material/Face5';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Page: React.FC = () => {

  const [firstIsNext, setFirstIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [winner, setWinner] = useState<string>('');
  const [player1IconId, setPlayer1IconId] = useState<string>("10");
  const [player2IconId, setPlayer2IconId] = useState<string>("20");

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  const playersIcons: Map<string, JSX.Element> = new Map([
    ["10", <PanoramaFishEyeIcon key="10" fontSize="large" />],
    ["11", <StarIcon key="11" fontSize="large" />],
    ["13", <FlightIcon key="13" fontSize="large" />],
    ["15", <Face3Icon key="15" fontSize="large" />],
    // ["16", <BathtubIcon key="16" fontSize="large" />],
    ["18", <AndroidIcon key="18" fontSize="large" />],
    ["19", <FingerprintIcon key="19" fontSize="large" />],
    ["20", <ClearIcon key="20" fontSize="large" />],
    ["21", <FlashOnIcon key="21" fontSize="large" />],
    ["24", <RocketLaunchIcon key="24" fontSize="large" />],
    ["25", <Face5Icon key="25" fontSize="large" />],
    // ["26", <HotelIcon key="26" fontSize="large" />],
    ["28", <AppleIcon key="28" fontSize="large" />],
    ["29", <FingerprintIcon key="29" fontSize="large" />],
  ]);

  function clearGame() {
    setFirstIsNext(true);
    setSquares(Array(9).fill(''));
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = (firstIsNext) ? "1" : "0";
    setSquares(nextSquares);
    setFirstIsNext(!firstIsNext);
  }

  interface SquareProps {
    value: string;
    onSquareClick: () => void;
  }

  const Square: React.FunctionComponent<SquareProps> = ({ value, onSquareClick }) => {
    // console.log({ value });
    // console.log({ player1Icon });
    return (
      <button
        style={squareStyle}
        onClick={onSquareClick}
      >
        {/* {value} */}
        {value === "1" && playersIcons.get(player1IconId)}
        {value === "0" && playersIcons.get(player2IconId)}
      </button>
    );
  }

  const handleChange1 = (event: SelectChangeEvent) => {
    setPlayer1IconId(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setPlayer2IconId(event.target.value as string);
  };

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
          <h2 className="text-3xl">tic-tac-toe</h2>
          <div>
            <Select
              value={player1IconId}
              onChange={handleChange1}
              disabled={squares.some(s => s !== '')}
              sx={{ 
                border: "none",
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',   // MUIのアウトラインボーダーも消す
                },
              }}
            >
              {Array.from(playersIcons).filter(([k]) => Number(k) < 20).map(([key, value]) =>
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              )}
            </Select>
            <span className="text-xl">vs.</span>
            <Select
              value={player2IconId}
              onChange={handleChange2}
              disabled={squares.some(s => s !== '')}
              sx={{
                border: "none",
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',   // MUIのアウトラインボーダーも消す
                },
              }}
            >
              {Array.from(playersIcons).filter(([k]) => Number(k) >= 20).map(([key, value]) =>
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              )}
            </Select>
          </div>
        </Stack>
      </div>
      {/* 状況 */}
      <div>
        {winner
          ?
          <span className="text-red-500 bg-yellow-100">
            {playersIcons.get((winner === "1") ? player1IconId : player2IconId)}
            の勝ち
          </span>
          :
          <span>
            {squares.some(s => s !== '')
              ? 
              <>
                次は
                {playersIcons.get((firstIsNext) ? player1IconId : player2IconId)}
                の番
              </>
              :
              <>
                {playersIcons.get(player1IconId)}
                からはじめてください
              </>
            }
          </span>
        }
      </div>
      {/* マス目 */}
      <div style={prayBoadStyle}>
        {squares.map((s, index) =>
          <Square 
            key={index}
            value={s}
            onSquareClick={() => handleClick(index)}
          />
        )}
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

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return '';
}

// スタイル
const wrapperStyle: React.CSSProperties = {
  height: "100vh",
  textAlign: "center",
}
const prayBoadStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 80px)",
  gridTemplateRows: "repeat(3, 80px)",
  fontSize: "40px",
};
const squareStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #999",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: "0",
  textAlign: "center",
};