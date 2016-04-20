var C = require('../constants');
const initialState = {
    auth: {
        currently: C.ANONYMOUS,
        username: null,
        uid: null
    }
};
module.exports     = initialState;
