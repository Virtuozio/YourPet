import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 63px;
    width: calc(100% - 40px);
  }
  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 22px;
  width: 264px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 355px;
  }
`;

const UserPhoto = styled.img`
  display: block;
  margin: auto;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;

const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
`;

const FileInputLabel = styled.label`
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    width: 24px;
    height: 24px;
    fill: #54adff;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    color: #ffc107;
    svg {
      fill: #ffc107;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.56px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 0.72px;
    }
  }
  input {
    display: flex;
    width: 190px;
    padding: 4px 12px;
    align-items: center;
    gap: 191px;
    border-radius: 20px;
    border: 1px solid #54adff;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      border-color: #ffc107;
      outline: transparent;
    }
    @media screen and (min-width: 768px) {
      width: 255px;
      height: 30px;
      font-size: 16px;
    }
  }
`;
const SubmitButton = styled.button`
  display: flex;
  width: 248px;
  padding: 6px 107px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;
  border-color: transparent;
  color: #fef9f9;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  cursor: pointer;
  margin: auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
  &:disabled {
    background: grey;
  }
`;

const Error = styled.p`
  position: absolute;
  top: -60%;
  left: 25%;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    top: -35%;
  }
  @media screen and (min-width: 1200px) {
    top: -40%;
  }
`;

export {
  FieldsContainer,
  UserPhoto,
  FileInput,
  FileInputLabel,
  InputContainer,
  SubmitButton,
  Error,
  StyledForm,
};
