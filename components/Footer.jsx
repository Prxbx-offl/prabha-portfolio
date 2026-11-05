export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A1A",
        padding: "36px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 22,
          fontWeight: 800,
          color: "white",
          marginBottom: 8,
        }}
      >
        Prabha.
      </p>
      <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
        Developer · Chennai, India
      </p>
      <hr style={{ border: "none", borderTop: "1px solid #2d2d2d", marginBottom: 16 }} />
      <p style={{ fontSize: 12, color: "#444" }}>
        © {new Date().getFullYear()} Prabha. Built with Next.js &amp; love.
      </p>
    </footer>
  );
}
