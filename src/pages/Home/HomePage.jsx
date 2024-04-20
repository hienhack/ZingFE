import { useState } from 'react';

import { ChartHome } from '../../components/ChartHome';

function HomePage() {

  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is discovery page</h1>
      <ChartHome/>
    </div>
  );
}

export default HomePage;