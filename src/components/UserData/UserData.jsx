import Logout from 'components/Logout/Logout';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { UserCardContainer, EditBtn } from './UserData.styled';
import { useAuth } from 'hooks';
import { useEffect } from 'react';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    setIsFormDisabled(true);
  }, [user]);

  return (
    <>
      {user && (
        <UserCardContainer>
          {isFormDisabled ? (
            <EditBtn onClick={() => setIsFormDisabled(false)}>
              <BiEditAlt />
            </EditBtn>
          ) : (
            <EditBtn onClick={() => setIsFormDisabled(true)}>
              <LiaTimesSolid />
            </EditBtn>
          )}
          <UserForm disabled={isFormDisabled} />

          {isFormDisabled && <Logout />}
        </UserCardContainer>
      )}
    </>
  );
};

export default UserData;
