import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";
// action ที่จะส่งข้อมูลไปให้ reducer
// rxac
export const setStateToAdd = () => ({
  type: APP_ACTION_ADD,
});

export const setStateToRem = () => ({
  type: APP_ACTION_REM,
});

export const setStateToClr = (payload) => ({
  type: APP_ACTION_CLR,
  payload,
});

// type ชื่อของ action
// payload ผลลัพธ์ที่เกิดจาก action นี้

// code ที่ให้ component เรียกใช้งาน function ได้
export const add = () => {
  return (dispatch) => {
    dispatch(setStateToAdd());
  };
};

export const remove = () => {
	return dispatch =>{
		dispatch(setStateToRem())
	}
}

export const clear = (payload) =>{
	return dispatch=>{
		dispatch(setStateToClr(payload))
	}
}