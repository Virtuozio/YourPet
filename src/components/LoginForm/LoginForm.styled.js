import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';


export const Div = styled.div`
  margin: 0 auto;
  margin-top: 44px;
  background-color: white;
  border: 1px solid rgba(84, 173, 255, 1);
  box-shadow: rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  margin-bottom: 100px;
  box-sizing: border-box;

  width: 280px;
  padding: 40px 12px;

  h1 {
    font-family: Manrope;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }
  p {
    font-family: Manrope;
    font-weight: 400;
    font-size: 12px;
    color: rgba(136, 136, 136, 1);
    text-align: center;
  }

  a {
    font-size: 12px;
    color: rgba(84, 173, 255, 1);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 60px 75px;
    margin-top: 80px;


    h1 {
      font-family: Manrope;
      font-size: 36px;
      font-weight: 500;
      text-align: center;
      margin: 0;
      margin-bottom: 40px;
    }

    p {
      font-family: Manrope;
      font-weight: 400;
      font-size: 12px;
      color: rgba(136, 136, 136, 1);
      text-align: center;
    }

    a {
      font-size: 12px;
      color: rgba(84, 173, 255, 1);
    }
  }

  @media screen and (min-width: 1280px) {
    width: 608px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 24px;
  height: 24px; */
  right: 12px;
  top: 12px;
  color: rgba(84, 173, 255, 1);
  cursor: pointer;
  transition: 250ms;
`;

export const IconValid = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 17px;
  top: 15px;
  color: ${({ valid }) => (valid ? 'rgba(42, 187, 155, 1)' : 'rgba(255, 99, 71, 1)')};
  cursor: pointer;
  transition: 250ms;

`;

export const InputLine = styled(Field)`
  font-family: Manrope;
  position: relative;
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ error }) => (error ? 'rgba(255, 99, 71, 1)' : 'rgba(84, 173, 255, 1)')};   
  border-radius: 40px;
  box-sizing: border-box;

  :focus {
    outline: 0;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Btn = styled.button`
  width: 100%;
  height: auto;
  padding: 10px 28px;

  border: none;
  border-radius: 40px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: rgba(84, 173, 255, 1);
  translate: 0 0;

  ::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover {
    background: linear-gradient(
      245deg,
      rgba(65, 158, 241, 1) 30%,
      rgba(155, 208, 255, 1)
    );
    background-position: 100% 50%;
  }

  margin-top: 56px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 28px;
    margin-bottom: 20px;
  }
`;

export const Error = styled(ErrorMessage)`
color: red;
font-size: 12px;
font-weight: 400;
margin-top: 4px;
margin-left: 16px;

`