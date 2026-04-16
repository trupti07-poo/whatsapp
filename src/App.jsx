import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, query } = form;

    if (!name || !email || !mobile || !query) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "919353231012"; // 👉 Replace with your number

    const message = `Hello, I have a query:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Query: ${query}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="query"
            placeholder="Your Query"
            rows="4"
            value={form.query}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.8s ease-in-out",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    transition: "0.3s",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    resize: "none",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#25D366",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};
