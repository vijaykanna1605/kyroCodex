export function HeroDevices() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-glow" />

      <div className="laptop">
        <div className="laptop-lid">
          <div className="laptop-bezel">
            <div className="laptop-camera" />
            <div className="laptop-screen">
              <div className="ui-top">
                <div className="ui-brand">
                  <span className="ui-mark">K</span>
                  KyroCodeX
                </div>
                <div className="ui-nav">
                  <span className="on">Home</span>
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
                <span className="ui-mini-btn">Get Started</span>
              </div>

              <div className="ui-body">
                <div className="ui-copy">
                  <h3>
                    Build Your <span>Next Big Idea</span>
                  </h3>
                  <p>Modern web and mobile applications, designed for performance and scale.</p>
                  <span className="ui-cta">Get Started →</span>
                  <div className="ui-feats">
                    <span>⚡ Fast</span>
                    <span>🛡 Secure</span>
                    <span>☁ Cloud</span>
                  </div>
                </div>
                <div className="ui-panel">
                  <div className="ui-chart" />
                  <div className="ui-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base">
          <div className="laptop-notch" />
        </div>
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-brand">
            <span className="ui-mark">K</span>
            KyroCodeX
          </div>
          <h4>
            Your Vision.
            <br />
            <span>Our Code.</span>
          </h4>
          <p>Web. Apps. UI/UX. Cloud.</p>
          <span className="ui-cta">Get Started →</span>
          <div className="phone-orb">
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
