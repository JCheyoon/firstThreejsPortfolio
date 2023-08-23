import { createContext, useContext, useState } from "react";
import { starCollectSound } from "../audio/audio.jsx";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [stars, setStars] = useState([
    { id: "star1", position: [-2.2, 2.4, -8.2] },
    { id: "star2", position: [6.8, 2.3, -1.85] },
    { id: "star3", position: [1.3, 1.5, 3.3] },
    { id: "star4", position: [-6.3, 2, 6.6] },
    { id: "star5", position: [4.5, 0.3, 8.5] },
  ]);

  const removeStar = (starId) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== starId));
    starCollectSound.play();
  };

  const countStar = () => {};

  const value = {
    stars,
    setStars,
    removeStar,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useContextData = () => {
  return useContext(DataContext);
};
