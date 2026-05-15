import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Products", "Custom Bottles", "Home Delivery", "About", "Contact"];

const PRODUCTS = [
  {
    id: 1,
    name: "330ml",
    label: "Pocket Pure",
    desc: "Perfect for on-the-go hydration. Slim, elegant, and refreshing.",
    price: "Rs. 25",
    bulk: "Rs. 18/bottle (min 500)",
    color: "#e0f2fe",
    icon: "💧",
    height: 120,
  },
  {
    id: 2,
    name: "500ml",
    label: "Classic Pure",
    desc: "Our bestseller. Ideal for offices, schools, and daily use.",
    price: "Rs. 40",
    bulk: "Rs. 28/bottle (min 500)",
    color: "#bae6fd",
    icon: "🫙",
    height: 150,
  },
  {
    id: 3,
    name: "1.5L",
    label: "Family Pure",
    desc: "Designed for families and meal times. Large and convenient.",
    price: "Rs. 80",
    bulk: "Rs. 55/bottle (min 200)",
    color: "#7dd3fc",
    icon: "🧴",
    height: 185,
  },
  {
    id: 4,
    name: "19L Can",
    label: "Office Can",
    desc: "Monthly subscription cans for homes and offices. Pure and affordable.",
    price: "Rs. 250",
    bulk: "Rs. 200/can (subscription)",
    color: "#38bdf8",
    icon: "🪣",
    height: 200,
  },
];

const TESTIMONIALS = [
  {
    name: "Bilal Ahmed",
    role: "GM, Pearl Continental Hotel",
    text: "PUREVIA custom bottles elevated our guests' experience. The branding quality is exceptional and delivery is always on time.",
    avatar: "B",
  },
  {
    name: "Sana Mirza",
    role: "Event Manager, Avari Towers",
    text: "We ordered 5000 custom labeled bottles for our annual gala. PUREVIA delivered flawlessly. Highly recommended for events.",
    avatar: "S",
  },
  {
    name: "Dr. Tariq Hasan",
    role: "Admin Director, Aga Khan University",
    text: "Our university now uses PUREVIA for all departments. The 19L subscription service is reliable and cost-effective.",
    avatar: "T",
  },
  {
    name: "Kamran Shah",
    role: "Founder, Nexus Tech",
    text: "We branded PUREVIA bottles with our logo for our product launch. The result was stunning. Our guests were impressed.",
    avatar: "K",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Source Collection", desc: "Water sourced from deep natural aquifers 500m below ground.", icon: "🌊" },
  { num: "02", title: "Micro Filtration", desc: "8-stage micro-filtration removes impurities down to 0.001 microns.", icon: "🔬" },
  { num: "03", title: "UV Sterilization", desc: "UV rays eliminate 99.99% of all bacteria and viruses.", icon: "☀️" },
  { num: "04", title: "Mineral Balancing", desc: "Essential minerals added back for optimal taste and health.", icon: "⚗️" },
  { num: "05", title: "Quality Testing", desc: "Every batch tested against 200+ quality parameters.", icon: "✅" },
  { num: "06", title: "Sealed Pure", desc: "Tamper-proof sealed in ISO-certified clean rooms.", icon: "🏆" },
];

const FAQS = [
  { q: "What is the minimum order for custom branded bottles?", a: "Minimum order is 500 bottles for custom label printing. We offer competitive pricing for bulk corporate orders." },
  { q: "How long does custom label printing take?", a: "Standard turnaround is 7-10 business days. Rush orders (3-5 days) available for an additional fee." },
  { q: "Do you offer home delivery subscriptions?", a: "Yes! Our monthly subscription plans start from 4 cans/month with free delivery in Karachi." },
  { q: "Is PUREVIA water certified?", a: "Yes. PUREVIA holds PSQCA certification, ISO 9001:2015, and meets all WHO drinking water standards." },
  { q: "Can we get a sample before bulk ordering?", a: "Absolutely. We send free sample packs to corporate clients upon request." },
];

const COVERAGE_AREAS = ["Clifton", "DHA", "Gulshan", "PECHS", "Saddar", "Korangi", "Landhi", "Malir", "North Nazimabad", "Federal B Area", "Nazimabad", "Orangi"];

export default function PureviaWebsite() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", type: "Hotel", message: "", quantity: "" });
  const [deliveryForm, setDeliveryForm] = useState({ name: "", phone: "", address: "", area: "DHA", plan: "4 Cans/Month" });
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navIds = ["home", "products", "custom", "delivery", "about", "contact"];

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#f8fafc", color: "#0f172a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #e0f2fe; }
        ::-webkit-scrollbar-thumb { background: #0284c7; border-radius: 3px; }
        body { font-family: 'DM Sans', sans-serif; }

        .hero-bg {
          background: linear-gradient(135deg, #020617 0%, #0c1a3a 30%, #0284c7 70%, #0ea5e9 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%);
          top: -200px; right: -200px;
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%);
          bottom: -150px; left: -150px;
          border-radius: 50%;
          animation: pulse 6s ease-in-out infinite reverse;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes dropletFall {
          0% { transform: translateY(-20px) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px) scale(1); opacity: 0; }
        }
        .animate-fadeup { animation: fadeUp 0.8s ease forwards; }
        .animate-fadeup-delay { animation: fadeUp 0.8s ease 0.3s forwards; opacity: 0; }
        .animate-fadeup-delay2 { animation: fadeUp 0.8s ease 0.6s forwards; opacity: 0; }
        .float-bottle { animation: float 6s ease-in-out infinite; }

        .glass-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
        }
        .glass-card-light {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 20px;
        }
        .btn-primary {
          background: linear-gradient(135deg, #0284c7, #0ea5e9);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(2,132,199,0.4);
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(2,132,199,0.5);
          background: linear-gradient(135deg, #0369a1, #0284c7);
        }
        .btn-outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.5);
          padding: 12px 30px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
          transform: translateY(-2px);
        }
        .product-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid #e0f2fe;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(2,132,199,0.2);
          border-color: #0284c7;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 50px;
          transition: all 0.3s;
          letter-spacing: 0.5px;
        }
        .nav-link:hover { background: rgba(2,132,199,0.1); color: #0284c7; }
        .nav-link.active { background: #0284c7; color: white; }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0c1a3a;
          line-height: 1.2;
        }
        .section-sub {
          font-family: 'DM Sans', sans-serif;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
          max-width: 600px;
        }
        .badge {
          background: linear-gradient(135deg, #e0f2fe, #bae6fd);
          color: #0284c7;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 18px;
          border-radius: 50px;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 16px;
        }
        .input-field {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #e0f2fe;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #0f172a;
          background: #f8fafc;
          transition: all 0.3s;
          outline: none;
        }
        .input-field:focus { border-color: #0284c7; background: white; box-shadow: 0 0 0 4px rgba(2,132,199,0.1); }
        .floating-whatsapp {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          transition: all 0.3s;
          animation: float 3s ease-in-out infinite;
          text-decoration: none;
        }
        .floating-whatsapp:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(37,211,102,0.5); }
        .process-card {
          background: white;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid #e0f2fe;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .process-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0284c7, #38bdf8);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .process-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(2,132,199,0.15); }
        .process-card:hover::before { transform: scaleX(1); }
        .testimonial-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid #e0f2fe;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        .testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(2,132,199,0.15); }
        .faq-item {
          background: white;
          border-radius: 16px;
          border: 1px solid #e0f2fe;
          overflow: hidden;
          transition: all 0.3s;
          margin-bottom: 12px;
        }
        .faq-item:hover { border-color: #0284c7; }
        .bottle-svg {
          filter: drop-shadow(0 20px 40px rgba(2,132,199,0.4));
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .products-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .coverage-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .hero-cta { justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .coverage-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        padding: "12px 0",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.4s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <div style={{
              width: 40, height: 40,
              background: "linear-gradient(135deg, #0284c7, #38bdf8)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>💧</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 22, color: scrolled ? "#0c1a3a" : "white", letterSpacing: 1 }}>PUREVIA</div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: scrolled ? "#0284c7" : "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>Pure Water</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map((link, i) => (
              <span
                key={link}
                className={`nav-link ${activeNav === link ? "active" : ""}`}
                style={{ color: activeNav === link ? "white" : scrolled ? "#0f172a" : "rgba(255,255,255,0.85)" }}
                onClick={() => { setActiveNav(link); scrollTo(navIds[i]); }}
              >{link}</span>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="tel:+923153066801" className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>
              📞 Order Now
            </a>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8 }}
              id="hamburger"
            >
              {[0,1,2].map(i => (
                <div key={i} style={{ width: 24, height: 2, background: scrolled ? "#0f172a" : "white", borderRadius: 2 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "white", boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            padding: "20px 24px",
            animation: "fadeUp 0.3s ease"
          }}>
            {NAV_LINKS.map((link, i) => (
              <div
                key={link}
                onClick={() => { setActiveNav(link); scrollTo(navIds[i]); }}
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid #f0f9ff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: "#0f172a",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >{link}</div>
            ))}
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="home" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
        {/* Floating water particles */}
        {[...Array(8)].map((_: any, i) => (
          <div key={i} style={{
            position: "absolute",
            width: 8 + (i * 3), height: 8 + (i * 3),
            borderRadius: "50%",
            background: `rgba(56,189,248,${0.1 + i * 0.05})`,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `dropletFall ${3 + i}s ease-in-out ${i * 0.5}s infinite`,
          }} />
        ))}

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Hero Text */}
            <div className="animate-fadeup" style={{ zIndex: 2 }}>
              <div style={{
                display: "inline-block",
                background: "rgba(56,189,248,0.15)",
                border: "1px solid rgba(56,189,248,0.3)",
                color: "#7dd3fc",
                padding: "8px 20px",
                borderRadius: 50,
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                fontWeight: 600,
              }}>Pakistan's Premium Water Brand</div>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: 24,
              }}>
                Pure Water.<br />
                <span style={{
                  background: "linear-gradient(135deg, #38bdf8, #7dd3fc, #bae6fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Purer Life.</span>
              </h1>

              <p className="animate-fadeup-delay" style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 18,
                lineHeight: 1.7,
                marginBottom: 40,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}>
                From deep natural aquifers to your door — PUREVIA delivers 8-stage purified water for homes, offices, hotels, and corporate events across Pakistan.
              </p>

              <div className="hero-cta animate-fadeup-delay2" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("products")} style={{ fontSize: 16, padding: "16px 36px" }}>
                  Explore Products
                </button>
                <button className="btn-outline" onClick={() => scrollTo("custom")}>
                  Custom Branding →
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
                {[
                  { num: "50K+", label: "Happy Customers" },
                  { num: "200+", label: "Corporate Clients" },
                  { num: "8", label: "Purification Stages" },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: "#38bdf8" }}>{stat.num}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              {/* Glow ring */}
              <div style={{
                position: "absolute",
                width: 400, height: 400,
                background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)",
                borderRadius: "50%",
              }} />

              {/* Bottle visual */}
              <div className="float-bottle" style={{ position: "relative", zIndex: 2 }}>
                <svg width="260" height="480" viewBox="0 0 260 480" className="bottle-svg">
                  {/* Bottle body */}
                  <defs>
                    <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                      <stop offset="50%" stopColor="rgba(186,230,253,0.6)" />
                      <stop offset="100%" stopColor="rgba(2,132,199,0.3)" />
                    </linearGradient>
                    <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Cap */}
                  <rect x="95" y="30" width="70" height="18" rx="6" fill="url(#capGrad)" filter="url(#glow)" />
                  <rect x="90" y="42" width="80" height="25" rx="8" fill="url(#capGrad)" />

                  {/* Neck */}
                  <path d="M105,65 L85,95 L175,95 L155,65 Z" fill="url(#bottleGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

                  {/* Body */}
                  <rect x="70" y="95" width="120" height="300" rx="16" fill="url(#bottleGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

                  {/* Water fill */}
                  <rect x="72" y="170" width="116" height="223" rx="14" fill="rgba(14,165,233,0.35)" />

                  {/* Label bg */}
                  <rect x="72" y="175" width="116" height="100" fill="url(#labelGrad)" />

                  {/* Label text */}
                  <text x="130" y="213" textAnchor="middle" fill="white" fontSize="18" fontFamily="serif" fontWeight="bold">PUREVIA</text>
                  <text x="130" y="232" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="sans-serif" letterSpacing="3">PURE WATER</text>
                  <text x="130" y="255" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="sans-serif">500ml</text>

                  {/* Shine */}
                  <rect x="82" y="100" width="18" height="280" rx="9" fill="rgba(255,255,255,0.15)" />
                  <rect x="105" y="100" width="8" height="280" rx="4" fill="rgba(255,255,255,0.08)" />

                  {/* Bottom */}
                  <ellipse cx="130" cy="395" rx="60" ry="10" fill="rgba(2,132,199,0.2)" />
                  <rect x="70" y="385" width="120" height="15" rx="8" fill="url(#bottleGrad)" />
                </svg>
              </div>

              {/* Floating badges */}
              {[
                { label: "8-Stage Purified", x: -80, y: 80, icon: "✨" },
                { label: "ISO Certified", x: 80, y: 160, icon: "🏆" },
                { label: "Home Delivery", x: -90, y: 280, icon: "🚚" },
              ].map(badge => (
                <div key={badge.label} className="glass-card" style={{
                  position: "absolute",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  left: `calc(50% + ${badge.x}px)`,
                  top: badge.y,
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  color: "white",
                  fontWeight: 500,
                  zIndex: 3,
                }}>
                  <span>{badge.icon}</span> {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section style={{ padding: "100px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Why PUREVIA</div>
            <h2 className="section-title">Trusted by Pakistan's<br />Leading Institutions</h2>
            <p className="section-sub" style={{ margin: "16px auto 0" }}>
              From 5-star hotels to corporate campuses, PUREVIA is the choice of those who demand excellence in hydration.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { icon: "🌊", title: "Natural Source", desc: "Sourced from protected deep aquifers, untouched by pollution and contamination.", color: "#e0f2fe" },
              { icon: "🔬", title: "8-Stage Filtration", desc: "Advanced multi-stage filtration including RO, UV, and nano-filtration technology.", color: "#f0f9ff" },
              { icon: "🏆", title: "PSQCA Certified", desc: "Full compliance with Pakistan Standards and ISO 9001:2015 quality management.", color: "#ecfdf5" },
              { icon: "🚚", title: "Same Day Delivery", desc: "Fast, reliable home and office delivery across all major areas of Karachi.", color: "#fff7ed" },
              { icon: "🎨", title: "Custom Branding", desc: "Premium custom-labeled bottles for hotels, events, and corporate gifting.", color: "#fdf4ff" },
              { icon: "💰", title: "Best Value", desc: "Competitive pricing with subscription plans that save up to 40% vs retail.", color: "#f0fdf4" },
            ].map(item => (
              <div key={item.title} className="glass-card-light" style={{ padding: "32px 28px", transition: "all 0.3s", border: "1px solid #e0f2fe" }}
                onMouseEnter={(e: any) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(2,132,199,0.12)"; }}
                onMouseLeave={(e: any) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0c1a3a", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Our Products</div>
            <h2 className="section-title">Premium Hydration<br />For Every Need</h2>
            <p className="section-sub" style={{ margin: "16px auto 0" }}>
              Four carefully crafted sizes — from compact pocket bottles to large office cans.
            </p>
          </div>

          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {PRODUCTS.map(product => (
              <div key={product.id} className="product-card">
                {/* Product visual area */}
                <div style={{
                  background: `linear-gradient(180deg, ${product.color} 0%, white 100%)`,
                  padding: "40px 20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: 220,
                  justifyContent: "flex-end",
                }}>
                  <div style={{ fontSize: product.height / 4, marginBottom: 8 }}>{product.icon}</div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#0284c7",
                  }}>{product.name}</div>
                </div>

                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0c1a3a", marginBottom: 8 }}>{product.label}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{product.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#0284c7" }}>{product.price}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#94a3b8" }}>Retail Price</div>
                    </div>
                  </div>
                  <div style={{
                    background: "#f0f9ff",
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 16,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#0369a1",
                    fontWeight: 500,
                  }}>
                    🏢 Bulk: {product.bulk}
                  </div>
                  <button
                    className="btn-primary"
                    style={{ width: "100%", textAlign: "center" }}
                    onClick={() => scrollTo("contact")}
                  >Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PURIFICATION PROCESS ==================== */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Our Process</div>
            <h2 className="section-title">From Nature to Your Table</h2>
            <p className="section-sub" style={{ margin: "16px auto 0" }}>
              Every drop of PUREVIA water goes through a rigorous 8-stage purification process before reaching you.
            </p>
          </div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROCESS_STEPS.map(step => (
              <div key={step.num} className="process-card">
                <div style={{
                  width: 60, height: 60,
                  background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
                  borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, margin: "0 auto 16px",
                }}>{step.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: "#e0f2fe", position: "absolute", top: 16, right: 20 }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0c1a3a", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOM BOTTLES ==================== */}
      <section id="custom" style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #020617 0%, #0c1a3a 50%, #0284c7 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-block",
                background: "rgba(56,189,248,0.15)",
                border: "1px solid rgba(56,189,248,0.3)",
                color: "#7dd3fc",
                padding: "8px 20px",
                borderRadius: 50,
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                fontWeight: 600,
              }}>Custom Branding</div>

              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 24 }}>
                Your Brand.<br />
                <span style={{ background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Our Purity.
                </span>
              </h2>

              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                Create a lasting impression with premium custom-labeled PUREVIA water bottles. Perfect for hotels, universities, marriage halls, corporate events, seminars, and product launches.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  { icon: "🏨", text: "Hotels & Resorts — Guest room branding" },
                  { icon: "🎓", text: "Universities — Campus water supply" },
                  { icon: "💒", text: "Marriage Halls — Event customization" },
                  { icon: "🏢", text: "Corporate Offices — Logo branding" },
                  { icon: "🎤", text: "Seminars & Conferences — Event bottles" },
                ].map(item => (
                  <div key={item.text} className="glass-card" style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: 15 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }} onClick={() => scrollTo("contact")}>
                Request Custom Quote
              </button>
            </div>

            {/* Custom bottle inquiry form */}
            <div className="glass-card" style={{ padding: "40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", marginBottom: 24 }}>
                Custom Label Inquiry
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "name", label: "Your Name", type: "text", placeholder: "Ahmed Ali" },
                  { key: "company", label: "Company / Organization", type: "text", placeholder: "Pearl Continental Hotel" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+92 300 1234567" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "ahmed@company.com" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 6 }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="input-field"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                      value={formData[field.key]}
                      onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 6 }}>Client Type</label>
                  <select className="input-field" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                    value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                    {["Hotel", "University", "Marriage Hall", "Office", "Seminar", "Event", "Other"].map(t => <option key={t} style={{ background: "#0c1a3a" }}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 6 }}>Quantity Required</label>
                  <input type="text" placeholder="e.g. 5000 bottles" className="input-field"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                    value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} />
                </div>
                <button className="btn-primary" style={{ fontSize: 16, marginTop: 8 }}
                  onClick={() => window.open(`https://wa.me/923153066801?text=Hi! I need custom branded bottles for ${formData.company}. Quantity: ${formData.quantity}. Type: ${formData.type}`, '_blank')}>
                  📱 Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOME DELIVERY ==================== */}
      <section id="delivery" style={{ padding: "100px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Home Delivery</div>
            <h2 className="section-title">19L Water Can<br />Delivery Service</h2>
            <p className="section-sub" style={{ margin: "16px auto 0" }}>
              Subscribe to our monthly delivery plans and never run out of pure water again.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* Plans */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { name: "Starter", cans: 4, price: "Rs. 800", saving: "Save 20%", popular: false },
                  { name: "Family", cans: 8, price: "Rs. 1,500", saving: "Save 25%", popular: true },
                  { name: "Office", cans: 16, price: "Rs. 2,800", saving: "Save 30%", popular: false },
                  { name: "Corporate", cans: "30+", price: "Custom", saving: "Best Rate", popular: false },
                ].map(plan => (
                  <div key={plan.name} style={{
                    background: plan.popular ? "linear-gradient(135deg, #0284c7, #0ea5e9)" : "white",
                    borderRadius: 20,
                    padding: "24px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: plan.popular ? "none" : "1px solid #e0f2fe",
                    boxShadow: plan.popular ? "0 8px 30px rgba(2,132,199,0.3)" : "0 2px 10px rgba(0,0,0,0.04)",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {plan.popular && (
                      <div style={{
                        position: "absolute", top: 14, right: -20,
                        background: "#fbbf24",
                        color: "#0c1a3a",
                        padding: "4px 40px",
                        fontSize: 11,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        transform: "rotate(30deg)",
                        letterSpacing: 1,
                      }}>POPULAR</div>
                    )}
                    <div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: plan.popular ? "white" : "#0c1a3a", marginBottom: 4 }}>
                        {plan.name} Plan
                      </h4>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: plan.popular ? "rgba(255,255,255,0.8)" : "#64748b", fontSize: 14 }}>
                        {plan.cans} cans/month • Free Delivery
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: plan.popular ? "white" : "#0284c7" }}>{plan.price}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: plan.popular ? "rgba(255,255,255,0.7)" : "#22c55e", fontWeight: 600 }}>{plan.saving}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage */}
              <div style={{ marginTop: 40 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0c1a3a", marginBottom: 16 }}>
                  🗺️ Delivery Coverage Areas
                </h3>
                <div className="coverage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  {COVERAGE_AREAS.map(area => (
                    <div key={area} style={{
                      background: "#e0f2fe",
                      borderRadius: 8,
                      padding: "8px 12px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "#0369a1",
                      fontWeight: 500,
                      textAlign: "center",
                    }}>{area}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Form */}
            <div style={{
              background: "white",
              borderRadius: 24,
              padding: "40px",
              border: "1px solid #e0f2fe",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#0c1a3a", marginBottom: 24 }}>
                Subscribe to Delivery
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Full Name</label>
                  <input type="text" placeholder="Your name" className="input-field" value={deliveryForm.name} onChange={e => setDeliveryForm({ ...deliveryForm, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Phone Number</label>
                  <input type="tel" placeholder="+92 300 1234567" className="input-field" value={deliveryForm.phone} onChange={e => setDeliveryForm({ ...deliveryForm, phone: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Delivery Address</label>
                  <input type="text" placeholder="House/Flat number, Street, Area" className="input-field" value={deliveryForm.address} onChange={e => setDeliveryForm({ ...deliveryForm, address: e.target.value })} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Area</label>
                    <select className="input-field" value={deliveryForm.area} onChange={e => setDeliveryForm({ ...deliveryForm, area: e.target.value })}>
                      {COVERAGE_AREAS.map(a => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Plan</label>
                    <select className="input-field" value={deliveryForm.plan} onChange={e => setDeliveryForm({ ...deliveryForm, plan: e.target.value })}>
                      {["4 Cans/Month", "8 Cans/Month", "16 Cans/Month", "30+ Cans/Month"].map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
                <button className="btn-primary" style={{ fontSize: 16 }}
                  onClick={() => window.open(`https://wa.me/923153066801?text=Hi! I want to subscribe to ${deliveryForm.plan} delivery. Name: ${deliveryForm.name}. Area: ${deliveryForm.area}. Address: ${deliveryForm.address}`, '_blank')}>
                  🚚 Subscribe Now — Free Delivery
                </button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
                  ✅ Free delivery on all subscription plans • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Testimonials</div>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
          </div>

          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card">
                <div style={{ fontSize: 40, color: "#0284c7", marginBottom: 16, lineHeight: 1 }}>"</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#334155", fontSize: 16, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 48, height: 48,
                    background: "linear-gradient(135deg, #0284c7, #38bdf8)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: 20, color: "white",
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#0c1a3a", fontSize: 16 }}>{t.name}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#0284c7", fontSize: 13 }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#fbbf24", fontSize: 18 }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT US ==================== */}
      <section id="about" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="badge">About PUREVIA</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Pakistan's Premium<br />Water Brand Since 2018
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                PUREVIA was founded with a singular vision: to provide the cleanest, most refreshing water to every Pakistani household, office, and corporate institution at an affordable price.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Starting from Karachi, we now serve over 50,000 customers and 200+ corporate clients, with a state-of-the-art production facility that processes millions of liters monthly through our 8-stage purification system.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
                {[
                  { num: "50K+", label: "Customers", icon: "👥" },
                  { num: "200+", label: "Corporate Clients", icon: "🏢" },
                  { num: "5M+", label: "Liters Delivered", icon: "💧" },
                  { num: "6+", label: "Years of Trust", icon: "🏆" },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                    borderRadius: 16,
                    padding: "20px",
                    textAlign: "center",
                    border: "1px solid #bae6fd",
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#0284c7" }}>{stat.num}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                {["PSQCA", "ISO 9001", "WHO", "HACCP"].map(cert => (
                  <div key={cert} style={{
                    background: "#0c1a3a",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: 10,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}>{cert}</div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)",
                borderRadius: 30,
                padding: "60px 40px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -60, right: -60,
                  width: 200, height: 200,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                }} />
                <div style={{ fontSize: 80, marginBottom: 20 }}>🏭</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "white", marginBottom: 16 }}>
                  Our Production Facility
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                  ISO-certified 20,000 sq ft facility in Karachi with fully automated 8-stage purification and 24/7 quality monitoring.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
                  {[
                    { num: "20K", label: "Sq Ft" },
                    { num: "24/7", label: "Monitoring" },
                    { num: "200+", label: "Tests/Batch" },
                  ].map(s => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "white" }}>{s.num}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div className="badge">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          {FAQS.map((faq: any, i) => (
            <div key={i} className="faq-item">
              <div
                style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#0c1a3a", fontSize: 15 }}>{faq.q}</h4>
                <div style={{ fontSize: 20, color: "#0284c7", transition: "transform 0.3s", transform: activeFaq === i ? "rotate(45deg)" : "none", marginLeft: 16, flexShrink: 0 }}>+</div>
              </div>
              {activeFaq === i && (
                <div style={{ padding: "0 24px 20px", fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: 15, lineHeight: 1.7, animation: "fadeUp 0.3s ease" }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #020617, #0c1a3a, #0284c7)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(14,165,233,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>
            Ready to Order Bulk?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 18, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
            Get exclusive pricing for corporate orders, events, and subscription deliveries.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}
              onClick={() => window.open("https://wa.me/923153066801?text=Hi! I want to place a bulk order for PUREVIA water.", "_blank")}>
              📱 WhatsApp Us Now
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>Get a Quote →</button>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge">Contact Us</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-sub" style={{ margin: "16px auto 0" }}>
              Reach out for bulk orders, custom branding inquiries, delivery subscriptions, or any questions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60 }}>
            {/* Contact info */}
            <div>
              {[
                { icon: "📞", title: "Phone", value: "0315-3066801", sub: "Mon-Sat, 9am-7pm" },
                { icon: "📱", title: "WhatsApp", value: "0315-3066801", sub: "Quick response within 5 min" },
                { icon: "📧", title: "Email", value: "ah1845773@gmail.com", sub: "We reply within 24 hours" },
                { icon: "📍", title: "Address", value: "Khuda Ki Basti, Kotri", sub: "Hyderabad, Sindh, Pakistan" },
              ].map(c => (
                <div key={c.title} style={{ display: "flex", gap: 16, padding: "24px 0", borderBottom: "1px solid #f0f9ff" }}>
                  <div style={{
                    width: 52, height: 52, background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
                    borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#94a3b8", marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#0c1a3a", fontSize: 17 }}>{c.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div style={{ background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", borderRadius: 24, padding: "40px", border: "1px solid #bae6fd" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0c1a3a", marginBottom: 24 }}>
                Send Us a Message
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Full Name</label>
                    <input type="text" placeholder="Ahmed Ali" className="input-field" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Phone</label>
                    <input type="tel" placeholder="+92 300 1234567" className="input-field" />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Email</label>
                  <input type="email" placeholder="ahmed@email.com" className="input-field" />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Inquiry Type</label>
                  <select className="input-field">
                    {["Bulk Order", "Custom Branding", "Home Delivery", "Corporate Partnership", "General Inquiry"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea className="input-field" rows={4} placeholder="Tell us about your requirements..." style={{ resize: "vertical" }} />
                </div>
                <button className="btn-primary" style={{ fontSize: 16 }}>
                  Send Message ✉️
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{
        background: "#020617",
        padding: "60px 24px 30px",
        color: "rgba(255,255,255,0.7)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #0284c7, #38bdf8)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💧</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 22, color: "white" }}>PUREVIA</div>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, maxWidth: 280 }}>
                Pakistan's premium bottled water brand. Delivering pure, refreshing water to homes, offices, and corporate events since 2018.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                {["Facebook", "Instagram", "LinkedIn"].map(s => (
                  <div key={s} style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}>{s}</div>
                ))}
              </div>
            </div>

            {[
              { title: "Products", links: ["330ml Bottle", "500ml Bottle", "1.5L Bottle", "19L Water Can", "Custom Bottles"] },
              { title: "Services", links: ["Home Delivery", "Office Delivery", "Custom Branding", "Bulk Orders", "Event Supply"] },
              { title: "Company", links: ["About Us", "Our Process", "Quality Standards", "Contact Us", "Careers"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 16, fontWeight: 700, marginBottom: 20 }}>{col.title}</h4>
                {col.links.map(link => (
                  <div key={link} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                    onMouseEnter={(e: any) => e.target.style.color = "#38bdf8"}
                    onMouseLeave={(e: any) => e.target.style.color = "rgba(255,255,255,0.7)"}
                  >{link}</div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
              © 2024 PUREVIA Water. All rights reserved. PSQCA Certified | ISO 9001:2015
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
              Made with 💧 in Hyderabad, Pakistan
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923153066801?text=Hi! I'm interested in PUREVIA water products."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Responsive hamburger fix */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          #hamburger { display: flex !important; }
        }
        @media (max-width: 768px) {
          #custom > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #delivery > div > div:last-child { grid-template-columns: 1fr !important; }
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
