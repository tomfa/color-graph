import styled from "styled-components";
import { size } from "../utils/styles";

export const Header = styled.h1`
  font-size: 1.4rem;
  margin: 1rem 0;
  color: ${props => props.color || "#000000"};

  @media ${size.large} {
    font-size: 2rem;
  }
`;

export const SubHeader = styled.h2`
  display: block;
  font-size: 1rem;
  opacity: 0.7;
`;

export const Description = styled.p``;

export const SourceLink = styled.a`
  font-size: 0.8rem;
`;

export const Footer = styled.small`
  display: none;
  position: fixed;
  bottom: 20px;

  @media ${size.large} {
    display: block;
  }
`;

export const FixedSection = styled.section`
  position: fixed;
  padding: 1.5rem;
  box-sizing: border-box;
  width: 100vw;
  height: 60vh;
  top: 40vh;
`;
