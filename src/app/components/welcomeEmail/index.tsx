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

interface WelcomeEmailProps {
  companyName: string;
  token: string;
}

const WelcomeEmail = ({
  companyName,
  token,
}: WelcomeEmailProps) => (
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
            Thank you for joining Dedukt Pro! Here's what's next!
          </Text>
          <Text style={styles.title}>Hello {companyName},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={styles.paragraph}>
              We're thrilled to have you onboard! Thank you for verifying your email.
            </Text>
            <Text style={styles.paragraph}>
              {`Your one-time verification code is: `} <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{token}</span>
            </Text>
            <Text style={styles.paragraph}>
              At Dedukt Pro, we're dedicated to <span>[brief company mission or vision]</span>. You now have full access to our platform where you can <span>[mention key features]</span>
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

export default WelcomeEmail;