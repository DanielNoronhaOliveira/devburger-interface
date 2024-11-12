import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.svg'

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
 // max-width: 100vw;
  overflow-x: hidden;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //min-height: 100vh;
  

 
`
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
 width: 100%;

  background: url('${BannerHamburger }') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;
  position: relative;
 

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
   
    line-height: 65px;
    position: absolute;
    color: #fff;
    text-align: center;

    right: 20%;
    top: 30%;  
    
    span {
      display: block;
      color: #fff;
      font-size: 20px;
    }


  }

  @media (max-width: 600px){
    
   h1 {
    font-size: 40px;
    line-height: 50px;
    left: 35%;
    top: 15%;

    span{
      font-size: 16px;
    }
   }
}

`
export const CategoryMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
  max-width: 100vh;
  //overflow-x: auto;
  padding: 25px;
  //justify-content: center;
 
`
export const CategoryButton =styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color:  ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 24px;
  font-weight: 500px;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;

 @media (max-width:795px  ) { //569
  display: grid;
  grid-template-columns: repeat(2, 1fr);
} 

@media (max-width:569px  ) { 
  display: grid;
  grid-template-columns: repeat(1, 1fr);
} 


`