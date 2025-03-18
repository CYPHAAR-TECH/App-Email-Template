import AdminInvitation from '../../components/adminInvitation'

const AdminInvitationPage = () => {
  return (
    <AdminInvitation
      userFullname="Okafor Victor"
      username="cyphaar500@gmail.com"
      managerName="Walter Ifeakanwa"
      verificationLink="http://localhost:3000/verify-email"
      password='123456'
    />
  )
};

export default AdminInvitationPage;