import React, { useState, useMemo } from "react";

// จดจำค่าเก่า ไม่ต้องคำนวณใหม่ ตราบใดที่ค่าที่ input เข้ามาเป็นค่าเดิม 
// return ค่าที่ได้จากการคำนวณในฟังก์ชั่น
export default function UseMemo() {
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
  const memorization = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, [a]); 
  // a ตรงนี้ของ useMemo คือตรวจ a ว่า a เปลี่ยนไหม ถ้าเปลี่ยนค่อยรันในส่วนของ return ใหม่ ถ้าไม่ก็เอาค่าเดิมไปแสดง 
  const random = Math.floor(Math.random() * 100);
  return (
    <div>
      <h1>Number/Count : {a}/{b}</h1>
      <h1>Normal random : {random}</h1>
      <h1>UseMemo : {memorization}</h1>
    </div>
  );
};

// useMemo ทำให้ปรัสิทธิภาพการทำงานดีขึ้นเนื่องจาก CPU ไม่ต้องคำนวณใหม่ทุกครั้ง
// useMemo ใช้ในการทำ optimize หรือปรับปรุงประสิทธิภาพเว็บไซต์ของเราให้ดีขึ้น สามารถทำการเช็คได้ว่า state หรือ prop ยังคงเป็นค่าเดิมอยู่ มันก็จะทำการ return ค่าที่มัน catch ไว้
// ก็คือส่งไปเป็นค่าที่ catch เอาไว้ ไม่จำเป็นต้องเอา input นั้นมาคำนวณใหม่ useMemo เหมือนกับการ memorize หรือเก็บค่าเอาไว้

// เช่น หากอยากได้ค่าหนึ่ง แต่ค่านั้นมาจากการรันฟังก์ชั่น การคำนวณที่ซับซ้อน เราคงไม่อยากให้มันคำนวณบ่อยๆถ้า input ที่ป้อนให้กับการคำนวณนี้ยังคงเป็นค่าเดิม อย่างเรามี Child Component อยู่ 1 ตัว แล้ว Child component ของเรามีการถูก update เราคงไม่อยากให้การคำนวณนี้เกิดขึ้นบ่อยๆถ้า input ที่ป้อนให้กับการคำนวณนี้ยังคงเป็นค่าเดิม

// 1. คำสั่ง Try เป็นส่วนของบริเวณที่คาดการว่าอาจจะเกิดเหตุผิดปกติของโปรแกรม

// 2. คำสั่ง Catch เป็นส่วนของการแก้ไขข้อผิดพลาด หรือความผิดปกติของโปรแกรม

// 3. คำสั่ง Finally เป็นส่วนเสริม สำหรับการทำงานก่อนจบ การจัดการความผิดปกติของโปรแกรม

// 4. คำสั่ง Catch สามารถมีได้มากกว่า 1 ในแต่ละ 1 Try

// 5. คำสั่ง Try และ Catch ต้องใช้งานร่วมกัน แต่ Finally ไม่จำเป็นต้องมีก็ได้
