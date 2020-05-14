import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgb(34,37,42);
    & button {
        background: rgba(51, 51, 255, 1) !important;
    }
`;

export const ProgressCircle = styled.div`
    font-size: 20px;
    margin: 20px;
    position: relative;
    padding: 0;
    width: 7em;
    height: 7em;  
    background-color: rgb(32,33,36);
    border-radius: 50%;
    line-height: 7em;
    &:after {
        border: none;
        position: absolute;
        top: 0.12em;
        left: 0.12em;
        text-align: center;
        display: block;
        border-radius: 50%;
        width: 6.76em;
        height: 6.76em;
        background-color: rgb(28,29,32);
        content: " ";
    }
    & span.title {
        position: absolute;
        line-height: 8.5em;
        width: 8.5em;
        text-align: center;
        display: block;
       
        z-index: 2;
        font-size: 16px;
        font-weight: 100;
        top:-14px;
    }
    & span.value {
        position: absolute;
        line-height: 4.2em;
        width: 4.5em;
        text-align: center;
        display: block;
        color: #ffffff;
        z-index: 2;
        font-size: 32px;
        font-weight: 700;
        top:14px;
    }
    & span.percent {
        color:rgb(80,82,84);
        font-size: 16px;
        font-weight: 100;
    }
`;

export const LeftHalfClipper = styled.div`
    border-radius: 50%; 
    width: 7em;    
    height: 7em;    
    position: absolute;
    background-color: rgb(47,49,51)
`;

export const First50Bar = styled.div`
    position: absolute;    
    clip: rect(0, 7em, 7em, 3.5em);    
    background-color: rgb(94,219,224);    
    border-radius: 50%;    
    width: 7em;    
    height: 7em;
`;

export const ValueBar = styled.div`
    position: absolute;
    clip: rect(0, 3.5em, 7em, 0);
    width: 7em;
    height: 7em;
    border-radius: 50%;
    border: 0.65em solid rgb(94,219,224);
    box-sizing: border-box;
    transform: rotate(270deg);
`;

export const ToDoContainer = styled.div`
  width: 400px;
`;

export const ToDoItem = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  text-decoration: ${(props: { complete?: boolean }) =>
        props.complete ? "line-through" : "none"};
`;

export const JokeContainer = styled.div`
  padding: 30px;
  text-align: center;
`;

export const Header = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;
