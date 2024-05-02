import { useState } from 'react';

import { ChartHome } from '../../components/ChartHome';
import Slider from '../../components/Slider/Slider';

function HomePage() {

  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is discovery page</h1>
      <Slider/>
      <ChartHome/>
    </div>
  );
}

export default HomePage;