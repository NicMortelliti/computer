import styled from "styled-components";

export const FaceCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

export const Pixel = styled.div`
  width: 20px;
  aspect-ratio: 1/1;
  background-color: ${({ on }) => (on ? "orange" : "transparent")};
  margin: 1px;
`;
