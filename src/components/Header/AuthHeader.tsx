'use client';
import OffIcon from '@/assets/icons/OffIcon';
import { ApiLogout } from '@/AuthApi/logout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slice/userSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
import { PageTitle } from './PageTitle';

export const AuthHeader: React.FC<{ username: string }> = ({ username }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const success = await ApiLogout();
      if (success) {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        dispatch(logout());
        router.refresh();
      }
    } catch (err) {}
  };
  return (
    <Wrapper>
      <TopBar>
        <div>{username}</div>
        <div>
          <StyledOffIcon widthAndHeight={20} onClick={handleLogout} />
        </div>
      </TopBar>
      <PageTitle />
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey};
  padding-top: 80px;
  line-height: 50px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 5px 20px;
`;

const StyledOffIcon = styled(OffIcon)`
  cursor: pointer;
`;
