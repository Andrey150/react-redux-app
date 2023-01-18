import React from 'react';
import {useNavigate} from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      Страница не найдена
      <button onClick={() => navigate('/')}>вернуться на главную страницу</button>
    </div>
  );
};

export default Error;