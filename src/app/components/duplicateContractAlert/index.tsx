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
  color: '#5A63E6',
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
  backgroundColor: '#5A63E6',
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

interface DuplicateContractAlertProps {
  userFullname: string;
  adminName: string;
  employeeId: string;
  biometricType: string;
}

const DuplicateContractAlertEmail = ({
  userFullname,
  adminName,
  employeeId,
  biometricType,
}: DuplicateContractAlertProps) => (
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
            Duplicate Contract Signing Alert for OKAFOR VICTOR
          </Text>
          <Text style={title}>Hello {adminName},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={paragraph}>
              We have detected an attempt to sign multiple employment contracts using
              the same biometric ID (BVN/NIN) in our system
            </Text>
            <Text style={paragraph}>
              As per our policy, each biometric Id should be uniquely associated with a single contract.
            </Text>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={details}>
                Employee Details:
              </Text>
              <Text style={details}>
                <span style={{ fontWeight: '600' }}>Full Name: </span>
                {userFullname}
              </Text>
              <Text style={details}>
                <span style={{ fontWeight: '600' }}>Employee ID: </span>
                {employeeId}
              </Text>
              <Text style={details}>
                <span style={{ fontWeight: '600' }}>Biometric Type: </span>
                {biometricType}
              </Text>
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={details}>
                This could indicate:
              </Text>
              <Text style={buttonText}>
                A potential case of fraudulent activity.
              </Text>
              <Text style={buttonText}>
                An employee attempting to sign more than one contract.
              </Text>
              <Text style={buttonText}>
                An existing record in our database that needs verification.
              </Text>
            </Section>
            <Text style={paragraph}>
              Please review this case at your earliest convenience and take the necessary action.
              Let us know if you require any further details.
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

export default DuplicateContractAlertEmail;
