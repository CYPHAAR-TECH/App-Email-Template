import {
  Html,
  Head,
  Body,
  Container,
  Img,
  Text,
  Link,
  Section,
} from "@react-email/components";
import * as React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type contractDetails = {
  label: string;
  value: string;
  isLink?: boolean;
};

interface DuplicateContractAlertProps {
  adminName: string;
  contracts: contractDetails[];
}

const socialLinks = [
  {
    href: "https://facebook.com",
    Icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com",
    Icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com",
    Icon: FaInstagram,
    label: "Instagram",
  },
];

const DuplicateContractAlertEmail = ({
  contracts,
  adminName,
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
            <Img
              src="/assets/imgs/dedukt-logo.png"
              alt="dedukt-pro Logo"
              width={"100%"}
            />
          </Section>
          <Text style={typography}>
            Duplicate Contract Signing Alert for OKAFOR VICTOR
          </Text>
          <Text style={title}>Hello {adminName},</Text>
          <Section style={bodySection}>
            <Text style={paragraph}>
              We have detected an attempt to sign multiple employment contracts using
              the same biometric ID (BVN/NIN) in our system
            </Text>
            <Text style={paragraph}>
              As per our policy, each biometric Id should be uniquely associated with a single contract.
            </Text>
            <Section style={bodySection}>
              <Text style={details}>Employee Details:</Text>
              {contracts.map((contract, idx) => (
                <Text key={idx} style={details}>
                  <span style={details.span}>{contract.label}: </span>
                  {contract.isLink ? (
                    <Link style={link} href={contract.value}>
                      {contract.value}
                    </Link>
                  ) : (
                    contract.value
                  )}
                </Text>
              ))}
            </Section>
            <Section style={detailsSection}>
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
        <Section style={footerSection}>
          {socialLinks.map(({ href, Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={footerIcons}
              aria-label={label}
            >
              <Icon style={footerIcons} />
            </Link>
          ))}

          <Text style={footerText}>
            © 2023 Dedukt Pro. All rights reserved.
          </Text>
        </Section>
      </Section>
    </Body>
  </Html>
);


const baseFont = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const main = {
  backgroundColor: '#ffffff',
  color: '#333',
  fontSize: '18px',
  ...baseFont,
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const typography = {
  fontSize: '30px',
  fontWeight: '600',
  lineHeight: '48px',

  span: {
    color: "#041E42",
  },
};

const title = {
  fontSize: '18px',
  fontWeight: '500',
  paddingTop: '30px',
};

const details = {
  fontSize: '18px',

  span: {
    fontWeight: "600",
  },
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: '36px',

  span: {
    color: "#041E42",
  },
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

const bodySection = {
  marginBottom: '40px',
};

const detailsSection = {
  marginBottom: '110px',
};

const logoText = {
  fontSize: '40px',
  fontWeight: '800',
};

const imageSection = {
  width: '100%',
  display: 'flex',
  padding: '40px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const link = {
  color: '#041E42',
  fontWeight: 'bold',
  fontSize: '16px',
  textDecoration: 'underline',
  cursor: 'pointer',
  ...baseFont,
};

const linkSection = {
  display: 'flex',
  justifyContent: 'center',
};

const footerSection = {
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
  fontSize: "18px", 
  border: "none", 
  outline: "none",
};

export default DuplicateContractAlertEmail;
