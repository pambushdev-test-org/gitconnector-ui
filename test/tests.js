var fs = require('fs')

var data_import1 = fs.readFileSync('src/data/test_config1.json')
var data_import2 = fs.readFileSync('src/data/test_config2.json')

describe('jsonFilesExists', function(){
	it('JSON files for input data should exist', function(done){
		if(data_import1 && data_import2) {
			return done()
		} else {
			return done(err)
		}
	})
})
