'use strict';

module.exports.read = () => {
    return { message: 'iot.get() not implemented yet.' }
}

module.exports.save = (data) => {
    return { time: Date(), message: 'Data accepted.', data }
}
