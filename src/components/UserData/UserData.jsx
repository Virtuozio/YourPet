import Logout from 'components/Logout/Logout';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { UserCardContainer, EditBtn, Title } from './UserData.styled';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmClose = confirm => {
    setShowConfirm(prevState => !prevState);
    setIsFormDisabled(confirm);
  };

  return (
    <>
      <section>
        <Title>My information:</Title>
        <UserCardContainer>
          {isFormDisabled ? (
            <EditBtn onClick={() => setIsFormDisabled(false)}>
              <BiEditAlt />
            </EditBtn>
          ) : (
            <EditBtn onClick={() => setShowConfirm(true)}>
              <LiaTimesSolid />
            </EditBtn>
          )}
          <UserForm
            disabled={isFormDisabled}
            showConfirm={showConfirm}
            confirmClose={confirmClose}
          />

          {isFormDisabled && <Logout />}
        </UserCardContainer>
      </section>
    </>
  );
};

export default UserData;
