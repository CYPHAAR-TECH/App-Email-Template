import Image from "next/image";
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Section,
} from "@react-email/components";
import * as React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/emailStyles";

interface PayrollReminderProps {
  adminName: string;
  employeeName: string;
  employeeId: string;
  payrollCycle: string;
  date: string;
}

const PayrollReminder = ({
  adminName,
  employeeName,
  employeeId,
  payrollCycle,
  date,
}: PayrollReminderProps) => (
  <Html>
    <Head />
    <Body style={styles.main}>
      <Container>
        <div style={styles.container}>
          <section style={styles.headerSection}>
            <Text style={styles.logoText}>LOGO</Text>
          </section>
          <Section style={styles.imageSection}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/imgs/dedukt-logo.png"
              alt="dedukt-pro Logo"
              width={1012}
              height={349}
              priority
            />
          </Section>
          <Text style={styles.typography}>
            Upcoming Payroll Reminder - Action Required
          </Text>
          <Text style={styles.title}>Hello {adminName},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={styles.paragraph}>
              This is a friendly reminder of upcoming payroll cycles that require processing.
              Please review the details below to ensure timely payment.
            </Text>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={styles.details}>
                Upcoming Payroll Details:
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Employee: </span>
                {employeeName}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Employee ID: </span>
                {employeeId}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Due Date: </span>
                {date}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Payroll Cycle: </span>
                {payrollCycle}
              </Text>
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={styles.details}>
                Employee 2:
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Employee: </span>
                {employeeName}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Employee ID: </span>
                {employeeId}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Due Date: </span>
                {date}
              </Text>
              <Text style={styles.details}>
                <span style={{ fontWeight: '600' }}>Payroll Cycle: </span>
                {payrollCycle}
              </Text>
            </Section>
            <Text style={styles.title}>
              Best regards,
              <br />
              Dedukt Pro
            </Text>
          </Section>
        </div>
      </Container>
      <Section>
        <Text style={styles.linkSection}>
          <Link href="https://google.com" target="_blank" style={styles.link}>
            Deduktpro@gmail.com
          </Link>{' '}
          |{' '}
          <Link href="https://google.com" target="_blank" style={styles.link}>
            08100000000
          </Link>
        </Text>
        <Section style={styles.footer}>
          <FaFacebook style={{ fontSize: "18px", marginLeft: "20px", border: "none", outline: "none" }} />
          <FaTwitter style={{ fontSize: "18px", marginLeft: "20px", border: "none", outline: "none" }} />
          <FaLinkedin style={{ fontSize: "18px", marginLeft: "20px", border: "none", outline: "none" }} />
          <FaInstagram style={{ fontSize: "18px", marginLeft: "20px", border: "none", outline: "none" }} />
          <Text style={styles.footerText}>
            © 2023 Dedukt Pro. All rights reserved.
          </Text>
        </Section>
      </Section>
    </Body>
  </Html>
);

export default PayrollReminder;