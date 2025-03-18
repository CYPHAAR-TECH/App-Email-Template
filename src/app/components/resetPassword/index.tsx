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

interface ResetPasswordProps {
  userFirstname: string;
  verificationLink: string;
  token: string;
}

const ResetPassword = ({
  userFirstname,
  verificationLink,
  token,
}: ResetPasswordProps) => (
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
            Forgot your password? Here's you reset code!
          </Text>
          <Text style={styles.title}>Hello {userFirstname},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={styles.paragraph}>
              We received a request to reset your password for your Dedukt Pro account
            </Text>
            <Text style={styles.paragraph}>
              {`Use this code to reset your password: `} <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{token}</span>
            </Text>
            <Text style={styles.paragraph}>
              This code will expire in an hour. If you didn't request this,
              you can ignore this email or update your password to secure your account.
            </Text>
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

export default ResetPassword;




















// const main = {
//   backgroundColor: '#ffffff',
//   color: '#333',
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: '18px',
// };

// const container = {
//   margin: '0 auto',
//   padding: '20px 0 48px',
// };

// const typography = {
//   fontSize: '30px',
//   fontWeight: '600',
//   lineHeight: '48px',
// };

// const title = {
//   fontSize: '18px',
//   fontWeight: '500',
//   paddingTop: '20px',
// };

// const paragraph = {
//   fontSize: '18px',
//   lineHeight: '28px',
//   fontWeight: '36px',
// };

// const headerSection = {
//   lineHeight: '',
// };

// const logoText = {
//   fontSize: '48px',
//   fontWeight: 'bold',
// };

// const imageSection = {
//   display: 'flex',
//   padding: '40px 0',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// const link = {
//   color: '#5A63E6',
//   fontWeight: 'bold',
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: '16px',
//   textDecoration: 'underline',
// };

// const linkSection = {
//   display: 'flex',
//   justifyContent: 'center',
// };

// const footerText = {
//   display: 'flex',
//   color: '#ffffff',
//   backgroundColor: '#5A63E6',
//   fontSize: '12px',
//   lineHeight: '16px',
//   padding: '40px 0',
//   alignItems: 'center',
//   justifyContent: 'center',
// };