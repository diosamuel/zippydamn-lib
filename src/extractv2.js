// extract url to get a downloadable link
const cheerio = require('cheerio');
const url = require('url');
const fs = require('fs');
const helper = require('./helper');
const got = require('got');

let resultUrl={
    v:'2'
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
                    let links = $(res).html()
                    elementPosition.push(links)
                })

                /*get unique url*/
                try{
                    eval(elementPosition[8].split('href')[0].split('document')[0])
                    var a = Math.floor(a/3);
                    let unique = elementPosition[8].split('href')[1].split(/\;|\=/)[1]
                    resultUrl.result = new URL(urls).hostname+eval(unique)
                    resultUrl.msg = "Success"
                    resultUrl.success = true
                }catch(err){
                    resultUrl.result = ""
                    resultUrl.success = false
                    resultUrl.msg = "Something Error!, make sure your link is a valid zippyshare link"
                }
            }

            return resultUrl

    } else {
        resultUrl.result = ""
        resultUrl.msg=`Invalid link!`
        resultUrl.success = false
        return resultUrl
    }


}
module.exports = down_zippydamn