import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/typeform.scss";

export const ChatButton = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openCallout, setOpenCallout] = useState(false);

  return (
    <>
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
            setOpenCallout(false);
          }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 84 83">
            <rect width="84" height="56" fill="#fff" rx="8"></rect>
            <path fill="#fff" d="M43 50h41v33L43 50z" opacity=".7"></path>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="chat-box-cnt"
        style={openChat ? { pointerEvents: "all" } : { pointerEvents: "none" }}
        variants={openChat ? chatParent : null}
        initial="initial"
        animate="animate"
      >
        <div className="chat-box">
          <motion.iframe
            variants={openChat ? childFadeUp : fadeOut}
            width="100%"
            height="100%"
            src="https://pc792805.typeform.com/c/V4mLSLvr"
          />
        </div>
        <motion.div
          variants={openChat ? childFadeUp : fadeOut}
          className="exit"
          onClick={() => setOpenChat(false)}
        >
          +
        </motion.div>
      </motion.div>
    </>
  );
};

const CallOut = ({ openCallout, setOpenCallout, openChat, setOpenChat }) => {
  const [chosenQuote, setChosenQuote] = useState("");

  function checkPageAndAssignQuote(pageLocation) {
    pageLocation === "/"
      ? setChosenQuote(
          "<strong>Nau mai haere mai </strong> <br/> let us know how we can help."
        )
      : pageLocation === "/jobseekers/finding-a-job"
      ? setChosenQuote(
          "<strong> Didn't find what you were looking for? </strong> <br/> <br/>Register your interest with us and stay updated"
        )
      : pageLocation === "/reform-of-vocational-education"
      ? setChosenQuote(
          "<strong>Got a question about RoVE?</strong><br/> <br/> Let us know!"
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
      setOpenCallout(true);
    }, time);
  }
  // function closeOnTimer(time) {
  //   setTimeout(() => {
  //     setOpenCallout(false);
  //   }, time);
  // }

  function decideHowCalloutAppears(pageLocation) {
    pageLocation === "/" ? openOnTimer(4000) : console.log("");
  }

  useEffect(() => {
    checkPageAndAssignQuote(window.location.pathname);
    decideHowCalloutAppears(window.location.pathname);
  });

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
                onClick={() => setOpenCallout(false)}
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

const height = "clamp(500px, 65vh, 650px)";
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

const spring = {
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
