const generateActionPayload = ({type, payload}) => ({
  type: type || '',
  payload: payload || '',
});

export default {
  generateActionPayload,
};
