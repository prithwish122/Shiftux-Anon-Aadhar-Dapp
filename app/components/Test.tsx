import { useState } from 'react';
import Home from './Home'; // Adjust the path according to your project structure

// Define the props type for the Home component
interface HomeProps {
  setUseTestAadhaar: React.Dispatch<React.SetStateAction<boolean>>;
  useTestAadhaar: boolean;
  switchAadhaar: () => void;
}

const Test: React.FC = () => {
  const [useTestAadhaar, setUseTestAadhaar] = useState<boolean>(false);

  const switchAadhaar = () => {
    setUseTestAadhaar((prev) => !prev);
  };

  return <Home setUseTestAadhaar={setUseTestAadhaar} useTestAadhaar={useTestAadhaar} switchAadhaar={switchAadhaar} />;
};

export default Test;
