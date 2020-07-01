function checkLinks(obj, httpValidate = false) {
    if (httpValidate.validation) {
        https.get(obj.href, (res) => {
console.log(res.statusCode)
        })
            .on('error', (e) => console.error(e.code));
    } else {

    }

}