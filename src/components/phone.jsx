import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Phone = () => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [officeOpen, setOfficeOpen] = useState(false);

  var currentTimeDate = new Date();
  var day = currentTimeDate.getDay();
  var hour = currentTimeDate.getHours();
  var minute = currentTimeDate.getMinutes();

  function checkOpenTime() {
    if (day > 0 && day < 6) {
      if ((hour > 8 && hour < 17) || (hour == 8 && minute >= 30))
        setOfficeOpen(true);
    }
  }

  useEffect(() => {
    checkOpenTime();
  });
  return (
    <>
      <a href="tel:0800-526-1800">
        <motion.div
          className="phone-cnt"
          onMouseEnter={() => setPhoneOpen(true)}
          onMouseLeave={() => setPhoneOpen(false)}
        >
          <div className="phone-message-cnt">
            <AnimatePresence>
              {phoneOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0, transition: smallspring }}
                  exit={{
                    opacity: 0,
                    x: "100%",
                    transition: { duration: 0.5 },
                  }}
                  className="phone-message"
                >
                  0800 526 1800
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="phone-button-cnt"
            style={
              officeOpen
                ? { backgroundColor: "rgb(2, 200, 157)" }
                : { backgroundColor: "rgb(196, 196, 196)", boxShadow: "none" }
            }
          >
            <PhoneIconSVG />
          </div>
        </motion.div>
      </a>
    </>
  );
};

export default Phone;

const PhoneIconSVG = () => {
  return (
    <svg className="phone-icon" viewBox="0 0 384 384">
      <g>
        <g>
          <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
        </g>
      </g>
    </svg>
  );
};

export const smallspring = {
  type: "spring",
  mass: 0.5,

  bounce: 0.35,
};
