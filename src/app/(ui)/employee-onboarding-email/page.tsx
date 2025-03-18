import EmployeeOnboardingEmail from '../../components/employeeOnboardingEmail'

const EmployeeOnboardingEmailPage = () => {
  return (
    <EmployeeOnboardingEmail
      userFullname="Okafor Victor"
      username="cyphaar500@gmail.com"
      managerName="Walter Ifeakanwa"
      verificationLink="http://localhost:3000/verify-email"
      password="123456"
      date="19th of October, 2025"
      jobTitle="UI/UX Designer"
      department="Design"
      manager="B.O Hoggins"
    />
  )
};

export default EmployeeOnboardingEmailPage;