import styled from 'styled-components';

export const FormPetForOptions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  margin-bottom: 91px;

  @media screen and (min-width: 768px) {
    margin-bottom: 137px;
  }
`;

export const PetForOption = styled.li``;

export const InputOption = styled.input`
  display: none;
`;

export const OptionInner = styled.label.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})`
  display: inline-block;
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? '#54ADFF' : '#cce4fb')};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ active }) => (active ? '#FEF9F9' : '#54adff')};

  border-radius: 40px;
  cursor: pointer;

  :checked {
    color: #fef9f9;
    background-color: #cce4fb;
  }
`;
