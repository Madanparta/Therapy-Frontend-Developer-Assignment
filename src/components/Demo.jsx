import React, { useState } from 'react';
import './Timeline.css'; // Import your CSS file

const Timeline = ( ) => {
    const pages = [
        { content: <h1>Welcome!</h1> },
        { content: <p>This is the second page.</p> },
        { content: <button onClick={() => alert('Final page reached!')}>Click here</button> },
      ];
      
    //   <Timeline pages={pages} />
      
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSkip = () => {
    setCurrentPage(pages.length - 1);
  };

  const renderProgressBars = () => {
    return pages.map((page, index) => (
      <div
        key={index}
        className={`progress-bar ${index <= currentPage ? 'active' : ''}`}
      />
    ));
  };

  const renderPageContent = () => {
    return pages[currentPage].content; // Render page-specific content
  };

  return (
    <div className="timeline-container">
      <div className="progress-bar-container">
        {renderProgressBars()}
      </div>
      <div className="page-content">{renderPageContent()}</div>
      <div className="button-container">
        <button className="skip-button" onClick={handleSkip}>
          Skip
        </button>
        <button className="next-button" onClick={handleNext} disabled={currentPage === pages.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Timeline;
