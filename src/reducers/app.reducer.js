// rxreducer
// redeucer มีได้มากกว่า 1 ตัวจึงต้องมีการ provide combineReducers ที่ใช่ในการ combine ทุกๆ reducer หรือทุกๆ subState ของทุกๆ component
// Global State
const initialState = {
	// นิยามตัวแปร
	count:0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
		// code ตรงนี้จะถูกเรียกจังหวะที่ action มีการส่งมา
  // case first:
  //   return { ...state, ...payload }

  default:
    return state
  }
}
