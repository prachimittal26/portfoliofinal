// import React, { useState, useEffect } from 'react';
// import './Loader.css'; // Import the CSS file

// const Loader: React.FC = () => {
//   const [percentage, setPercentage] = useState(0);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 30); // Adjust the speed of the progress here (e.g., 30ms for faster, 100ms for slower)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//       <p className="loader-percentage">{percentage}%</p>
//     </div>
//   );
// };

// export default Loader;
import React, { useState, useEffect } from 'react';
import './Loader.css'; // Import the CSS file

const Loader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust the speed of the progress here (e.g., 30ms for faster, 100ms for slower)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader"></div>
      
      <p className="loader-text">Loading..</p>
      <p className="loader-percentage">{percentage}%</p>
      
      
    </div>
  );
};

export default Loader;
