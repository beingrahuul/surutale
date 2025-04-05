import './style.css';

const Work = () => {
  // Sample logo data for top row (right aligned)
  const topRowLogos = [
    { id: 1, name: "Logoipsum", type: "hexagon" },
    { id: 2, name: "Offmax", type: "bars" },
    { id: 3, name: "Offmax", type: "waves" },
    { id: 4, name: "Offmax", type: "bell" },
    { id: 5, name: "Logoipsum", type: "circle" },
    { id: 6, name: "Logoipsum", type: "target" },
  ];

  // Sample logo data for bottom row (left aligned)
  const bottomRowLogos = [
    { id: 7, name: "Logoipsum", type: "robot" },
    { id: 8, name: "Offmax", type: "arrow" },
    { id: 9, name: "Offmax", type: "bolt" },
    { id: 10, name: "Logoipsum", type: "box" },
    { id: 11, name: "Logoipsum", type: "outline" },
    { id: 12, name: "Logoipsum", type: "blob" }
  ];

  return (
    <section className="work-section">
      <div className="container">
        <div className="work-content">
          <div className="work-text">
            <h2 className="work-title">Trusted by 100+ Creators around the world</h2>
            <p className="work-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
            </p>
          </div>
          
          <div className="logo-rows">
            <div className="logo-row top-row">
              {topRowLogos.map((logo) => (
                <div key={logo.id} className="logo-item">
                  <div className="logo-placeholder">
                    <div className="logo-content">
                      <LogoIcon type={logo.type} />
                      <span className="logo-name">{logo.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="logo-row bottom-row">
              {bottomRowLogos.map((logo) => (
                <div key={logo.id} className="logo-item">
                  <div className="logo-placeholder">
                    <div className="logo-content">
                      <LogoIcon type={logo.type} />
                      <span className="logo-name">{logo.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Logo component
const LogoIcon = ({ type }) => {
  const color = "#ffffff";
  
  switch (type) {
    case "hexagon":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L21.6 8V16L12 22L2.4 16V8L12 2Z" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "bars":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4V20M12 12V20M20 4V20" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "waves":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12M2 16C2 16 5 20 12 20C19 20 22 16 22 16M2 8C2 8 5 4 12 4C19 4 22 8 22 8" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "bell":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M18 11V8C18 5.23858 15.7614 3 13 3H11C8.23858 3 6 5.23858 6 8V11C6 14.3137 4 16 4 16H20C20 16 18 14.3137 18 11ZM12 19C11.2044 19 10.4413 18.6839 9.87868 18.1213C9.31607 17.5587 9 16.7956 9 16H15C15 16.7956 14.6839 17.5587 14.1213 18.1213C13.5587 18.6839 12.7956 19 12 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "circle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "target":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case "robot":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="14" rx="2" stroke={color} strokeWidth="2" />
          <circle cx="9" cy="12" r="2" fill={color} />
          <circle cx="15" cy="12" r="2" fill={color} />
          <path d="M8 3V6M16 3V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "arrow":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20L20 4M20 4H10M20 4V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bolt":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L5 14H12L11 22L19 10H12L13 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "box":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="16" height="12" stroke={color} strokeWidth="2" />
          <path d="M4 10H20" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "outline":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" stroke={color} strokeWidth="2" />
          <path d="M4 12H20" stroke={color} strokeWidth="2" />
        </svg>
      );
    case "blob":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke={color} strokeWidth="2" />
          <circle cx="8" cy="9" r="2" fill={color} />
          <circle cx="16" cy="9" r="2" fill={color} />
          <path d="M8 15C8 15 10 17 12 17C14 17 16 15 16 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        </svg>
      );
  }
};

export default Work;