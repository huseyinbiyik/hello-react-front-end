const apiUrl = 'http://127.0.0.1:3000/api/v1/greetings';
const GREET_EVERYONE = '/greeting/GREET_EVERYONE';

export const greetEveryone = (data) => ({
  type: GREET_EVERYONE,
  data,
});

export const fetchGreeting = () => (dispatch) => {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(greetEveryone(json)));
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GREET_EVERYONE:
      return action.data;
    default:
      return state;
  }
};

export default greetingReducer;
