import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import backgroundEsquerdo from '../../assets/backgroundEsquerdo.png'
import backgroundLogin from '../../assets/backgroundLogin.png'
export const Container = styled.div`
   display: flex;
   height: 100vh;
   width: 100vw;
`

export const LeftContainer = styled.div`
 background: url('${backgroundEsquerdo}');
 background-size: cover;
 background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`
export const RightContainer = styled.div`

 background: url('${backgroundLogin}');
 background-color: #1e1e1e;
 background-size: cover;
 background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

p {
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}

a {
  text-decoration: none;
  cursor: pointer;
}
  
`
export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: #9758a6;

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }

   p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
   }
`

export const Link = styled(ReactLink)`
   text-decoration: none;
   color: #fff;
`

