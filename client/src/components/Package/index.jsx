import './style.css';

const Package = () => {
  // Package data
  const packages = [
    {
      id: 1,
      name: "Free Plan",
      price: "0",
      features: [
        { text: "10 Video", available: true },
        { text: "Can't buy more credits", available: true },
        { text: "Credits expire monthly", available: true },
        { text: "1 GB storage", available: true },
        { text: "Video export at 720p", available: true }
      ],
      buttonStyle: "dark"
    },
    {
      id: 2,
      name: "Pro",
      price: "20",
      features: [
        { text: "25 Video", available: true },
        { text: "Can't buy more credits", available: true },
        { text: "Video export at 720p", available: true },
        { text: "Credits expire monthly", available: true },
        { text: "1 GB storage", available: true },
        { text: "Priority support", available: true },
        { text: "Access to new beta AI models", available: true },
        { text: "Video export at 720p", available: true }
      ],
      buttonStyle: "light"
    }
  ];

  return (
    <section className="package-section">
      <div className="container">
        <div className="package-content">
          <div className="package-header">
            <h2 className="package-title">Packages</h2>
            <p className="package-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          
          <div className="package-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-card-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price-currency">$</span>
                    <span className="price-value">{pkg.price}</span>
                    <span className="price-duration">/ mo</span>
                  </div>
                </div>
                
                <div className="package-divider"></div>
                
                <div className="feature-list">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`get-plan-btn ${pkg.buttonStyle === 'light' ? 'light' : 'dark'}`}
                >
                  Get Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
