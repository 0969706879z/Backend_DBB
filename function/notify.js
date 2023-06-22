const request = require('request')

exports.notifyEvent = (msg) => {
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: 'f4T98dYVRrjSfBZdT6pSSScGmx8nirn9IGVQ1IL3O3h'
        },
        form: {
            message: msg
        }
    })
}