import PayrollReminder from '../../components/upcomingPayrollReminder'

const PayrollReminderPage = () => {

  const employeesData = [
    {
      title: "Upcoming Payroll Details:",
      name: "Okafor Victor",
      id: "ID000001",
      dueDate: "09/09/2024",
      cycle: "31/01/2025 - 31/02/2025",
    },
    {
      title: "Employee 2:",
      name: "Jane Doe",
      id: "ID000002",
      dueDate: "09/10/2024",
      cycle: "01/03/2025 - 31/03/2025",
    },
  ]

  return (
    <PayrollReminder
      adminName="Walter Ifeakanwa"
      employees={employeesData}
    />
  )
};

export default PayrollReminderPage;