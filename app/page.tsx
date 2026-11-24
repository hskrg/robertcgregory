import Image from "next/image";

export default function HomePage() {
  return (
    <div className="shell">
      <header className="site-header">
        <Image
          className="crest"
          src="/mark-512.png"
          alt="RG crest"
          width={52}
          height={52}
          priority
        />
        <p className="brand-name">Rob Gregory</p>
      </header>

      <main>
        <h1 className="hero-title">Rob Gregory</h1>
        <p className="role">Founder</p>
        <p className="bio">
          More than ten years at GoDaddy and Media Temple, including VP of
          Customer Support. Now runs HSKRG and Business Rocket.
        </p>
        <p className="companies">HSKRG, Business Rocket</p>
        <div className="contact">
          <a href="mailto:rob@robertcgregory.com">rob@robertcgregory.com</a>
          <a href="tel:+15716002835">+1 (571) 600-2835</a>
        </div>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Rob Gregory</p>
      </footer>
    </div>
  );
}
