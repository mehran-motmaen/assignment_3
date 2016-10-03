/**
 * Created by VAIO on 10/3/2016.
 */

var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {



    //function onRequest(req, rec) {

    if (reg.method === "get")
    {
        res.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./form.html', null, function (error, data) {
        if (error) {
            res.write("file Not Found");
        }
        else {
            res.write(data);
        }
        res.end();

    });
    }

    else if(reg.method === "post")
    {

    }


//}
});





module.exports = router;
