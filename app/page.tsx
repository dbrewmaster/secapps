const threatFeed = [
  {
    id: 1,
    location: "Tokyo, JP",
    type: "Credential stuffing",
    severity: "High",
    time: "15s ago"
  },
  {
    id: 2,
    location: "Frankfurt, DE",
    type: "Malware beacon",
    severity: "Critical",
    time: "42s ago"
  },
  {
    id: 3,
    location: "Sao Paulo, BR",
    type: "API scraping",
    severity: "Medium",
    time: "1m ago"
  },
  {
    id: 4,
    location: "Chicago, US",
    type: "Ransomware probe",
    severity: "High",
    time: "2m ago"
  }
];

const coverageStats = [
  { label: "Active sensors", value: "2,418" },
  { label: "Signals processed", value: "19.4M/day" },
  { label: "Blocked requests", value: "88,302" },
  { label: "Avg response", value: "3.2s" }
];

const defenseLayers = [
  {
    title: "Global exposure map",
    description:
      "Track inbound attacks, exploited CVEs, and compromised identities as they move across regions."
  },
  {
    title: "Priority response queue",
    description:
      "Auto-score alerts with asset criticality and guide analysts toward the highest impact fixes."
  },
  {
    title: "Automated containment",
    description:
      "One-click playbooks isolate endpoints, revoke tokens, and notify stakeholders instantly."
  }
];

export default function HomePage() {
  return (
    <main className="threatmap">
      <section className="hero">
        <div>
          <p className="eyebrow">Live threat intelligence console</p>
          <h1>ThreatMap Command Center</h1>
          <p className="hero-copy">
            Visualize global attack activity in real time. Correlate incoming
            threats, triage incidents, and deploy containment playbooks from a
            unified map.
          </p>
          <div className="hero-actions">
            <button className="primary">Launch Response Mode</button>
            <button className="ghost">Download Report</button>
          </div>
        </div>
        <div className="hero-card">
          <h2>Today&apos;s posture</h2>
          <p className="muted">
            Updated every 15 seconds · Last sync 00:00:12
          </p>
          <div className="stat-grid">
            <div>
              <strong>94%</strong>
              <span>Threats contained</span>
            </div>
            <div>
              <strong>132</strong>
              <span>Active campaigns</span>
            </div>
            <div>
              <strong>27</strong>
              <span>High priority alerts</span>
            </div>
          </div>
        </div>
      </section>

      <section className="map-layout" id="map">
        <div className="map-panel">
          <div className="map-header">
            <div>
              <h2>Global threat map</h2>
              <p className="muted">
                Live telemetry from endpoints, cloud workloads, and partner SOCs.
              </p>
            </div>
            <div className="map-legend">
              <span className="legend-item">
                <i className="legend-dot high" />High severity
              </span>
              <span className="legend-item">
                <i className="legend-dot critical" />Critical
              </span>
              <span className="legend-item">
                <i className="legend-dot medium" />Medium
              </span>
            </div>
          </div>
          <div className="map">
            <div className="map-layer" />
            <div className="pulse-dot dot-1" />
            <div className="pulse-dot dot-2" />
            <div className="pulse-dot dot-3" />
            <div className="pulse-dot dot-4" />
            <div className="pulse-dot dot-5" />
            <div className="map-path path-1" />
            <div className="map-path path-2" />
            <div className="map-path path-3" />
            <div className="map-path path-4" />
            <div className="map-overlay">
              <div>
                <strong>08</strong>
                <span>Regions under watch</span>
              </div>
              <div>
                <strong>412</strong>
                <span>Simultaneous probes</span>
              </div>
              <div>
                <strong>19</strong>
                <span>Critical escalations</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="side-panel" id="feed">
          <div className="panel-header">
            <h3>Live response feed</h3>
            <button className="ghost">Filter</button>
          </div>
          <div className="feed">
            {threatFeed.map((item) => (
              <article key={item.id} className="feed-item">
                <div>
                  <h4>{item.type}</h4>
                  <p className="muted">{item.location}</p>
                </div>
                <div className="feed-meta">
                  <span className={`severity ${item.severity.toLowerCase()}`}>
                    {item.severity}
                  </span>
                  <span className="muted">{item.time}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="side-footer">
            <h4>Coverage snapshot</h4>
            <div className="coverage">
              {coverageStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span className="muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="cards" id="layers">
        {defenseLayers.map((layer) => (
          <article key={layer.title} className="card">
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
