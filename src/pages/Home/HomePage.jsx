import { useState } from 'react';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';

function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white h-[1000px] asc">
      <h1>This is discovery page</h1>
    </div>
  );
}

export default HomePage;
