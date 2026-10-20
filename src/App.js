import config from './config';
import Vapi from "@vapi-ai/web";
import { useState } from "react";

const vapi = new Vapi(config.vapiPublicKey);

export default function App() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const startCall = async () => {
    setLoading(true);
    await vapi.start(config.assistantId);
    setLoading(false);
    setActive(true);
  };

  const stopCall = () => {
    vapi.stop();
    setActive(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Top Border */}
      <div style={{ height: "5px", background: "linear-gradient(to right, #F26522, #2B6CB0)" }} />

      {/* Header */}
      <header style={{ padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 700, fontSize: "28px" }}>AI Voice Receptionist</span>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", textAlign: "center", background: "#fafafa" }}>

        <div style={{ background: "white", borderRadius: "16px", padding: "50px 60px", maxWidth: "650px", width: "100%", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>

          {/* Badge */}
          <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: "20px", border: "1px solid #F26522", color: "#F26522", fontSize: "12px", letterSpacing: "1px", marginBottom: "24px" }}>
            ● LIVE AI AGENT DEMO
          </div>

          <h1 style={{ fontSize: "38px", fontWeight: "bold", margin: "0 0 8px 0" }}>
            <span style={{ color: "#F26522" }}>Demo Restaurant</span>{" "}
          </h1>

          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.7", margin: "16px 0 32px 0" }}>
            Experience our AI voice receptionist — built to handle real customer conversations, book appointments, and respond instantly. This demo has been prepared exclusively for you.
          </p>

          {/* Features */}
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "36px", flexWrap: "wrap" }}>
            {["✅ 24/7 Available", "✅ Real-time AI", "✅ Custom-built"].map((f) => (
              <span key={f} style={{ fontSize: "14px", color: "#444" }}>{f}</span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={active ? stopCall : startCall}
            disabled={loading}
            style={{
              padding: "16px 50px",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              backgroundColor: active ? "#2B6CB0" : "#F26522",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(242,101,34,0.3)"
            }}
          >
            {loading ? "⏳ Connecting..." : active ? "⏹ END CALL" : "🎙 LAUNCH DEMO →"}
          </button>

          {active && (
            <p style={{ marginTop: "16px", color: "#2B6CB0", fontSize: "14px" }}>
              🔴 Call is live — speak now!
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "16px", fontSize: "12px", color: "#aaa", borderTop: "1px solid #eee" }}>
        Demo powered by an AI voice assistant
      </footer>

      {/* Bottom Border */}
      <div style={{ height: "5px", background: "linear-gradient(to right, #2B6CB0, #F26522)" }} />

    </div>
  );
}
