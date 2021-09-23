const zippy = {
    extract:require('./src/extract'),
    extractv2:require('./src/extractv2'),
    info:require('./src/getInfo'),
    infov2:require('./src/getInfov2'),
    isExpire:require('./src/checkExpires'),
    search:require('./src/search'),
}


const zippydamn = {
	extract(url){
        let resultUrl = zippy.extractv2(url).success ? zippy.extractv2(url) : zippy.extractv2(url)
        return resultUrl
	},
	search(url){
		return zippy.search(url)
	}
}

module.exports = zippydamn