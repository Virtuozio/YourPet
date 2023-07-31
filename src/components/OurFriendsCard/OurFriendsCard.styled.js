import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
  background-color: white;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  box-sizing: border-box;

  width: 280px;
  min-height: 316px;
  padding: 40px 12px;


  p {
    font-family: Manrope;
    font-weight: 500;
    font-size: 12px;
    color: rgba(17, 17, 17, 1);
  }

  a{
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }

  `

export const Company = styled.a`
  position: relative;
  font-family: Manrope;
  font-size: 16px;
  color: rgba(84, 173, 255, 1);
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 5px;
    left: 25%;
    bottom: -8px;
    border-radius: 8px;
    background-color: rgba(84, 173, 255, 1);
    transform-origin: left center;
    transform: scaleX(0); /* Приховуємо підкреслення */
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1); /* Відображуємо підкреслення при наведенні */
  }
`;





export const ContentBox = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    
  `

export const Logo = styled.img`
margin: 0 12px;
  `