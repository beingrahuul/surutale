import './style.css';

// Import reason icons
import icon1 from '../../assets/why_assets/1.png';
import icon2 from '../../assets/why_assets/2.png';
import icon3 from '../../assets/why_assets/3.png';
import icon4 from '../../assets/why_assets/4.png';
import icon5 from '../../assets/why_assets/5.png';
import icon6 from '../../assets/why_assets/6.png';

const Why = () => {
  // Reasons data
  const reasons = [
    {
      id: 1,
      title: "Reason 1",
      icon: icon1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 2,
      title: "Reason 2",
      icon: icon2,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 3,
      title: "Reason 3",
      icon: icon3,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 4,
      title: "Reason 4",
      icon: icon4,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 5,
      title: "Reason 5",
      icon: icon5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 6,
      title: "Reason 6",
      icon: icon6,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-content">
          <div className="why-header">
            <h2 className="why-title">Why Content Creation is Important</h2>
            <p className="why-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <div key={reason.id} className="reason-card">
                <div className="reason-icon">
                  <img src={reason.icon} alt={`Icon for ${reason.title}`} />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
