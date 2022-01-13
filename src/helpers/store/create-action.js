function createAction(type) {
  return function (payload) {
    const actionObject = {
      type,
    };

    if (payload !== undefined) {
      actionObject.payload = payload;
    }

    return actionObject;
  };
}

export default createAction;
