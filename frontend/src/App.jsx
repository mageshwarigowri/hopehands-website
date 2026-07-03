import { FaHeart, FaUsers, FaShieldAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { Mail, MapPin, Heart, Shield, Users, Phone, ShieldCheck, Globe, BookOpen, Activity, AlertTriangle } from 'lucide-react';

import homehero from './assets/homehero.jpeg';
import HomePage1 from './assets/HomePage1.png';
import HomePage2 from './assets/HomePage2.png';
import HomePage3 from './assets/HomePage3.png';
import HomePage4 from './assets/HomePage4.png';
import visionmission from './assets/visionmission.jpeg';
import ourstory from './assets/ourstory1.webp';
import sarah from './assets/sarah.avif';
import david from './assets/davidlee.jpg';
import emily from './assets/emily.jpeg';
import children from './assets/children.png';
import education from './assets/education.png';
import eco from './assets/eco.png';
import volunteer from './assets/volunteer.png';
import chennai from './assets/chennai.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation Helper
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'causes': return <CausesPage setCurrentPage={setCurrentPage} />;
      case 'donate': return <DonatePage />;
      case 'volunteer': return <VolunteerPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#333', margin: 0, backgroundColor: '#f9f9f9' }}>
      {/* Global Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 5%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', sticky: 'top' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Heart fill="#16a34a" size={24} /> HopeHands Foundation
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {['home', 'about', 'causes', 'volunteer', 'contact'].map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} style={{ background: 'none', border: 'none', cursor: 'pointer', textTransform: 'capitalize', fontWeight: currentPage === page ? 'bold' : 'normal', color: currentPage === page ? '#16a34a' : '#555' }}>
              {page}
            </button>
          ))}
          <button onClick={() => setCurrentPage('donate')} style={{ backgroundColor: '#16a34a', color: '#fff', border: 'none', padding: '0.5rem 1.2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Donate Now
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{ minHeight: '80vh' }}>
        {renderPage()}
      </main>

      {/* Global Footer */}
      <footer style={{ backgroundColor: '#1e293b', color: '#cbd5e1', padding: '2rem 5%', textAlign: 'center', marginTop: '3rem' }}>
        <p>© 2024 HopeHands Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ================= PAGE COMPONENTS ================= */

function HomePage({ setCurrentPage }) {
  // Testimonial Data from "Home page.pdf"
  const testimonials = [
    {
      name: "Sophia Carter",
      date: "2023-08-15",
      text: "HopeHands Foundation has truly made a difference in my life. Their support helped me get back on my feet during a difficult time.",
      likes: 12,
      comments: 2
    },
    {
      name: "Ethan Bennett",
      date: "2023-07-22",
      text: "Volunteering with HopeHands has been an incredibly rewarding experience. Seeing the impact we make is truly inspiring.",
      likes: 15,
      comments: 1
    },
    {
      name: "Olivia Hayes",
      date: "2023-06-10",
      text: "The dedication and compassion of HopeHands Foundation are unmatched. They are a beacon of hope for so many.",
      likes: 10,
      comments: 3
    }
  ];

  // Common styles for image placeholders
  const placeholderStyle = (height) => ({
    width: '100%',
    height: height,
    backgroundColor: '#cbd5e1',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#475569',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '1rem',
    border: '1px dashed #94a3b8'
  });

  return (
    <div style={{ backgroundColor: '#f8fafc', paddingBottom: '3rem' }}>
      
      {/* 1. Hero / Banner Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #115e59, #134e4a)', 
        color: '#fff', 
        padding: '5rem 5%', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Banner Image Placeholder Block */}
        {/* Banner Image */}
<div
  style={{
    maxWidth: "800px",
    margin: "0 auto 2rem auto",
    height: "220px",
    borderRadius: "8px",
    overflow: "hidden",
  }}
>
  <img
    src={homehero}
    alt="Home Hero"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain", // Shows complete image
      display: "block",
      borderRadius: "8px",
    }}
  />
</div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
          Together, We Can Change Lives
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', color: '#ccfbf1', lineHeight: '1.6' }}>
          Your kindness today can bring hope, health, and happiness to someone in need.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
  onClick={() => setCurrentPage("donate")}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#2563eb";
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 12px 24px rgba(29, 78, 216, 0.35)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#1d4ed8";
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
  }}
  style={{
    backgroundColor: "#1d4ed8",
    color: "#fff",
    padding: "0.8rem 2.2rem",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  }}
>
  Donate Now
</button>
          <button
  onClick={() => setCurrentPage("volunteer")}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#0f172a";
    e.target.style.color = "#fff";
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 12px 24px rgba(15,23,42,0.25)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#fff";
    e.target.style.color = "#111827";
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.05)";
  }}
  style={{
    backgroundColor: "#fff",
    color: "#111827",
    padding: "0.8rem 2.2rem",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
  }}
>
  Become a Volunteer
</button>
        </div>
      </div>

      {/* 2. Our Mission Statement Block */}
      <div style={{ padding: '3.5rem 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', margin: 0 }}>
          At HopeHands Foundation, our mission is to empower communities and transform lives through compassionate action and sustainable solutions. We are dedicated to providing essential resources, fostering education, and promoting well-being for those facing adversity. Together, we strive to build a brighter future, one hand at a time.
        </p>
      </div>

      {/* 3. Our Causes Grid Section */}
      <div style={{ padding: '2rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2.5rem', textAlign: 'center' }}>Our Causes</h2>
        
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
  }}
>
  {/* Card 1 */}
  <div
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow =
        "0 18px 35px rgba(0,0,0,0.18)";
      e.currentTarget.style.borderColor = "#2563eb";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 4px 8px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
    style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "1.25rem",
      border: "1px solid #e2e8f0",
      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
  >
    <div style={placeholderStyle("160px")}>
      <img
        src={HomePage1}
        alt="Education for Children"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>

    <h3 style={{ fontSize: "1.2rem", color: "#1e293b" }}>
      Education for Children
    </h3>

    <p
      style={{
        color: "#64748b",
        fontSize: "0.95rem",
        lineHeight: "1.6",
      }}
    >
      Providing quality education and resources to underprivileged children,
      ensuring they have the opportunity to succeed.
    </p>
  </div>

  {/* Card 2 */}
  <div
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow =
        "0 18px 35px rgba(0,0,0,0.18)";
      e.currentTarget.style.borderColor = "#2563eb";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 4px 8px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
    style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "1.25rem",
      border: "1px solid #e2e8f0",
      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
  >
    <div style={placeholderStyle("160px")}>
      <img
        src={HomePage2}
        alt="Medical Support"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>

    <h3 style={{ fontSize: "1.2rem", color: "#1e293b" }}>
      Medical Support
    </h3>

    <p
      style={{
        color: "#64748b",
        fontSize: "0.95rem",
        lineHeight: "1.6",
      }}
    >
      Offering medical assistance and healthcare support to those in need,
      ensuring access to essential medical services.
    </p>
  </div>

  {/* Card 3 */}
  <div
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow =
        "0 18px 35px rgba(0,0,0,0.18)";
      e.currentTarget.style.borderColor = "#2563eb";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 4px 8px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
    style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "1.25rem",
      border: "1px solid #e2e8f0",
      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
  >
    <div style={placeholderStyle("160px")}>
      <img
        src={HomePage3}
        alt="Food & Shelter"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>

    <h3 style={{ fontSize: "1.2rem", color: "#1e293b" }}>
      Food & Shelter
    </h3>

    <p
      style={{
        color: "#64748b",
        fontSize: "0.95rem",
        lineHeight: "1.6",
      }}
    >
      Providing food, shelter, and basic necessities to individuals and
      families facing hardship and homelessness.
    </p>
  </div>

  {/* Card 4 */}
  <div
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
      e.currentTarget.style.boxShadow =
        "0 18px 35px rgba(0,0,0,0.18)";
      e.currentTarget.style.borderColor = "#2563eb";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 4px 8px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
    style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "1.25rem",
      border: "1px solid #e2e8f0",
      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
      transition: "all 0.35s ease",
      cursor: "pointer",
    }}
  >
    <div style={placeholderStyle("160px")}>
      <img
        src={HomePage4}
        alt="Disaster Relief"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>

    <h3 style={{ fontSize: "1.2rem", color: "#1e293b" }}>
      Disaster Relief
    </h3>

    <p
      style={{
        color: "#64748b",
        fontSize: "0.95rem",
        lineHeight: "1.6",
      }}
    >
      Responding swiftly to natural disasters and providing immediate relief
      and long-term support to affected communities.
    </p>
  </div>
</div>

        {/* Central Intersecting Action Buttons */}
        <div
  style={{
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "3rem",
  }}
>
  <button
    className="hero-btn donate-btn"
    onClick={() => setCurrentPage("donate")}
  >
    Donate Now
  </button>

  <button
    className="hero-btn learn-btn"
    onClick={() => setCurrentPage("causes")}
  >
    Learn More
  </button>
</div>
      </div>

      {/* 4. Impact Section Metrics Block */}
      <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2rem', textAlign: 'center' }}>Impact Section</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2rem', textAlign: 'left', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '#475569', color: '#64748b', fontWeight: '500', marginBottom: '0.25rem' }}>Lives Helped</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>10,000+</div>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2rem', textAlign: 'left', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '#475569', color: '#64748b', fontWeight: '500', marginBottom: '0.25rem' }}>Volunteers</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>500+</div>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2rem', textAlign: 'left', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '#475569', color: '#64748b', fontWeight: '500', marginBottom: '0.25rem' }}>Projects Completed</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>120+</div>
          </div>
        </div>
      </div>

      {/* 5. Stories / Testimonial Section */}
      <div style={{ padding: '2rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2.5rem', textAlign: 'center' }}>Stories / Testimonials</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative' }}>
              
              {/* Header profile row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyText: 'center', fontSize: '1.2rem' }}>
                  👤
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{t.date}</div>
                </div>
              </div>

              {/* Five Star Evaluation */}
              <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '0.75rem' }}>★★★★★</div>

              {/* Message Content */}
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.5rem 0', minHeight: '80px' }}>
                "{t.text}"
              </p>

              {/* Footer Engagement Controls */}
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', color: '#64748b', fontSize: '0.85rem' }}>
                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>👍 {t.likes}</span>
                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>💬 {t.comments}</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ padding: '3rem 5%', maxWidth: '900px', margin: '0 auto' }}>
      <section
  style={{
    maxWidth: "1200px",
    margin: "70px auto",
    padding: "0 20px",
  }}
>
  <h1
    style={{
      textAlign: "center",
      fontSize: "2.8rem",
      color: "#1e293b",
      marginBottom: "60px",
    }}
  >
    About Us
  </h1>

  {/* Our Story */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "50px",
      alignItems: "center",
      marginBottom: "90px",
    }}
  >
    <div>
      <h2
        style={{
          fontSize: "2rem",
          color: "#1d4ed8",
          marginBottom: "20px",
        }}
      >
        Our Story
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "1.08rem",
          lineHeight: "1.9",
          textAlign: "justify",
        }}
      >
        HopeHands Foundation was established in 2010 by Sarah Johnson
        and David Lee, two individuals driven by a shared vision of
        creating a world where every person has access to basic
        necessities and opportunities for a better life.

        <br />
        <br />

        Their journey began with a small community project addressing
        immediate needs such as food and shelter for underprivileged
        families. Over the years, their dedication, together with the
        unwavering support of volunteers, donors, and community
        partners, has transformed HopeHands into a leading nonprofit
        organization impacting thousands of lives across diverse
        communities.
      </p>
    </div>

    {/* Image */}

    <div
      style={{
        background: "#f8fafc",
        border: "2px dashed #cbd5e1",
        height: "360px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#64748b",
        fontSize: "1.1rem",
      }}
    >
      <img
  src={ourstory}
  alt="Our Story"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>
    </div>
  </div>

  {/* Vision & Mission */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: "50px",
      alignItems: "center",
    }}
  >
    {/* Image */}

    <div
      style={{
        background: "#f8fafc",
        border: "2px dashed #cbd5e1",
        height: "360px",
        borderRadius: "20px",
        overflow: "hidden",          // Prevent overflow
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#64748b",
        fontSize: "1.1rem",
      }}
    >
      <img
  src={visionmission}
  alt="Vision & Mission"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
    objectFit: "cover",        // Fill the container
    display: "block",          // Remove inline image spacing
  }}
/>
    </div>

    <div>
      <h2
        style={{
          fontSize: "2rem",
          color: "#1d4ed8",
          marginBottom: "20px",
        }}
      >
        Vision & Mission
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "1.08rem",
          lineHeight: "1.9",
          textAlign: "justify",
        }}
      >
        Our vision is to build a world where every individual has the
        opportunity to thrive, free from poverty and injustice. We
        strive to empower communities by ensuring access to essential
        resources and fostering sustainable development.

        <br />
        <br />

        Our mission is to mobilize resources, engage passionate
        volunteers, and collaborate with partners to deliver impactful
        programs that address the root causes of poverty and
        inequality. We remain committed to transparency,
        accountability, and the ethical use of every resource entrusted
        to us.
      </p>
    </div>
  </div>
</section>
      <h3>Our Values</h3>
      <div className="values-container">

        <div className="value-card">
          <div className="icon compassion">
            <FaHeart />
          </div>

          <h3>Compassion</h3>

          <div className="line red"></div>

          <p>
            We approach our work with empathy and understanding.
          </p>
        </div>

        <div className="value-card">
          <div className="icon collaboration">
            <FaUsers />
          </div>

          <h3>Collaboration</h3>

          <div className="line blue"></div>

          <p>
            We believe in the absolute power of collective action.
          </p>
        </div>

        <div className="value-card">
          <div className="icon integrity">
            <FaShieldAlt />
          </div>

          <h3>Integrity</h3>

          <div className="line green"></div>

          <p>
            We uphold the highest ethical standards of honesty.
          </p>
        </div>

<section
  style={{
    width: "100%",
maxWidth: "1600px",
    margin: "100px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "2.7rem",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "70px",
    }}
  >
    Our Team
  </h2>

 <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
    gap: "60px",
    justifyItems: "center",
    alignItems: "start",
  }}
>
    {/* Member 1 */}
    <div className="team-card">
      <div className="team-image">
        <img
          src={sarah}
          alt="Sarah Johnson"
          className="profile-img"
        />
      </div>

      <h3>Sarah Johnson</h3>

      <p>
        Co-Founder & <br />
        Executive Director
      </p>
    </div>

    {/* Member 2 */}
    <div className="team-card">
      <div className="team-image">
        <img
          src={david}
          alt="David Lee"
          className="profile-img"
        />
      </div>

      <h3>David Lee</h3>

      <p>
        Co-Founder & <br />
        Program Director
      </p>
    </div>

    {/* Member 3 */}
    <div className="team-card">
      <div className="team-image">
        <img
          src={emily}
          alt="Emily Carter"
          className="profile-img"
        />
      </div>

      <h3>Emily Carter</h3>

      <p>Volunteer Coordinator</p>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}



function CausesPage({ setCurrentPage }) {
  const causes = [
    { 
      title: "Healthcare for Children", 
      desc: "Bridge gaps by providing essential clinical operations, treatments, and intensive care surgeries.",
      image: children
    },
    { 
      title: "Education for All", 
      desc: "Funding dynamic educational resources, standard supplies, and essential mentorship arrays.",
      image: education
    },
    { 
      title: "Environmental Sustainability", 
      desc: "Protecting ecosystems, cultivating sustainability frameworks, and planting climate awareness.",
      image: eco
    }
  ];

  // Hover states managed dynamically for button animations
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div style={{ padding: '4rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Dynamic Hover Stylesheet Injector */}
      <style>{`
        .cause-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cause-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }
        .donate-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .donate-btn:hover {
          background-color: #15803d !important;
          transform: scale(1.03);
          box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.4);
        }
      `}</style>

      <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.2rem', color: '#0f172a', fontWeight: '800' }}>
        Our Causes
      </h2>
      <span style={{ display: 'block', textAlign: 'center', marginBottom: '4rem', color: '#475569', fontSize: '1.05rem' }}>
        Explore the initiatives we are passionate about. Each cause represents a unique opportunity to make a meaningful impact in the lives of those who need it most.
      </span>
      
      {/* Vertical Stack Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {causes.map((c, idx) => {
          // Odd indexes (1, 3, etc.) put the image on the left, even indexes (0, 2, etc.) put text on left
          const isImageLeft = idx % 2 !== 0;

          return (
            <div 
              key={idx} 
              className="cause-card"
              style={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '2.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: isImageLeft ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: '3rem',
                position: 'relative', // Necessary for absolute positioning of the button
                minHeight: '280px',
                flexWrap: 'wrap' // Wraps gracefully on mobile screens
              }}
            >
              {/* Text Side content container */}
              <div style={{ flex: '1 1 450px', paddingBottom: '3.5rem' }}> 
                <h3 style={{ fontSize: '1.6rem', color: '#1e293b', margin: '0 0 1rem 0', fontWeight: '700' }}>
                  {c.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                  {c.desc}
                </p>
              </div>

              {/* Image Side Placeholder Block */}
              <div
  style={{
    flex: "1 1 350px",
    height: "220px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    cursor: "pointer",
  }}
>
  <img
    src={c.image}
    alt={c.title}
    className="cause-image"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

              {/* Button: Fixed strictly towards the bottom right corner */}
              <button 
                onClick={() => setCurrentPage('donate')}
                className="donate-btn"
                style={{ 
                  position: 'absolute',
                  bottom: '2.5rem',
                  right: '2.5rem',
                  padding: '0.75rem 1.5rem', 
                  background: '#16a34a', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                Donate for this cause →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DonatePage() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "4rem auto",
        padding: "2.5rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#000",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Make a Difference Today
      </h2>

      {/* Full Name */}
      <label style={{ display: "block", margin: "1rem 0 0.5rem" }}>
        Full Name
      </label>

      <input
        type="text"
        placeholder="John Doe"
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />

      {/* Cause Selection */}
      <label style={{ display: "block", margin: "1rem 0 0.5rem" }}>
        Select Cause
      </label>

      <select
        defaultValue=""
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        <option value="" disabled>
          Select a cause...
        </option>
        <option value="healthcare">Healthcare for Children</option>
        <option value="education">Education for All</option>
        <option value="environment">Environmental Sustainability</option>
      </select>

      {/* Donation Amount */}
      <label style={{ display: "block", margin: "1rem 0 0.5rem" }}>
        Select Amount
      </label>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {["₹500", "₹1000", "₹2000", "Custom"].map((amt) => (
          <button
            key={amt}
            style={{
              flex: 1,
              padding: "0.7rem",
              border: "1px solid #16a34a",
              background: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            {amt}
          </button>
        ))}
      </div>

      {/* Donate Button */}
      <button
        style={{
          width: "100%",
          padding: "0.9rem",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Donate Securely
      </button>
    </div>
  );
}


function VolunteerPage() {
  // Styles for the interactive card badges
  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    flex: '1 1 180px'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.25rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#f8fafc',
    fontSize: '0.95rem',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#334155',
    fontSize: '0.9rem',
    textAlign: 'left'
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', paddingBottom: '5rem', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. Top Section: Hero Banner with Image Placeholder Layout */}
      <div style={{ 
        background: 'linear-gradient(135deg, #0f172a, #1e293b)', 
        color: '#fff', 
        padding: '4rem 5%', 
        textAlign: 'center',
        borderBottom: '4px solid #16a34a'
      }}>
        {/* Vector Graphic Placeholder matching "volunteer page.pdf" */}
        <div
  style={{
    maxWidth: "750px",
    height: "240px",
    margin: "0 auto 2rem auto",
    border: "2px dashed rgba(255, 255, 255, 0.25)",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    overflow: "hidden", // Prevent image overflow
  }}
>
  <img
    src={volunteer}
    alt="Volunteer Cover Illustration"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Fill the container
      display: "block",   // Remove default inline spacing
      transition: "transform 0.4s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  />
</div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
          Be the Change. Become a Volunteer.
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem auto', color: '#cbd5e1', lineHeight: '1.6' }}>
          Your time, skills, and compassion can bring real change to lives that need support.
        </p>
        <a href="#volunteer-form" style={{ 
          display: 'inline-block',
          backgroundColor: '#1d4ed8', 
          color: '#fff', 
          padding: '0.75rem 2rem', 
          textDecoration: 'none',
          borderRadius: '6px', 
          fontWeight: '600',
          boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
        }}>
          Join as a Volunteer
        </a>
      </div>

      {/* 2. Overview Section */}
      <div style={{ padding: '3.5rem 5%', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem' }}>Volunteer Program Introduction</h2>
        <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
          At HopeHands Foundation, volunteers are the heart of everything we do. Whether you have time, skills, or simply a kind heart, your contribution can help us reach more lives and create lasting impact.
        </p>
      </div>

      {/* 3. Operational Grid Layout: Ways You Can Help */}
      <div style={{ padding: '0 5% 3.5rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Ways You Can Help
        </h3>
        
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "1.5rem",
    marginTop: "2rem",
  }}
>
  {/* Medical Assistance */}
  <div
    className="volunteer-card"
    style={{
      border: "2px solid #16a34a",
      boxShadow: "0 8px 20px rgba(22,163,74,0.15)",
      color: "#16a34a",
    }}
  >
    <Activity size={36} color="#16a34a" />
    <span>Medical Assistance</span>
  </div>

  {/* Food Distribution */}
  <div
    className="volunteer-card"
    style={{
      border: "2px solid #ef4444",
      boxShadow: "0 8px 20px rgba(239,68,68,0.15)",
      color: "#ef4444",
    }}
  >
    <Heart size={36} color="#ef4444" />
    <span>Food Distribution</span>
  </div>

  {/* Event Coordination */}
  <div
    className="volunteer-card"
    style={{
      border: "2px solid #2563eb",
      boxShadow: "0 8px 20px rgba(37,99,235,0.15)",
      color: "#2563eb",
    }}
  >
    <Users size={36} color="#2563eb" />
    <span>Event Coordination</span>
  </div>

  {/* Online / Remote */}
  <div
    className="volunteer-card"
    style={{
      border: "2px solid #f59e0b",
      boxShadow: "0 8px 20px rgba(245,158,11,0.15)",
      color: "#f59e0b",
    }}
  >
    <Globe size={36} color="#f59e0b" />
    <span>Online / Remote</span>
  </div>

  {/* Education Support */}
  <div
    className="volunteer-card"
    style={{
      border: "2px solid #8b5cf6",
      boxShadow: "0 8px 20px rgba(139,92,246,0.15)",
      color: "#8b5cf6",
    }}
  >
    <BookOpen size={36} color="#8b5cf6" />
    <span>Education Support</span>
  </div>
</div>
      </div>

      {/* 4. Action Submission Interface Block */}
      <div id="volunteer-form" style={{ 
        maxWidth: '550px', 
        margin: '0 auto', 
        padding: '3rem', 
        backgroundColor: '#fff', 
        borderRadius: '12px', 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        textAlign: 'center'
      }}>
        <h2 style={{ marginTop: 0, fontSize: '1.75rem', color: '#0f172a', marginBottom: '0.5rem' }}>
          Join Our Volunteer Community
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
          Your unique background and skills can directly translate to vital regional support programs.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label style={labelStyle}>Full Name</label>
          <input type="text" placeholder="Your full name" style={inputStyle} required />

          <label style={labelStyle}>Email Address</label>
          <input type="email" placeholder="name@example.com" style={inputStyle} required />

          <label style={labelStyle}>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} required />

          <label style={labelStyle}>Area of Interest</label>
          <select style={inputStyle} defaultValue="">
            <option value="" disabled>Select your primary field...</option>
            <option value="medical">Medical Assistance</option>
            <option value="food">Food Distribution</option>
            <option value="event">Event Coordination</option>
            <option value="remote">Online / Remote Volunteering</option>
            <option value="education">Education Support</option>
          </select>

          <label style={labelStyle}>Availability</label>
          <input type="text" placeholder="e.g., Weekends, 4 hours/week" style={inputStyle} />

          <button type="submit" style={{ 
            width: '100%', 
            padding: '0.85rem', 
            background: '#16a34a', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: 'bold', 
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2)',
            marginTop: '0.5rem'
          }}>
            Become a Volunteer
          </button>
        </form>

        <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '1.5rem', italic: 'true' }}>
          We respect your time and privacy. Our team will contact you soon.
        </p>
      </div>

    </div>
  );
}



function ContactPage() {
  return (
    <div style={{ padding: '4rem 5%', maxWidth: '1100px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* 1. Global CSS Injection for Smooth Hover Micro-interactions */}
      <style>{`
        .interactive-contact-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .interactive-contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04) !important;
        }
      `}</style>

      {/* Heading Block */}
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem', color: '#0f172a', fontWeight: '800' }}>
        Get in Touch With Us
      </h2>

      {/* 2. Top Section: Three Horizontal Cards for Phone, Email, and Location */}
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 340px)",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "4rem",
  }}
>
  {/* Phone Card */}
  <div
    className="contact-info-card"
    style={{
      border: "2px solid #16a34a",
      boxShadow: "0 10px 25px rgba(22,163,74,0.15)",
      color: "#16a34a",
    }}
  >
    <div
      style={{
        background: "#f0fdf4",
        padding: "0.9rem",
        borderRadius: "14px",
      }}
    >
      <Phone size={30} color="#16a34a" />
    </div>

    <div>
      <h4>Call Us</h4>
      <p>+91 98765 43210</p>
    </div>
  </div>

  {/* Email Card */}
  <div
    className="contact-info-card"
    style={{
      border: "2px solid #2563eb",
      boxShadow: "0 10px 25px rgba(37,99,235,0.15)",
      color: "#2563eb",
    }}
  >
    <div
      style={{
        background: "#eff6ff",
        padding: "0.9rem",
        borderRadius: "14px",
      }}
    >
      <Mail size={30} color="#2563eb" />
    </div>

    <div>
      <h4>Email Address</h4>
      <p>support@hopehands.org</p>
    </div>
  </div>

  {/* Location Card */}
  <div
    className="contact-info-card"
    style={{
      border: "2px solid #db2777",
      boxShadow: "0 10px 25px rgba(219,39,119,0.15)",
      color: "#db2777",
    }}
  >
    <div
      style={{
        background: "#fdf2f8",
        padding: "0.9rem",
        borderRadius: "14px",
      }}
    >
      <MapPin size={30} color="#db2777" />
    </div>

    <div>
      <h4>Our Location</h4>
      <p>Chennai, India</p>
    </div>
  </div>
</div>

      {/* 3. Middle Section: Google Map Placeholder Representation */}
      <div style={{ 
        width: '100%', 
        height: '350px', 
        backgroundColor: '#cbd5e1', 
        borderRadius: '12px', 
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        border: '1px solid #cbd5e1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#334155',
        marginBottom: '5rem',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4))'
      }}>
        <img src={chennai} alt="Chennai Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* 4. Bottom Section: Support & Trust Block */}
      <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem', fontWeight: '800' }}>
          Support & Trust
        </h3>
        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          We believe in transparency, trust, and people-powered change. Every volunteer helps us move closer to a better future.
        </p>

        {/* 3 Horizontal Trust Cards */}
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 320px)",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  }}
>
  {/* Card 1 */}
  <div
    className="contact-feature-card"
    style={{
      border: "2px solid #2563eb",
      boxShadow: "0 10px 25px rgba(37,99,235,0.15)",
      color: "#2563eb",
    }}
  >
    <div
      style={{
        padding: "0.8rem",
        background: "#eff6ff",
        borderRadius: "12px",
      }}
    >
      <ShieldCheck size={30} color="#2563eb" />
    </div>

    <span>Trusted by Volunteers</span>
  </div>

  {/* Card 2 */}
  <div
    className="contact-feature-card"
    style={{
      border: "2px solid #db2777",
      boxShadow: "0 10px 25px rgba(219,39,119,0.15)",
      color: "#db2777",
    }}
  >
    <div
      style={{
        padding: "0.8rem",
        background: "#fdf2f8",
        borderRadius: "12px",
      }}
    >
      <Users size={30} color="#db2777" />
    </div>

    <span>Community Support</span>
  </div>

  {/* Card 3 */}
  <div
    className="contact-feature-card"
    style={{
      border: "2px solid #16a34a",
      boxShadow: "0 10px 25px rgba(22,163,74,0.15)",
      color: "#16a34a",
    }}
  >
    <div
      style={{
        padding: "0.8rem",
        background: "#f0fdf4",
        borderRadius: "12px",
      }}
    >
      <Heart size={30} color="#16a34a" />
    </div>

    <span>Making a Difference</span>
  </div>
</div>
      </div>

    </div>
  );
}