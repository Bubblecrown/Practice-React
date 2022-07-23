import { CHILD1_ACTION_ADD } from "../Constants";

const initialState = {
	count1:0
};

export default (state = initialState, { type }) => {
  switch (type) {
		// 4. ดัก code ที่ action ส่งมา
		case CHILD1_ACTION_ADD:
			return {...state, count1:state.count1 + 1}
    default:
      return state;
  }
};
