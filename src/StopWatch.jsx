import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalId = useRef(null);
  const startTimeRef = useRef(0);
  return <div></div>;
};

export default StopWatch;
