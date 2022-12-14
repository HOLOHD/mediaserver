'use strict';

var sendSuccess = function (res, msg, data) {
    if (!res)
        return;

    var out = {};
    out.stat_message = msg;
    out.data = data;
    out.success = true;

    res.contentType('json');
    return res.json(out);
}

var sendError = function (res, msg, err) {
    if (!res)
        return;

    var out = {},
        errmsg = err ? err.toString() : "";
    out.stat_message = msg + errmsg;
    out.success = false;

    res.contentType('json');
    return res.json(out);
}


module.exports = {
    sendSuccess: sendSuccess,
    sendError: sendError
}

