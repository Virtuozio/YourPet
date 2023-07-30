import Logout from 'components/Logout/Logout';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { UserCardContainer, EditBtn } from './UserData.styled';
import { useAuth } from 'hooks';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmClose = confirm => {
    setShowConfirm(prevState => !prevState);
    setIsFormDisabled(confirm);
  };

  const { user } = useAuth();

  return (
    <>
      {user && (
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
            user={user.name && user}
          />

          {isFormDisabled && <Logout />}
        </UserCardContainer>
      )}
    </>
  );
};

export default UserData;
