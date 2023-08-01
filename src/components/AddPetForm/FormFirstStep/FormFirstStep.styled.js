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
  background-color: ${({ active }) =>
    active ? 'var(--btn-bg-color)' : 'var(--labels-bg-color)'};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ active }) =>
    active ? 'var(--label-active-color)' : 'var(--btn-bg-color)'};

  border-radius: 40px;
  cursor: pointer;

  :checked {
    color: var(--label-active-color);
    background-color: var(--labels-bg-color);
  }
`;
