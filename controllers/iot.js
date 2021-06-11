'use strict';
const iot = require('../models/iot');

module.exports.read = async () => {
    const result = await iot.read();
    return { count: result ? result.length : 0, data: result || [] }
}

module.exports.save = async (data) => {
    const result = await iot.update(data);
    return (result instanceof Error ?
        { time: Date(), processed: false, message: Error.toString(), data } :
        { time: Date(), processed: true, message: 'Data accepted.', data }
    )
}
