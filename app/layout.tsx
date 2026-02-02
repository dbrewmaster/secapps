import "./globals.css";

export const metadata = {
  title: "ThreatMap",
  description: "A real-time threat map for security operations teams."
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
            <div>
              <p className="logo">ThreatMap</p>
              <span className="tagline">Security Operations Center</span>
            </div>
            <nav className="nav">
              <a href="#map">Threat map</a>
              <a href="#feed">Response feed</a>
              <a href="#layers">Defense layers</a>
            </nav>
            <button className="primary">Create Alert</button>
          </header>
          {children}
          <footer className="footer">
            <div>
              <strong>ThreatMap</strong>
              <p className="muted">
                Built for analysts who need instant visibility into global
                threats.
              </p>
            </div>
            <div className="footer-links">
              <span>Data refresh: 15s</span>
              <span>Coverage: Global</span>
              <span>Uptime: 99.99%</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
