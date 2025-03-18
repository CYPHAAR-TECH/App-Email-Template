import OrganizationWelcomeEmail from '../../components/organizationWelcomeEmail'

const OrganizationWelcomeEmailPage = () => {
  return (
    <OrganizationWelcomeEmail
      userFirstname="Cyphaar"
      verificationLink="https://example.com/verify"
      token='123456'
    />
  )
};

export default OrganizationWelcomeEmailPage;