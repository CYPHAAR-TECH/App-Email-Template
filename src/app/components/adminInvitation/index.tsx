import {
  Html,
  Head,
  Body,
  Img,
  Container,
  Text,
  Link,
  Section,
} from "@react-email/components";
import * as React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type AdminInvitationDetails = {
  label: string;
  value: string;
  isLink?: boolean;
};

interface AdminInvitationProps {
  userFullname: string;
  managerName: string;
  invitationDetails: AdminInvitationDetails[];
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

const AdminInvitation = ({
  userFullname,
  managerName,
  invitationDetails,
}: AdminInvitationProps) => (
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
              width={'100%'}
            />
          </Section>
          <Text style={typography}>
            You have been invited as an Admin to <span style={typography.span}>Ekaruz</span>!
          </Text>
          <Text style={title}>Hello {userFullname},</Text>
          <Section style={bodySection}>
            <Text style={paragraph}>
              You have been invited to join <span style={paragraph.span}>Ekaruz </span>
              as an Admin. With this role, you will have access to manage employee records, system
              settings, and other administrative functions.
            </Text>
            <Section style={detailsSection}>
              <Text style={details}>
                Your Admin Login Details:
              </Text>
              {invitationDetails.map(({ label, value, isLink }, idx) => (
                label.toLowerCase().includes("portal") ? (
                  <Text key={idx} style={details}>
                    <span style={details.span}>{label}: </span>
                    {isLink ? (
                      <Link style={link} href={value}>
                        {value}
                      </Link>
                    ) : (
                      value
                    )}
                  </Text>
                ) : (
                  <Text key={idx} style={details}>
                    <span style={details.span}>{label}: </span>
                    {value}
                  </Text>
                )
              ))}
            </Section>

            <Text style={paragraph}>
              Please log in and change your password upon first login
            </Text>
            <Text style={paragraph}>
              Welcome aboard!
            </Text>
            <Text style={title}>
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
  </Html>);


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
  marginBottom: '40px',
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
  marginLeft: '10px',
  fontSize: "18px",
  border: "none",
  outline: "none",
};

export default AdminInvitation;
