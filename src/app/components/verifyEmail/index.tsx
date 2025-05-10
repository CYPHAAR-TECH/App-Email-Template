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

interface VerifyEmailProps {
  userFirstname: string;
  token: string;
}

const socialLinks = [
  {
    href: "https://facebook.com",
    src: "/assets/imgs/facebook.png",
    label: "Facebook",
    alt: "Facebook Icon",
  },
  {
    href: "https://twitter.com",
    src: "/assets/imgs/twitter.png",
    label: "Twitter",
    alt: "Twitter Icon",
  },
  {
    href: "https://linkedin.com",
    src: "/assets/imgs/linkedin.png",
    label: "LinkedIn",
    alt: "LinkedIn Icon",
  },
  {
    href: "https://instagram.com",
    src: "/assets/imgs/instagram.png",
    label: "Instagram",
    alt: "Instagram Icon",
  },
];

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
            <Img
              src="/assets/imgs/dedukt-logo.png"
              alt="dedukt-pro Logo"
              width={"100%"}
            />
          </Section>
          <Text style={typography}>
            Confirm your email to get started!
          </Text>
          <Text style={paragraph}>Hello {userFirstname},</Text>
          <Section style={bodySection}>
            <Text style={paragraph}>
              Thank you for signing up with Dedukt Pro! To complete your registration,
              pls verify your email by using the code below
            </Text>
            <Text style={paragraph}>
              {`Your one-time verification code is: `} <span style={paragraph.span}>{token}</span>
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
        <Section style={footerSection}>
          <div style={iconContainer}>
            {socialLinks.map(({ href, src, label, alt }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={footerIcons}
                aria-label={label}
              >
                <Img src={src} alt={alt} style={footerIcons} />
              </Link>
            ))}
          </div>

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

const iconContainer = {
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
};

const footerIcons = {
  display: 'inline-block',
  width: '16px',
  height: '16px',
  color: '#ffffff',
  border: "none",
  outline: "none",
};

const footerText = {
  fontSize: '10px',
  lineHeight: '16px',
};

export default VerifyEmail;