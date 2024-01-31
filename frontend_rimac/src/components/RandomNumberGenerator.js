import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberDisplay from './NumberDisplay';
import ControlButtons from './ControlButtons';
import Confetti from 'react-confetti';
import WinnerDisplay from './WinnerDisplay';
import ChangeMessage from './ChangeMessage';

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h1`
  color: #fdbd1d;
  -webkit-text-stroke: 3.5px #000000;
  padding: 10px;
  display: inline-block;
  font-size: 5.7em;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 80px;
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const LogoImage2 = styled.img`
  position: absolute;
  top: 20px;
  right: 23px;
  max-width:140px; 
`;

const LogoImage = styled.img`
  position: absolute;
  top: 24px;
  right: 1325px;
  max-width:190px; 
`;

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState('');
  const [winnerNumber, setWinnerNumber] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
}
  
  
  return (
    <Container>
      <Header>SORTEO RÍMAC-2023</Header>
      <LogoImage2 src={muniRimacLogo2} alt="Muni Rimac Logo" />
      <LogoImage src={muniRimacLogo} alt="Muni Rimac Logo" />
      <NumbersContainer>
        {Array.from(randomNumber.padStart(5, '0')).map((digit, index) => (
          <NumberDisplay key={index} digit={digit} spinning={spinning} />
        ))}
        {confettiActive && <Confetti />}
      </NumbersContainer>
      {winnerNumber && <WinnerDisplay winnerNumber={winnerNumber} />}
      <ControlButtons startSpinning={startSpinning} stopSpinning={stopSpinning} spinning={spinning} />  
      <ChangeMessage />
    </Container>
  );
};

export default RandomNumberGenerator;
