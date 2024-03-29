import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 40px;
  margin-top: 20px;
  width: 80%;

  background: rgba(110, 110, 110, 0.25);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  backdrop-filter: blur(10px);
  padding: 30px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 400px;
`;

export const MovieInfo = styled.div`
  padding-top: 20px;
`;

export const MovieName = styled.h2`
  font-size: 30px;
  font-weight: 700;

  color: #e4c3ad;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  margin: 0;
  text-shadow: 0 0 15px #eb9486;
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  margin: 0;
  color: #e4c3ad;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #e4c3ad;
  border-bottom: 1px solid #e4c3ad;
  width: 100%;
`;

export const MoreInfoHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;

  color: #e4c3ad;

  text-shadow: 0 0 15px #eb9486;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;

  border: 1px solid #e4c3ad;
  border-radius: 4px;
  padding: 5px;
  background-color: #e4c3ad;
  background-color: transparent;
  transition: all 0.2s ease-in-out, background-color 0.2s ease-in-out;
  text-decoration: none;
  color: #e4c3ad;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eb9486;
    color: #ffffff;
    box-shadow: 0 0 15px #eb9486;
    border: 1px solid #eb9486;
  }
`;