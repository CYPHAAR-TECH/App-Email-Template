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

interface CancellationEmailProps {
  userFirstname: string;
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

const CancellationEmail = ({
  userFirstname,
}: CancellationEmailProps) => (
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
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/imgs/dedukt-logo.png"
              alt="dedukt-pro Logo"
              width={'100%'}
            />
          </Section>
          <Text style={typography}>
            Your leave request has been cancelled!
          </Text>
          <Text style={title}>Hello {userFirstname},</Text>
          <Section style={bodySection}>
            <Text style={paragraph}>
              This is to confirm that the leave request of <span>OLALEYE JOHN</span> with <span>ID: ID000001 </span>
              for 9th of October to 10th of Septemeber has been successfully canceled as per your request.
            </Text>
            <Text style={paragraph}>
              You may reapply for leave through the HR system whenever necessary. 
            </Text>
            <Text style={paragraph}>
              If this was done in error or you need further assistance, kindly reach out. 
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
              <Icon style={{ fontSize: "18px", border: "none", outline: "none" }} />
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

const paragraph = {
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: '36px',

  span: {
    color: "#041E42",
  },  
};

const headerSection = {
  lineHeight: '',
};

const bodySection = {
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
  marginLeft: '20px',
};

export default CancellationEmail;