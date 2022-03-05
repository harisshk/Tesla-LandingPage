import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';

function Section({title,description,backgroundImg,leftBtnText,rigthBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rigthBtnText &&
                        <RigthButton>
                            {rigthBtnText}
                        </RigthButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Button>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction :column;
    justify-content:space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align: center;
    z-index:-1;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:769px) {
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    heigth: 40px;
    width: 256px;
    color: white;
    padding:12px;
    display: flex;
    justify-content: center;
    border-radius:100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`

const RigthButton = styled(LeftButton)`
    background-color: white;
    opacity:0.65;
    color:black;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x: hidden;
    animation:animateDown infinite 1.5s;

`

const Button = styled.div`

`
