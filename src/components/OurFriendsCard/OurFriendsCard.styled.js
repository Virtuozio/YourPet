import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
  background-color: white;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  margin-bottom: 100px;
  box-sizing: border-box;

  width: 280px;
  min-height: 239px;
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

  `

export const Company = styled.a`
    font-family: Manrope;
    font-size: 20px;
    color: rgba(84, 173, 255, 1);
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
  `

export const ContentBox = styled.div`
    display: flex;
    /* justify-content: center; */
  
  `

export const Logo = styled.img`
margin: 0 12px;
  `