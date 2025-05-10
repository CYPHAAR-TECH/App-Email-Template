import AdminInvitation from '../../components/adminInvitation'

const AdminInvitationPage = () => {

  const invitationDetails = [
    { label: "Portal", value: "http://localhost:3000/verify-email", isLink: true },
    { label: "Username", value: "cyphaar500@gmail.com" },
    { label: "Temporary Password", value: "123456" },
  ];

  return (
    <AdminInvitation
      userFullname="Okafor Victor"
      managerName="Walter Ifeakanwa"
      invitationDetails={invitationDetails}
    />
  )
};

export default AdminInvitationPage;