export default function HomePage() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <span className="pill">Security made simple</span>
          <h1>Protect every app and endpoint with one calm dashboard.</h1>
          <p>
            SecureFlow is a lightweight security operations hub that helps teams
            detect risk, lock down access, and respond to incidents in minutes.
            It is designed for fast onboarding and effortless daily workflows.
          </p>
          <div className="hero-actions">
            <button className="primary">Start Free Trial</button>
            <button className="ghost">See Live View</button>
          </div>
          <div className="metrics">
            <div>
              <strong>3 min</strong>
              <span>Average setup</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Threat monitoring</span>
            </div>
            <div>
              <strong>99.9%</strong>
              <span>Alert accuracy</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-header">
            <span>Security Command Center</span>
            <span className="status">All systems green</span>
          </div>
          <div className="panel-grid">
            <div className="panel-card">
              <h3>Risk Scan</h3>
              <p>12 assets scanned · 0 critical</p>
            </div>
            <div className="panel-card">
              <h3>Identity Guard</h3>
              <p>2 access anomalies blocked</p>
            </div>
            <div className="panel-card">
              <h3>Compliance</h3>
              <p>SOC2, ISO ready reports</p>
            </div>
            <div className="panel-card">
              <h3>Incident Assist</h3>
              <p>Response playbooks in 1 click</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-header">
          <h2>Everything you need to stay secure</h2>
          <p>
            SecureFlow ships with streamlined controls that keep your company
            protected and compliant without heavy configuration.
          </p>
        </div>
        <div className="cards">
          <article className="card">
            <h3>Asset inventory</h3>
            <p>See every app, device, and cloud workload in one live map.</p>
          </article>
          <article className="card">
            <h3>Automated remediation</h3>
            <p>Patch vulnerabilities and rotate secrets with guided fixes.</p>
          </article>
          <article className="card">
            <h3>Access oversight</h3>
            <p>Review privileged access and remove stale accounts fast.</p>
          </article>
          <article className="card">
            <h3>Incident timeline</h3>
            <p>Track alerts from detection to resolution with full context.</p>
          </article>
          <article className="card">
            <h3>Unified reporting</h3>
            <p>Export compliance-ready reports in seconds, not days.</p>
          </article>
          <article className="card">
            <h3>Guided playbooks</h3>
            <p>Prebuilt workflows walk teams through every response step.</p>
          </article>
        </div>
      </section>

      <section id="workflow" className="section">
        <div className="section-header">
          <h2>From alert to action in three steps</h2>
          <p>SecureFlow keeps security easy with a simple workflow.</p>
        </div>
        <div className="timeline">
          <div className="timeline-step">
            <span className="step-number">1</span>
            <div>
              <h3>Connect sources</h3>
              <p>Plug in your apps, clouds, and endpoints in minutes.</p>
            </div>
          </div>
          <div className="timeline-step">
            <span className="step-number">2</span>
            <div>
              <h3>Review insights</h3>
              <p>Prioritized risk scores highlight what matters most.</p>
            </div>
          </div>
          <div className="timeline-step">
            <span className="step-number">3</span>
            <div>
              <h3>Resolve quickly</h3>
              <p>Launch playbooks, notify stakeholders, and close incidents.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section">
        <div className="section-header">
          <h2>Plans that fit every team</h2>
          <p>Start small or scale to enterprise with transparent pricing.</p>
        </div>
        <div className="cards pricing">
          <article className="card">
            <h3>Starter</h3>
            <p className="price">$29/month</p>
            <ul>
              <li>Core monitoring</li>
              <li>Weekly risk reports</li>
              <li>Email support</li>
            </ul>
            <button className="ghost">Choose Starter</button>
          </article>
          <article className="card featured">
            <h3>Growth</h3>
            <p className="price">$99/month</p>
            <ul>
              <li>Unlimited assets</li>
              <li>Automated remediation</li>
              <li>Priority response</li>
            </ul>
            <button className="primary">Choose Growth</button>
          </article>
          <article className="card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Dedicated security team</li>
              <li>Custom compliance mappings</li>
              <li>24/7 SLA</li>
            </ul>
            <button className="ghost">Talk to Sales</button>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-header">
          <h2>Let’s secure your stack</h2>
          <p>Share a few details and we will send a tailored demo.</p>
        </div>
        <form className="contact-form">
          <label>
            Work email
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            Company size
            <select>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201-500</option>
              <option>500+</option>
            </select>
          </label>
          <label>
            Primary concern
            <select>
              <option>Vulnerability management</option>
              <option>Access control</option>
              <option>Compliance reporting</option>
              <option>Incident response</option>
            </select>
          </label>
          <button className="primary" type="button">
            Send Demo Request
          </button>
        </form>
      </section>
    </main>
  );
}
