import { sendForm } from "@emailjs/browser";
import React, { useRef } from "react";
import { BiSolidEnvelope } from "react-icons/bi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      toast("Please enter a valid email address.");
    } else if (message.trim().length === 0) {
      toast("Please enter a message.");
    } else {
      sendForm(
        import.meta.env.VITE_EMAIL_SERV_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_ID
      ).then(
        (result) => {
          toast(
            "Thank you for messaging me. I will reach out to you as soon as possible."
          );
        },
        (error) => {
          toast("Failed to send message, please try again.");
        }
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100svh",
      }}
    >
      <h2 style={{ textAlign: "center", width: "100%" }}>
        Feel free to contact me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
          flexDirection: "column",
        }}
      >
        <input type="email" placeholder="Your email" name="from_email" />
        <textarea
          placeholder="Your message"
          style={{ margin: "20px 0" }}
          cols={33}
          rows={6}
          name="message"
        />
        <input type="submit" placeholder="Your email" />
      </form>
      <div
        style={{
          display: "flex",
          marginTop: 30,
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <a href="https://github.com/mato-m" target="_blank">
          <SiGithub size={48} color="#fff" />
        </a>
        <a href="https://linkedin.com/in/mato-m" target="_blank">
          <SiLinkedin size={48} color="#fff" />
        </a>
        <a href="mailto:martinovic.mato99@gmail.com">
          <BiSolidEnvelope size={48} color="#fff" />
        </a>
      </div>
      <ToastContainer
        closeOnClick
        toastStyle={{ background: "#1d2671", color: "#fff" }}
        progressStyle={{ backgroundColor: "#fff" }}
        position="bottom-center"
        theme="dark"
      />
    </div>
  );
};

export default Contact;
