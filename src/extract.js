// extract url to get a downloadable link
const cheerio = require('cheerio');
const url = require('url');
const fs = require('fs');
const helper = require('./helper');
const got = require('got');

let resultUrl={
    v:'1'
}
async function down_zippydamn(urls,cb) {

    if (helper.isValidUrl(urls) && helper.isZippyShareUrl(urls)) {
            resultUrl.url = urls
            let response = await got(urls)
            if (response.statusCode != 200) {
                resultUrl.msg="Link not found or link expired!"
            } else {
                let $ = cheerio.load(response.body);
                let elementPosition = []
                $('script').each((pos, res) => {
                    let links = $(res).html().search(/dlbutton/g)
                    elementPosition.push(links)
                })

                if (!elementPosition.every(x => x < 0)) {
                    $('script').each((pos, res) => {
                        let links = $(res).html().search(/dlbutton/g)
                        if (links >= 0){
                            let tagScript = $(res).html()
                            let divider = tagScript.split(';')[0]
                            let decrypt = divider.split("document.getElementById('dlbutton').href = ")[1]
                            let result = `${url.parse(urls).hostname}${eval(decrypt)}`
                            resultUrl.result=result
                            resultUrl.msg = "Success"
                            resultUrl.success=true
                        }
                    })
                }else{
                    resultUrl.success = false
                    resultUrl.result=''
                    resultUrl.msg="Link not found or link expired!"
                }

                return resultUrl

            }


    } else {
        resultUrl.msg=`Invalid link!`
        resultUrl.result=''
        resultUrl.success = false

        return resultUrl
    }


}
module.exports = down_zippydamn