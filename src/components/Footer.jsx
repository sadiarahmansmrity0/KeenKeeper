"use client";
import Link from "next/link";
import Image from "next/image";
 const socialLinks = [
    { icon: <img src="/instagram.png" alt="" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <img src="/facebook.png" alt=""  />, href: "https://facebook.com", label: "Facebook" },
    { icon: <img src="/twitter.png" alt=""  />, href: "https://x.com", label: "X" },
  ];
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ];

const Footer = () => {
    return (
        <div>
            <footer  className="text-black w-full btn-dark-success">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl font-bold tracking-tight">
          Keen<span className="text-success">Keeper</span>
        </h2>

        <p className="   text-sm max-w-md leading-relaxed" >
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-3 mt-2">
          <span className="text-sm font-semibold tracking-wide">Social Links</span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "#000" }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#1f4a3a";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1) border-t border-white/10 bg-black/20" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors duration-150 hover:text-white"
                style={{ color: "inherit" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;