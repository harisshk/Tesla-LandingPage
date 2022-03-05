import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux'


function Header() {

  const [burderStatus, setBurderStatus] = useState(false);

  const cars = useSelector(selectCars)

  return (
    <Container>
      <div>
        <img src='images/logo.svg' alt="tesla-logo" />
      </div>
      <Menu>
        {cars && cars.map((car,index)=>
          <p key={index}>{car}</p>
        )}
      </Menu>

      <RightMenu>
        <p >Shop</p>
        <p >Tesla Account</p>
        <CustomMenu onClick={() => setBurderStatus(true)}/>
      </RightMenu>
      <Burger show={burderStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurderStatus(false)}/>
        </CloseWrapper>
          {cars && cars.map((car,index)=>
            <li key={index}><p key={index} >{car}</p></li>
          )}
        <li><p >Existing Inventry</p></li>
        <li><p >Used Inventry</p></li>
        <li><p >Trade-in</p></li>
        <li><p >Cybertruck</p></li>
        <li><p >Roadaster</p></li>
      </Burger>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex: 1;

  p {
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap; 
  }

  @media(max-width:768px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-itmes: center;
  p {
    font-size: 1em;
    font-weight: 500;
    text-transform:uppercase;
    margin-right:10p
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
  margin-right:4px;
`

const Burger = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:white;
  width:300px;
  z-index: 16;
  list-style-type: none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props => props.show ? "translateX(0)": "translateX(100%)"};
  transition: transform 0.3s;

  li {
    padding:15px 0;
    border-bottom : 1px solid rgba(0,0,0,.2);

    p {
      font-weight:600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;

`
