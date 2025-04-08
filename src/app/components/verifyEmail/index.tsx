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

const main = {
  backgroundColor: '#ffffff',
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '18px',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const typography = {
  fontSize: '30px',
  fontWeight: '600',
  lineHeight: '48px',
};

const title = {
  fontSize: '18px',
  fontWeight: '500',
  paddingTop: '30px',
};

const details = {
  fontSize: '18px',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: '36px',
};

const buttonText = {
  display: 'block',
  fontSize: '16px',
  padding: '0 20px',
  margin: '10px 0',
};

const headerSection = {
  lineHeight: '',
};

const logoText = {
  fontSize: '40px',
  fontWeight: '800',
};

const imageSection = {
  display: 'flex',
  padding: '40px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const link = {
  color: '#041E42',
  fontWeight: 'bold',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const linkSection = {
  display: 'flex',
  justifyContent: 'center',
};

const footer = {
  display: 'flex',
  color: '#ffffff',
  backgroundColor: '#041E42',
  padding: '40px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const footerText = {
  fontSize: '10px',
  lineHeight: '16px',
};

const footerIcons = {
  color: '#ffffff',
  marginLeft: '20px',
};

interface VerifyEmailProps {
  userFirstname: string;
  token: string;
}

const VerifyEmail = ({
  userFirstname,
  token,
}: VerifyEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container>
        <div style={container}>
          <section style={headerSection}>
            <Text style={logoText}>LOGO</Text>
          </section>
          <Section style={imageSection}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/imgs/dedukt-logo.png"
              alt="dedukt-pro Logo"
              width={1012}
              height={349}
              priority
            />
          </Section>
          <Text style={typography}>
            Confirm your email to get started!
          </Text>
          <Text style={paragraph}>Hello {userFirstname},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={paragraph}>
              Thank you for signing up with Dedukt Pro! To complete your registration,
              pls verify your email by using the code below
            </Text>
            <Text style={paragraph}>
              {`Your one-time verification code is: `} <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{token}</span>
            </Text>
            <Text style={paragraph}>
              This code will expire in an hour. If you didn't request this,
              you can ignore this email or update your password to secure your account.
            </Text>
            <Text style={title}>
              Best regards,
              <br />
              Dedukt Pro
            </Text>
          </Section>
        </div>
      </Container>
      <Section>
        <Text style={linkSection}>
          <Link href="https://google.com" target="_blank" style={link}>
            Deduktpro@gmail.com
          </Link>{' '}
          |{' '}
          <Link href="https://google.com" target="_blank" style={link}>
            08100000000
          </Link>
        </Text>
        <Section style={footer}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={footerIcons}>
            <FaFacebook style={{ fontSize: "18px", border: "none", outline: "none" }} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={footerIcons}>
            <FaTwitter style={{ fontSize: "18px", border: "none", outline: "none" }} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={footerIcons}>
            <FaLinkedin style={{ fontSize: "18px", border: "none", outline: "none" }} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={footerIcons}>
            <FaInstagram style={{ fontSize: "18px", border: "none", outline: "none" }} />
          </Link>
          
          <Text style={footerText}>
            © 2023 Dedukt Pro. All rights reserved.
          </Text>
        </Section>
      </Section>
    </Body>
  </Html>
);

export default VerifyEmail;