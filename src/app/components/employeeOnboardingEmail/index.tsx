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

interface EmployeeOnboardingEmailProps {
  userFullname: string;
  username: string;
  managerName: string;
  verificationLink: string;
  password: string;
  date: string;
  jobTitle: string;
  department: string;
  manager: string;
}

const EmployeeOnboardingEmail = ({
  userFullname,
  username,
  managerName,
  verificationLink,
  password,
  date,
  jobTitle,
  department,
  manager,
}: EmployeeOnboardingEmailProps) => (
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
            Welcome to <span style={{color: '#5A63E6'}}>Ekaruz</span>! Your Onboarding Starts Here
          </Text>
          <Text style={styles.title}>Hello {userFullname},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={styles.paragraph}>
              Welcome to Ekaruz. We're excited to have you on board and look forward to working together.
            </Text>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={styles.details}>
                Here are your onboarding Details:
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Start Date: </span> 
                {date}
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Job Title: </span> 
                {jobTitle}
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Department: </span>
                {department}
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Manager: </span>
                {manager}
              </Text>
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={styles.details}>
                Your Company Login Credentials:
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Portal: </span> 
                <Link style={styles.link}>{verificationLink}</Link>
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Username: </span> 
                {username}
              </Text>
              <Text style={styles.details}>
                <span style={{fontWeight: '600'}}>Temporary Password: </span>
                {password}
              </Text>
            </Section>
            <Text style={styles.paragraph}>
              Please log in and change your password upon first login
            </Text>
            <Text style={styles.paragraph}>
              Welcome aboard!
            </Text>
            <Text style={styles.title}>
              Best regards,
              <br />
              {managerName}
              <br />
              Admin
              <br /><br />
              Ekaruz
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

export default EmployeeOnboardingEmail;