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

interface WelcomeEmailProps {
  companyName: string;
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

const WelcomeEmail = ({
  companyName,
  token,
}: WelcomeEmailProps) => (
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
            Thank you for joining Dedukt Pro! Here's what's next!
          </Text>
          <Text style={title}>Hello {companyName},</Text>
          <Section style={bodySection}>
            <Text style={paragraph}>
              We're thrilled to have you onboard! Thank you for verifying your email.
            </Text>
            <Text style={paragraph}>
              {`Your one-time verification code is: `} <span style={paragraph.span}>{token}</span>
            </Text>
            <Text style={paragraph}>
              At Dedukt Pro, we're dedicated to <span>[brief company mission or vision]</span>.
              You now have full access to our platform where you can <span>[mention key features]</span>
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

export default WelcomeEmail;