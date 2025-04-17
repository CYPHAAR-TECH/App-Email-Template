import ProviderAccount from "../../components/providerAccount";

const ProviderAccountPage = () => {
  const providerSections = [
    {
      title: 'Your Login Credentials',
      items: [
        { label: 'Email', value: 'cyphaar500@gmail.com' },
        { label: 'Temporary Password', value: '123456' },
      ],
    },
  ];

  return (
    <ProviderAccount
      providerName="[Provider Name]"
      sections={providerSections}
    />
  );
};

export default ProviderAccountPage;
