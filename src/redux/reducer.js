export default function(state = null, action){
  switch (action.type) {
    case "ON_SET_MESSAGE": return action.payload;
    default: return state;
  }
};
