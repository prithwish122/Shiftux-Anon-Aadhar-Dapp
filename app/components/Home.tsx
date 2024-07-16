import MetaMask from './Metamask';
import React, { useEffect } from 'react';
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import "../components/Home.css"
import Image from 'next/image';
import dp from "../../public/shiftuxLogoColor.png"


type HomeProps = {
  setUseTestAadhaar: (state: boolean) => void;
  useTestAadhaar: boolean;
  switchAadhaar: () => void;
};

const Home: React.FC<HomeProps> = ({ setUseTestAadhaar, useTestAadhaar, switchAadhaar }) => {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.status);
    }
  }, [anonAadhaar]);

  return (





    <div className="lol min-h-screen bg-slate-950 px-4 py-8">
       {/* <MetaMaskButton /> */}
       <div className='px-8'>
      <Image className='fixed' src={dp} height={50} width={50} alt='image' />

       </div>
    
       <div className="text-blue-300 relative top-[50px] flex flex-col items-center gap-2 bg-transparent rounded-2xl max-w-screen-sm mx-auto h-[10rem] md:h-[6rem] px-4 py-2 border-4 border-blue-500">
       <MetaMask/>
       </div>



      <div className="relative top-[100px] flex flex-col items-center gap-8 bg-transparent rounded-2xl max-w-screen-sm mx-auto h-[20rem] md:h-[15rem] p-8 border-4 border-blue-500">
        <h1 className="font-bold text-2xl">Complete your KYC</h1>
        <p>Prove your Identity anonymously using your Aadhaar card.</p>

        <LogInWithAnonAadhaar nullifierSeed={1234} />

        
      </div>

    

      <div className="relative top-[120px] flex flex-col items-center gap-2 bg-transparent rounded-2xl max-w-screen-sm mx-auto h-[5rem] md:h-[9rem] p-8 border-4 border-blue-500">
      
      {useTestAadhaar ? (
          <p>
            You&apos;re using the <strong> test </strong> Aadhaar mode
          </p>
        ) : (
          <p>
            You&apos;re using the <strong> real </strong> Aadhaar mode
          </p>
        )}
        <button
          onClick={switchAadhaar}
          type="button"
          className="py-3 px-6 rounded-full bg-blend-multiply text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
        >
          Switch for {useTestAadhaar ? "real" : "test"}
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl max-w-screen-sm mx-auto p-8">
        {anonAadhaar.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <p>Got your Aadhaar Identity Proof</p>
            <>Welcome anon!</>
            {latestProof && typeof latestProof === 'object' && (
              <AnonAadhaarProof
                code={JSON.stringify(latestProof, null, 2)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;