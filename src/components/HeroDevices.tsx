export function HeroDevices() {
  return (
    <div className="device-showcase" aria-hidden="true">
      <div className="macbook">
        <div className="mac-screen">
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-address">kyrocodex.com</div>

            <div className="browser-live">LIVE</div>
          </div>

          <div className="mac-content">
            <div className="mac-nav">
              <strong>KyroCodeX</strong>
              <div>
                <span>Home</span>
                <span>Services</span>
                <span>About</span>
              </div>
              <button>Start a project →</button>
            </div>

            <div className="mac-hero">
              <div>
                <small>PRODUCT DESIGN • DEVELOPMENT</small>

                <h3>
                  Build what
                  <br />
                  <span>moves people.</span>
                </h3>

                <p>
                  Premium websites, web applications and
                  digital experiences built for modern brands.
                </p>

                <button className="mac-cta">Explore project →</button>
              </div>

              <div className="mac-chart">
                <div className="chart-label">GROWTH</div>
                <div className="bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mac-bottom">
          <div className="mac-hinge" />
        </div>
      </div>

      <div className="iphone">
        <div className="iphone-screen">
          <div className="iphone-island" />

          <div className="iphone-top">
            <strong>Kyro</strong>
            <span>•••</span>
          </div>

          <div className="iphone-body">
            <small>GROWTH</small>

            <h4>
              Digital
              <br />
              <span>experiences.</span>
            </h4>

            <p>Design that turns ideas into products people love.</p>

            <div className="iphone-stat">
              <span>Growth</span>
              <strong>+34.8%</strong>
            </div>

            <div className="iphone-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

            <button>View project →</button>
          </div>
        </div>
      </div>

      <div className="device-glow" />
    </div>
  )
}
