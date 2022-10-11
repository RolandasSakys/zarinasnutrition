import React, { useState, useEffect } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="footer">
      <section className="footer-section">
        <a href="https://www.facebook.com/zarisha.denysyuk">
          <img src="./icons/facebook.png" alt="Facebook" />
        </a>

        <a href="https://instagram.com/zarina_sakys?utm_medium=copy_link">
          <img src="./icons/instagram.png" alt="Instagram" />
        </a>

        <a href="https://wa.me/+34645116182">
          <img src="./icons/whatsapp.png" alt="WhatsApp" />
        </a>

        <a href="viber://chat/?number=%2B34645116182">
          <img src="./icons/viber.png" alt="Viber" />
        </a>

        <a href="https://telegram.me/zaranutrition">
          <img src="./icons/telegrama.png" alt="Telegram" />
        </a>
      </section>
      <span className="copyright">&copy; Rolandas Sakys - {date}</span>
    </footer>
  );
};

export default Footer;
