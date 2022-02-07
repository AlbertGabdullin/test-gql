import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      This is Main page. <Link to="/users/gaearon">Gaearon</Link> user profile
    </div>
  );
};

export default MainPage;
