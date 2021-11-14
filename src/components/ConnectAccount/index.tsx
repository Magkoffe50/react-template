import React from 'react';
import ChooseProvider from './ChooseProvider';
import Connecting from './Connecting';

type Step = 'CHOOSE' | 'CONNECTING';

type Props = {
  onProviderClick: (provider: string) => void
};
const ConnectAccount = ({
  onProviderClick,
}: Props) => {
  const [step, setStep] = React.useState<Step>('CHOOSE');
  const onChooseProvider = React.useCallback((provider) => {
    setStep('CONNECTING');
    onProviderClick(provider);
  }, []);
  return (
    <>
      {step === 'CHOOSE' && <ChooseProvider onProviderClick={onChooseProvider} />}
      {step === 'CONNECTING' && <Connecting />}
    </>
  );
};

export default ConnectAccount;
