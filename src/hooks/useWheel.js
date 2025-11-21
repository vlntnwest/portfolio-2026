import { useCallback, useEffect, useRef, useState } from "react";

export default function useWheelControl() {
  const wheelRef = useRef(null);
  const startAngleRef = useRef(null);
  const prevAngleRef = useRef(null);
  const accRef = useRef(0);
  const wheelAccRef = useRef(0);
  const dirRef = useRef(0);
  const lastTouchRef = useRef(false);

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
      dirRef.current = step;
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

  const onMouseMove = useCallback(
    (e) => {
      if (lastTouchRef.current) return;
      if (!wheelRef.current) return 0;

      if (prevAngleRef.current === null) {
        prevAngleRef.current = getAngle(e.clientX, e.clientY);
      }

      followMouse({
        clientX: e.clientX,
        clientY: e.clientY,
      });
      handleMove(getAngle(e.clientX, e.clientY));
    },
    [followMouse, handleMove, getAngle]
  );

  const onTouchStart = () => {
    lastTouchRef.current = true;
  };

  const onTouchMove = useCallback(
    (e) => {
      if (!wheelRef.current) return;
      const touch = e.touches[0];

      if (prevAngleRef.current === null) {
        prevAngleRef.current = getAngle(touch.clientX, touch.clientY);
      }

      followMouse({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      handleMove(getAngle(touch.clientX, touch.clientY));
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
    dirRef.current = step;
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  return {
    wheelRef,
    position,
    dirRef,
    reset,
    onMouseMove,
    onTouchMove,
    onWheel,
    onTouchStart,
  };
}
