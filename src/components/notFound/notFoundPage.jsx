import React from 'react';
import {Link} from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div>
      <Link to='/'>
        <p>page not found</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;