import React, { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { AuthHeader } from './AuthHeader';
import { NotAuthHeader } from './NotAuthHeader';
import { getUserData } from '@/AuthApi/getUserData';

export const Header: React.FC = () => {
  getUserData();
  const userData = useAppSelector((state) => state.user.data);
  // console.log(userData);
  
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
