import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Main from './dashboard/Main';
import './HomePage.css'; // Make sure this is the correct path to your CSS file

function HomePage() {
  return (
    <div className="homepage">
      {/* Container-1 */}
      <Sidebar/>
      {/* Container-2 to make the header and main flex direction column */}
        <Main />
    </div>
  );
}

export default HomePage;
