import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,RollDice}) => {

    
  return (
    <DiceContainer>
        <div className='dice' onClick={RollDice}>
            <img src={`./images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
    
`