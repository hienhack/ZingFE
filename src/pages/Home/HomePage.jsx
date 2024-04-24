import { useState } from 'react';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';
import NewRelease from '../NewRelease/NewReleasePage';
function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is discovery page</h1>
      <NewRelease/>
    </div>
  );
}

export default HomePage;
