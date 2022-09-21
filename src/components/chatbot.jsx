import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/typeform.scss";
import Phone from "./phone";
import TypeformWidget from "./TypeformWidget";

export default ChatButton = (props) => {
  const [openChat, setOpenChat] = useState(false);
  const [openCallout, setOpenCallout] = useState(false);
  const queryString = window.location.search;

  const phoneButtonExists =
    typeof window !== "undefined" &&
    window?.location?.href?.indexOf("contact-us") > -1;

  return (
    <>
      <div className="total-chatbot-cnt">
        <div className="center-chatbot">
          <CallOut
            openCallout={openCallout}
            setOpenCallout={setOpenCallout}
            openChat={openChat}
            setOpenChat={setOpenChat}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: standardTransition }}
            className="chat-container"
          >
            <div
              className="chat-button"
              onClick={() => {
                setOpenChat(!openChat);
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 84 83">
                <rect width="84" height="56" fill="#fff" rx="8"></rect>
                <path fill="#fff" d="M43 50h41v33L43 50z" opacity=".7"></path>
              </svg>
            </div>
            {phoneButtonExists && <Phone />}
          </motion.div>

          <AnimatePresence>
            {openChat && (
              <motion.div
                className="chat-box-cnt"
                variants={chatParent}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, height: 0 }}
              >
                <motion.div
                  className="chat-form"
                  variants={openChat ? childFadeUp : fadeOut}
                >
                  <TypeformWidget {...props} />
                </motion.div>

                <motion.div
                  variants={openChat ? childFadeUp : fadeOut}
                  className="exit"
                  onClick={() => setOpenChat(false)}
                >
                  +
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const CallOut = ({ openCallout, setOpenCallout, openChat, setOpenChat }) => {
  const [chosenQuote, setChosenQuote] = useState("");

  function checkPageAndAssignQuote(windowLocation) {
    var pathName = windowLocation.pathname;
    pathName === "/"
      ? setChosenQuote(
          "<strong>Nau mai, haere mai </strong> <br/> Let us know how we can help."
        )
      : pathName === "/jobseekers/finding-a-job/"
      ? setChosenQuote(
          "<strong> Didn't find a job you wanted? </strong> <br/> <br/>Register with us and stay updated."
        )
      : pathName === "/reform-of-vocational-education/"
      ? setChosenQuote(
          "<strong>Got a question about RoVE?</strong><br/> <br/> Let us know!"
        )
      : windowLocation.href.indexOf("employers") > -1
      ? setChosenQuote(
          "<strong>Ready to get started? </strong> <br/> Connect with an advisor."
        )
      : setChosenQuote(
          "<strong>Nau mai haere mai </strong> <br/> let us know how we can help."
        );
  }

  function createMarkup() {
    return { __html: chosenQuote };
  }

  function openOnTimer(time) {
    setTimeout(() => {
      if (sessionStorage.getItem("exitedCallout") !== "true") {
        setOpenCallout(true);
      }
    }, time);
  }
  function closeOnTimer(time) {
    setTimeout(() => {
      setOpenCallout(false);
    }, time);
  }

  function openWithTimers(opentime, closetime) {
    openOnTimer(opentime);
    closeOnTimer(closetime);
  }

  function decideHowCalloutAppears(windowLocation) {
    var pathName = windowLocation.pathname;
    pathName === ("/" || "/reform-of-vocational-education/")
      ? openWithTimers(4000, 16000)
      : pathName === "/jobseekers/finding-a-job/"
      ? openWithTimers(7000, 14000)
      : windowLocation.href.indexOf("employers") > -1
      ? openWithTimers(4000, 16000)
      : console.log("");
  }

  useEffect(() => {
    checkPageAndAssignQuote(window.location);
    decideHowCalloutAppears(window.location);
  }, []);

  return (
    <>
      <div className="callout-cnt">
        <AnimatePresence>
          {openCallout && !openChat && (
            <>
              <motion.div
                className="callout"
                variants={openSide}
                initial="initial"
                animate="animate"
                exit={{
                  x: "100%",
                  opacity: 0,
                  transition: standardTransition,
                }}
                dangerouslySetInnerHTML={createMarkup()}
                onClick={() => setOpenChat(true)}
              />
              <motion.div
                className="callout-exit-button"
                variants={childFadeUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                onClick={() => (
                  setOpenCallout(false),
                  sessionStorage.setItem("exitedCallout", "true")
                )}
              >
                +
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const height = "clamp(500px, 80vh, 650px)";
const easeOut = [0.08, 0.69, 0.56, 0.97];
const standardTransition = { duration: 0.6, ease: easeOut };
const chatParent = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: height,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
      ease: easeOut,
      duration: 0.8,
    },
  },
};

const childFadeUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
};

export const spring = {
  type: "spring",
  duration: 0.8,
  damping: 8,
  bounce: 0.8,
};

const openSide = {
  initial: { y: "50%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: spring },
};

const fadeOut = {
  animate: { opacity: 0 },
};
