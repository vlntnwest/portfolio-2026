import { useCallback, useEffect, useRef, useState } from "react";

export default function useWheelControl() {
  const wheelRef = useRef(null);
  const startAngleRef = useRef(null);
  const prevAngleRef = useRef(null);
  const accRef = useRef(0);
  const wheelAccRef = useRef(0);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const anglePerStep = Math.PI / 3;
  const wheelStep = 1;
  const wheelSensitivity = 0.01;

  const getAngle = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return 0;
    const rect = wheelRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(clientY - cy, clientX - cx);
  }, []);

  const normalizeDelta = useCallback((delta) => {
    if (delta > Math.PI) return delta - 2 * Math.PI;
    if (delta < -Math.PI) return delta + 2 * Math.PI;
    return delta;
  }, []);

  const reset = useCallback(() => {
    startAngleRef.current = null;
    prevAngleRef.current = null;
    accRef.current = 0;
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMove = useCallback(
    (angle) => {
      if (prevAngleRef.current === null) return 0;
      let delta = angle - prevAngleRef.current;
      delta = normalizeDelta(delta);
      accRef.current += delta;
      let step = 0;
      while (Math.abs(accRef.current) >= anglePerStep) {
        const dir = Math.sign(accRef.current);
        step += dir;
        accRef.current -= dir * anglePerStep;
      }
      prevAngleRef.current = angle;
      return step;
    },
    [normalizeDelta]
  );

  const followMouse = useCallback(
    (e) => {
      if (!wheelRef.current) return;
      const angle = getAngle(e.clientX, e.clientY);
      const radius = 68;
      setPosition({ x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
      return angle;
    },
    [getAngle]
  );

  const lastTouchRef = useRef(false);

  const onTouchStart = () => {
    lastTouchRef.current = true;
  };

  const onMouseMove = useCallback(
    (e) => {
      if (lastTouchRef.current) return; // ignore le mouvement si touch
      if (!wheelRef.current) return 0;

      if (startAngleRef.current === null)
        startAngleRef.current = getAngle(e.clientX, e.clientY);
      if (prevAngleRef.current === null)
        prevAngleRef.current = startAngleRef.current;

      const angle = followMouse(e);
      prevAngleRef.current = angle;
      return handleMove(angle);
    },
    [followMouse, handleMove, getAngle]
  );

  const onTouchMove = useCallback(
    (e) => {
      if (!wheelRef.current) return;
      const touch = e.touches[0];
      const angle = followMouse({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      prevAngleRef.current = angle;
    },
    [followMouse]
  );

  const onWheel = useCallback((e) => {
    wheelAccRef.current += e.deltaY * wheelSensitivity;
    let step = 0;
    while (Math.abs(wheelAccRef.current) >= wheelStep) {
      const dir = Math.sign(wheelAccRef.current);
      step += dir;
      wheelAccRef.current -= dir * wheelStep;
    }
    return step;
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  return {
    wheelRef,
    position,
    reset,
    onMouseMove,
    onTouchMove,
    onWheel,
    onTouchStart,
  };
}
