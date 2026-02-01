import "./globals.css";

export const metadata = {
  title: "SecureFlow",
  description: "A simple security operations app built for effortless protection."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="header">
            <div className="logo">SecureFlow</div>
            <nav className="nav">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#plans">Plans</a>
              <a href="#contact">Contact</a>
            </nav>
            <button className="primary">Request Demo</button>
          </header>
          {children}
          <footer className="footer">
            <div>
              <strong>SecureFlow</strong>
              <p>Made for teams that want security without friction.</p>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#plans">Plans</a>
              <a href="#contact">Contact</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
