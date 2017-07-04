
var fs = require('fs');
exports.get_mock_channel_list_data = function(){
    var content = fs.readFileSync('./mock/channel_list.json', 'utf-8');
    return content;
}

exports.get_mock_channel_detail_data = function(channel_name){
    var content = fs.readFileSync('./mock/channel_detail/' + channel_name + '.json', 'utf-8');
    return content;
}

exports.get_mock_recommend_data = function(){
    var content = fs.readFileSync('./mock/recommend.json', 'utf-8');
    return content;
}

var data = {
    app_k: 'f0f6c3ee5709615310c0f053dc9c65f2',
    app_v: 8.4,
    app_t: 0,
    platform_id: 12,
    dev_os: '10.3.1',
    dev_ua: 'iPhone9,3',
    dev_hw: '{"cpu":0,"gpu":"","mem":"50.4MB"}',
    net_sts: 1,
    scrn_sts: 1,
    scrn_res: '1334*750',
    scrn_dpi: 153600,
    qyid: '87390BD2-DACE-497B-9CD4-2FD14354B2A4',
    secure_v: 1,
    secure_p: 'iPhone',
    core: 1,
    req_sn: 1493946331320,
    req_times: 1
}

function httpRequest(http_req, cb){
    var http = require('http');

    var req_obj = http.request(http_req, function(_res){
        var content = '';
        _res.on('data', function(chunk){
            content += chunk;
        })
        _res.on('end', function(){
            cb(null, content);
        })
    })

    req_obj.on('error', function(e){
        console.log(e);
    })

    req_obj.end();
}

exports.get_channel_list_data = function(channel_name){
    return function(cb){
        var channel_data = {
            type: 'list',
            version: 7.5,
        }
        var qs = require('querystring');

        channel_data= Object.assign(channel_data, data);

        channel_content = qs.stringify(channel_data);

        var http_req = {
            hostname: 'iface.qiyi.com',
            // port: 80;
            path: '/openapi/batch/channel?' + channel_content
        }
        httpRequest(http_req, cb);
    }

}

exports.get_channel_detail_data = function(channel_name){
    return function(cb){
        var channel_data = {
            type: 'detail',
            channel_name: channel_name,
            mode: 11,
            is_purchase: 2,
            page_size: 30,
            version: 7.5,
        }
        var qs = require('querystring');

        channel_data= Object.assign(channel_data, data);

        channel_content = qs.stringify(channel_data);

        var http_req = {
            hostname: 'iface.qiyi.com',
            // port: 80;
            path: '/openapi/batch/channel?' + channel_content
        }
        httpRequest(http_req, cb);
    }

}

exports.get_recommend_data = function(){
    return function(cb){
        var channel_data = {}
        var qs = require('querystring');

        channel_data= Object.assign(channel_data, data);

        channel_content = qs.stringify(channel_data);

        var http_req = {
            hostname: 'iface.qiyi.com',
            // port: 80;
            path: '/openapi/batch/recommend?' + channel_content
        }
        httpRequest(http_req, cb);
    }
}

exports.get_rank_data = function(){
    return function(cb){
        var channel_data = {}
        var qs = require('querystring');

        channel_data= Object.assign(channel_data, data);

        channel_content = qs.stringify(channel_data);

        var http_req = {
            hostname: 'iface.qiyi.com',
            // port: 80;
            path: '/openapi/realtime/recommend?' + channel_content
        }
        httpRequest(http_req, cb);
    }
}

exports.get_search_data = function(key){
    return function(cb){
        var channel_data = {
            key: key,
            from: "mobile_list",
            page_size: 30,
            version: 7.5,
        }
        var qs = require('querystring');

        channel_data= Object.assign(channel_data, data);

        channel_content = qs.stringify(channel_data);

        var http_req = {
            hostname: 'iface.qiyi.com',
            // port: 80;
            path: '/openapi/batch/search?' + channel_content
        }
        httpRequest(http_req, cb);
    }
}