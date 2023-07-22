import styled from 'styled-components';

const UserPhoto = styled.div`
  display: block;
  margin: auto;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: orange;
  margin-bottom: 15px;
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
display:flex;
align-items; center;
justify-content: space-between;
margin-bottom: 20px;
label {
    font-size: 14px;
font-weight: 600;
line-height: normal;
letter-spacing: 0.56px;
}
input{
    display: flex;
width: 190px;
padding: 4px 12px;
align-items: center;
gap: 191px;
border-radius: 20px;
border: 1px solid  #54ADFF;
font-size: 12px;
font-weight: 400;
line-height: normal;
letter-spacing: 0.48px;
 transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
   border-color: #FFC107;
   outline: transparent;
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
`;
export { UserPhoto, FileInput, FileInputLabel, InputContainer, SubmitButton };
