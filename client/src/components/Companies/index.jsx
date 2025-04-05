import './style.css';
import { useState } from 'react';

//images
import neon from '../../assets/spiderman-glitch.png';
import minimal from '../../assets/spiderman-minimal.png';

const Companies = () => {
  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Neon Spider Logo",
      image: neon,
      videoUrl: "https://example.com/video1.mp4"
    },
    {
      id: 2,
      title: "Minimal Spider Design",
      image: minimal,
      videoUrl: "https://example.com/video2.mp4"
    }
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  // Handle play button click
  const handlePlayClick = (item) => {
    setActiveVideo(item);
    // In a real application, you'd open a modal or play the video
    console.log(`Playing video: ${item.title}`);
  };

  return (
    <section className="companies-section">
      <div className="container">
        <div className="companies-content">
          <div className="companies-info">
            <h2 className="companies-title">Some pieces of our work</h2>
            <p className="companies-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="show-more-btn">SHOW MORE</button>
          </div>
          
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="video-thumbnail">
                  <div className="thumbnail-img" style={{ backgroundImage: `url(${item.image})` }}>
                  </div>
                  <button 
                    className="play-btn"
                    onClick={() => handlePlayClick(item)}
                    aria-label={`Play ${item.title} video`}
                  >
                    <PlayIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Play icon
const PlayIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.14v13.72a.5.5 0 0 0 .76.43l10.56-6.86a.5.5 0 0 0 0-.86L8.76 4.71a.5.5 0 0 0-.76.43z" fill="white" />
    </svg>
  );
};

export default Companies;
