import DuplicateContractAlertEmail from '../../components/duplicateContractAlert';

const DuplicateContractAlertEmailPage = () => {
  const contractDetails = [
    { label: "Full Name", value: "Okafor Victor" },
    { label: "Employee ID", value: "ID000001" },
    { label: "Biometric Type", value: "Fingerprint" }, 
  ];

  return (
    <DuplicateContractAlertEmail
      adminName="Walter Ifeakanwa"
      contracts={contractDetails}
    />
  );
};

export default DuplicateContractAlertEmailPage;
