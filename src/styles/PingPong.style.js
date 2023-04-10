import styled, { keyframes } from "styled-components";

const blueColor = "#4472BA";

const pingpong = keyframes`
  from {
    transform: translateX(-80px);
  }
  to {
    transform: translateX(80px);
  }
`;

export const SmallSquare = styled.div`
  border: none;
  background-color: white;
  height: 20px;
  aspect-ratio: 1 /1;
`;

export const PingPongCont = styled.div`
  display: flex;
  border: 2px solid white;
  background-color: ${blueColor};
  height: 50px;
  margin: 10px 0 5px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;

  & > div {
    animation: ${pingpong} 1s alternate ease-in-out infinite;
  }
`;
