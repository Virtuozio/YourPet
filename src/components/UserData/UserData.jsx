import Logout from 'components/Logout/Logout';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { UserCardContainer, EditBtn } from './UserData.styled';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/authOperations';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    setIsFormDisabled(true);
  }, [user]);

  return (
    <>
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
        <UserForm
          disabled={isFormDisabled}
          setIsFormDisabled={setIsFormDisabled}
        />

        {isFormDisabled && <Logout />}
      </UserCardContainer>
    </>
  );
};

export default UserData;
