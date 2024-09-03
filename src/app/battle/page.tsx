"use client"; 

import React, { useState } from 'react'; 
import { Checkbox, FormControlLabel, IconButton, Stack, TextField, ToggleButton, Tooltip } from '@mui/material';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Page() {

  const [first, setFirst] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [pokeChecked1, setPokeChecked1] = useState(false);
  const [pokeChecked2, setPokeChecked2] = useState(false);

  return (
    <div className="battle-wrapper">


      <Tooltip title="切り替え" placement="top" arrow>
        <IconButton
          // onClick={() => {
            
          // }}
          sx={{ padding: '4px' }}
        >
          <ChangeCircleIcon />
        </IconButton>
      </Tooltip>

      <Stack
        direction="column"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className="battle"
      >
        {/* 上段プレーヤー */}
        <div className="battle-player-1 bg-red-300">
          <TextField 
            variant="standard"
            value={player1}
            onChange={(e) => { setPlayer1(e.target.value) }}
          />
          {first && <DoneCheckInTurn />}
        </div>

        {/* チェック */}
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
        <div className="battle-player-2 bg-blue-300">
          <TextField
            variant="standard"
            value={player2}
            onChange={(e) => { setPlayer2(e.target.value) }}
          />
          {!first && <DoneCheckInTurn />}
        </div>

      </Stack>

    </div>
  );
}


const DoneCheckInTurn = () => {
  const [doneDraw, setDoneDraw] = useState(false);
  const [doneEnergy, setDoneEnergy] = useState(false);
  const [doneSupport, setDoneSupport] = useState(false);
  const [doneAttack, setDoneAttack] = useState(false);

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
        label="Label1"
        control={
          <Checkbox
            checked={doneDraw}
            onChange={(e) => setDoneDraw(e.target.checked)}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            style={{
              padding: 0,
              borderRadius: '0',
            }}
          />
        }
      />

      <FormControlLabel
        label="Label1"
        control={
          <Checkbox
            checked={doneEnergy}
            onChange={(e) => setDoneEnergy(e.target.checked)}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            style={{
              padding: 0,
              borderRadius: '0',
            }}
          />
        }
      />

      <FormControlLabel
        label="Label1"
        control={
          <Checkbox
            checked={doneSupport}
            onChange={(e) => setDoneSupport(e.target.checked)}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            style={{
              padding: 0,
              borderRadius: '0',
            }}
          />
        }
      />

      <FormControlLabel
        label="Label1"
        control={
          <Checkbox
            checked={doneAttack}
            onChange={(e) => setDoneAttack(e.target.checked)}
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            style={{
              padding: 0,
              borderRadius: '0',
            }}
          />
        }
      />

    </Stack>
  )
}
