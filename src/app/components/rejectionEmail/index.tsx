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

interface CancellationEmailProps {
  userFirstname: string;
  managerName: string;
}

const CancellationEmail = ({
  userFirstname,
  managerName,
}: CancellationEmailProps) => (
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
            Your leave request has been Declined!
          </Text>
          <Text style={styles.title}>Hello {userFirstname},</Text>
          <Section style={{ marginBottom: '40px' }}>
            <Text style={styles.paragraph}>
              We regret to inform you that your leave request 
              from 9th of October to 10th of Septemeber has not been approved due to
              <span> [Reason, eg, workload, business needs].</span>
            </Text>
            <Text style={styles.paragraph}>
              If possible, kindly consider rescheduling your leave or discuss alternative dates
              with your manager. 
            </Text>
            <Text style={styles.paragraph}>
              We appreciate your understanding and dedication to the team. 
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

export default CancellationEmail;