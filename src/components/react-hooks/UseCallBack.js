import React, { useState, useCallback } from "react";

// จดจำ Function เดิม return function
export default function UseCallBack() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Random</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Content a={1} b={count} />
    </div>
  );
}

const Content = ({ a, b }) => {
  const callback = useCallback(() => {
    return console.log("yay");
  });
  // a ตรงนี้ของ useCallBack เป็นค่าที่หากมันเปลี่ยนแปลง มันต้องทำการสร้าง object ใหม่ ถ้าเกิดไม่มีก็ไม่ต้องใส่ -- คือตราบใดที่ component ไม่ถูกทำลาย
  // เช่น กรณีที่ component มีแค่การอัปเดตอย่างเดียว

  return (
    <div>
      <h1>
        Number/Count : {a}/{b}
      </h1>
      <button onClick={callback}>test</button>
    </div>
  );
};
// เวลาใช้ฟังก์ชั่น ฟังก์ชั่นก็จะถูกเรียกใหม่ แต่บางทีเราก็ไม่อยากให้มันเรียกใหม่เพราะมันไม่มีความจำเป็นที่ต้องเรียกใหม่ มันน่าจะใช้ object ตัวเดิมได้
