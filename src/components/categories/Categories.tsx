import Category from 'components/category/Category';
import React from 'react';
import S from './styles';

type CategoryType = '전체' | '대형' | '중형' | '소형';

const categories: CategoryType[] = ['전체', '대형', '중형', '소형'];

const Categories = () => {
  return (
    <S.Nav>
      <ul>
        {categories.map((category) => (
          <Category key={category} text={category} category={category} />
        ))}
      </ul>
    </S.Nav>
  );
};

export default Categories;