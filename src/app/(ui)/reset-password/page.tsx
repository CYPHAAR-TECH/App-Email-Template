import ResetPassword from "../../components/resetPassword";

const Page = () => {
  return (
    <ResetPassword
      userFirstname="Cyphaar"
      verificationLink="https://example.com/verify"
      token='123456'
    />
  )
};

export default Page;