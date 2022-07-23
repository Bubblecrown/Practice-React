import { CHILD1_ACTION_ADD } from "../Constants";

// 2. สร้าง action
export const setStateToAdd = () => ({
  type: CHILD1_ACTION_ADD,
});

// 3. สร้างฟังก์ชั่นให้คนอื่นทำการเรียกใช้ได้ -- เพื่อยิง code 2 ไปที่ reducer
export const add = () => {
  return (dispatch) => {
    dispatch(setStateToAdd());
  };
};
