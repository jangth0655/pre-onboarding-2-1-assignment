import React from 'react';
import { useNavigate } from 'react-router';
import S from './styles';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomePage = () => {
    navigate('/');
  };
  return (
    <S.Section>
      <S.Title>Not Found</S.Title>
      <S.HomeButton onClick={onHomePage} type="button">
        Go Home
      </S.HomeButton>
    </S.Section>
  );
};

export default NotFound;
