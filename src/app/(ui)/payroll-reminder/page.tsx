import PayrollReminder from '../../components/upcomingPayrollReminder'

const PayrollReminderPage = () => {
  return (
    <PayrollReminder
      adminName="Walter Ifeakanwa"
      employeeName="Okafor Victor"
      employeeId="ID000001"
      date="09/09/2024"
      payrollCycle="31/01/2025 - 31/02/2025"
    />
  )
};

export default PayrollReminderPage;