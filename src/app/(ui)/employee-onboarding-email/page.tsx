import EmployeeOnboardingEmail from '../../components/employeeOnboardingEmail';

const EmployeeOnboardingEmailPage = () => {
  const onboardingSections = [
    {
      title: 'Here are your onboarding Details:',
      items: [
        { label: 'Start Date', value: '19th of October, 2025' },
        { label: 'Job Title', value: 'UI/UX Designer' },
        { label: 'Department', value: 'Design' },
        { label: 'Manager', value: 'B.O Hoggins' },
      ],
    },
    {
      title: 'Your Company Login Credentials:',
      items: [
        {
          label: 'Portal',
          value: 'http://localhost:3000/verify-email',
          isLink: true,
        },
        { label: 'Username', value: 'cyphaar500@gmail.com' },
        { label: 'Temporary Password', value: '123456' },
      ],
    },
  ];

  return (
    <EmployeeOnboardingEmail
      userFullname="Okafor Victor"
      managerName="Walter Ifeakanwa"
      sections={onboardingSections}
    />
  );
};

export default EmployeeOnboardingEmailPage;
