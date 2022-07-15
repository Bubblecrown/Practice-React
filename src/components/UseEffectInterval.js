import React, { useEffect, useState } from "react";

export default function UseEffectInterval() {
	const [time, setTime] = useState(0)
  const timer = () => {
    setTime(time + 1);
  };
  useEffect(() => {
    const countTime = setInterval(timer, 1000);

    return () => {
      clearInterval(countTime);
    };
  }, [time]); // useState รันอยู่ตลอดแต่ display แสดงผลไม่ได้รับการอัปเดตถ้าไม่ได้ใช้ useEffect

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
