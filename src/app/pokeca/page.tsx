"use client"; 

import React, { useState } from 'react'; 
import { Button, Checkbox, FormControlLabel, IconButton, Stack, TextField, ToggleButton, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function Page() {

  // 試合中
  const [inPlay, setInPlay] = useState(false);
  // ポケモンチェック中
  const [inBreak, setInBreak] = useState(false);
  // 画面左が先行
  const [leftIsFirst, setLeftIsFirst] = useState(true);

  const [first, setFirst] = useState(true);
  const [pokeChecked1, setPokeChecked1] = useState(false);
  const [pokeChecked2, setPokeChecked2] = useState(false);

  // バトルスタート
  const battleStart = () => {
    setInPlay(true);
  }

  // ターンエンド
  const turnEnd = () => {
    setInBreak(false);
    setFirst(!first);
  }

  return (
    <div className="battle-wrapper">

      {!inPlay &&
      <div className="absolute p-3 top-0 bg-[#dbe2ee] w-[240px] m-auto text-2xl rounded-b-xl">
        <div>
          <FormControlLabel
            label={<Typography className="text-2xl">先攻</Typography>}
            labelPlacement="end"
            control={
              <Checkbox
                checked={leftIsFirst}
                onChange={() => setLeftIsFirst(true)}
                color="success"
                icon={<PanoramaFishEyeIcon />}
                checkedIcon={<ArrowCircleLeftIcon />}
              />
            }
          />
          |
          <FormControlLabel
            label={<Typography className="text-2xl">先攻</Typography>}
            labelPlacement="start"
            control={
              <Checkbox
                checked={!leftIsFirst}
                onChange={() => setLeftIsFirst(false)}
                color="success"
                icon={<PanoramaFishEyeIcon />}
                checkedIcon={<ArrowCircleRightIcon />}
              />
            }
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={battleStart}
            className="text-2xl"
          >
            開始
          </Button>
        </div>
      </div>
      }

      <Stack
        direction="column"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`battle ${leftIsFirst ? 'battle-left-first' : 'battle-right-first'}`}
      >
        {/* 上段プレーヤー */}
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          className="player-state battle-player-1 bg-red-200 text-xl"
        >
          {/* プレーヤー名 */}
          <div>
            <PlayerName />
          </div>
          {/* プレイチェック */}
          <div>
            {first && <DoneCheckInTurn turnEnd={turnEnd} />}
          </div>
          {/* 残りサイド */}
          <div>
            <SideCard />
          </div>
        </Stack>

        {/* ポケモンチェック */}
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            height: "50px",
          }}
          className="bg-yellow-200"
        >
          <ToggleButton
            value="check"
            selected={pokeChecked1}
            onChange={() => { setPokeChecked1(!pokeChecked1) }}
          >
            Checked
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={pokeChecked2}
            onChange={() => { setPokeChecked2(!pokeChecked2) }}
          >
            Checked
          </ToggleButton>
        </Stack>

        {/* 下段プレーヤー */}
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          className="player-state battle-player-2 bg-blue-200 text-xl"
        >
          {/* プレーヤー名 */}
          <div>
            <PlayerName />
          </div>
          {/* プレイチェック */}
          <div>
            {!first && <DoneCheckInTurn turnEnd={turnEnd} />}
          </div>
          {/* 残りサイド */}
          <div>
            <SideCard />
          </div>
        </Stack>

      </Stack>

    </div>
  );
}

const PlayerName = () => {
  const [playerName, setPlayerName] = useState('');
  return(
    <div>
      <TextField
        variant="standard"
        value={playerName}
        onChange={(e) => { setPlayerName(e.target.value) }}
        inputProps={{ sx: { fontSize: "2rem" } }}
        className="text-center w-96"
      />
    </div>
  )
}

const SideCard = () => {
  const [remainingSide, setRemainingSide] = useState(6);
  
  const getCard = () => {
    setRemainingSide((side: number) => {
      console.log(side);
      return (side > 0) ? (side - 1) : side;
    })
  }

  const element = [];
  for (let i = 0; i < 6; i++) {
    const cardIcon = (i < remainingSide) 
      ? <CropPortraitIcon fontSize="large" /> 
      : <WorkspacePremiumIcon fontSize="large" />;
    element.push(
      <IconButton key={`${i}`} onClick={getCard}>
        {cardIcon}
      </IconButton>
    );
  }
  return (
    <Stack
      direction="row-reverse"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {element}
    </Stack>
  );  
}

// 型定義
interface CheckInTurnProps {
  turnEnd: () => void;
}

const DoneCheckInTurn: React.FC<CheckInTurnProps> = (props) => {

  const [doneDraw, setDoneDraw] = useState(false);
  const [doneEnergy, setDoneEnergy] = useState(false);
  const [doneSupport, setDoneSupport] = useState(false);
  const [doneAttack, setDoneAttack] = useState(false);

  const turnEnd = () => {
    setDoneDraw(false);
    setDoneEnergy(false);
    setDoneSupport(false);
    props.turnEnd();
  }


  // interface DoneCheckboxProps {
  //   checked: boolean;
  // }
  // const DoneCheckbox: React.FC<DoneCheckboxProps> = (props) => {
  //   return (
  //     <Checkbox
  //       checked={props.checked}
  //       color="success"
  //       icon={<PanoramaFishEyeIcon />}
  //       checkedIcon={<TaskAltIcon />}
  //     />
  //   )
  // }
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControlLabel
        label={<Typography className="text-2xl">ドロー</Typography>}
        onChange={() => setDoneDraw(!doneDraw)}
        control={
          <Checkbox
            checked={doneDraw}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
          />
        }
      />

      <FormControlLabel
        label={<Typography className="text-2xl">サポート</Typography>}
        onChange={() => setDoneSupport(!doneSupport)}
        control={
          <Checkbox
            checked={doneSupport}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
          />
        }
      />

      <FormControlLabel
        label={<Typography className="text-2xl">エネルギー</Typography>}
        onChange={() => setDoneEnergy(!doneEnergy)}
        control={
          <Checkbox
            checked={doneEnergy}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
          />
        }
      />

      <FormControlLabel
        label={<Typography className="text-2xl">ワザ／おわり</Typography>}
        onChange={turnEnd}
        control={
          <Checkbox
            checked={doneAttack}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
          />
        }
      />

    </Stack>
  )
}
