function createAction(action) {
  return function (payload) {
    const actionObject = {
      type: action,
    };

    if (payload) {
      actionObject.payload = payload;
    }

    return actionObject;
  };
}

export default createAction;
