import express from 'express'
import https from 'https'

const options = {
    hostname: 'vip-smartlingconnectorservprod.us-central1.gcp.dev.paypalinc.com',
    port: 443,
    path: '/gitconnector/v1/repoconfig',
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'vip-smartlingconnectorservprod.us-central1.gcp.dev.paypalinc.com'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
  let out, configs = ''
    const req = https.request(options, res => {
        console.log(`Called gitconnector API, statusCode: ${res.statusCode}`)

        res.on('data', chunk => {
            out += chunk
        })

        res.on('error', error => {
            console.error(error)
        })

        res.on('end', () => {
            let obj = JSON.parse(out)
            configs = obj
        })
    })
    req.end()
    return configs
});

export default gitConfigs