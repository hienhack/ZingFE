import { useState } from 'react';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';

function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is discovery page</h1>
    </div>
  );
}

export default HomePage;
