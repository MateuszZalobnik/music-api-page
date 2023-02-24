import React, { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { AuthHeader } from './AuthHeader';
import { NotAuthHeader } from './NotAuthHeader';

export const Header: React.FC = () => {
  const userData = useAppSelector((state) => state.user.data);

  console.log(userData);
  return (
    <>
      {userData ? (
        <AuthHeader username={userData.username} />
      ) : (
        <NotAuthHeader />
      )}
    </>
  );
};
