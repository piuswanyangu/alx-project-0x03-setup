// pages/index.tsx

import React from 'react';
import Header from '@/components/layouts/Header'; // Ensure this path is correct

const IndexPage: React.FC = () => {
  return (
    <div>
      {/* 1. Add the Header Component here */}
      <Header /> 
      
      {/* 2. Your main page content follows */}
      <main style={{ padding: '20px' }}>
        <h1>This is the Main Index Page (/)</h1>
        <p>You can use the navigation links above to go to /home and /about.</p>
        
        {/* You can also put the content that was originally in index.tsx here */}
      </main>
    </div>
  );
};

export default IndexPage;