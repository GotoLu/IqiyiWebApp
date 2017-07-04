var koa = require('koa');
var app = new koa();
var controller = require('koa-route');
var views = require('co-views');
var render = views('./views', {map: { html: 'ejs' }})
var koa_static = require('koa-static-server');

app.use(koa_static({
	rootDir: './static',
	rootPath: '/static',
	maxage: 0
}))

var aqiyi_service = require('./service/service.js');

app.use(controller.get('/route_test', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = 'hello koa-route!';
}));


app.use(controller.get('/mock/channel_list', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = aqiyi_service.get_mock_channel_list_data();
}));

app.use(controller.get('/mock/channel_detail', function* (){
    this.set('Cache-Control', 'no-cache');
    var qs = require('querystring');
    var params = qs.parse(this.req._parsedUrl.query);
    var channel_name = params.channel_name;
    this.body = aqiyi_service.get_mock_channel_detail_data(channel_name);
}));

app.use(controller.get('/mock/recommend', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = aqiyi_service.get_mock_recommend_data();
}));

app.use(controller.get('/', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('index', { title: '爱奇艺首页' });
}));

app.use(controller.get('/TV', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('TV', { title: '爱奇艺电视剧主页' });
}));

app.use(controller.get('/movie', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('movie', { title: '爱奇艺电影主页' });
}));

app.use(controller.get('/information', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('information', { title: '爱奇艺资讯主页' });
}));

app.use(controller.get('/variety', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('variety', { title: '爱奇艺综艺节目主页' });
}));

app.use(controller.get('/rank', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('rank', { title: '爱奇艺排行主页' });
}));

app.use(controller.get('/search', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('search', { title: '爱奇艺搜索主页' });
}));

app.use(controller.get('/video_detail', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('video_detail', { title: '视频详情' });
}));

app.use(controller.get('/ajax/channel_list', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield aqiyi_service.get_channel_list_data();
}));

app.use(controller.get('/ajax/channel_detail', function* (){
    this.set('Cache-Control', 'no-cache');
    var qs = require('querystring');
    var params = qs.parse(this.req._parsedUrl.query);
    var channel_name = params.channel_name;
    this.body = yield aqiyi_service.get_channel_detail_data(channel_name);
}));

app.use(controller.get('/ajax/recommend', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield aqiyi_service.get_recommend_data();
}));

app.use(controller.get('/ajax/rank', function* (){
    this.set('Cache-Control', 'no-cache');
    this.body = yield aqiyi_service.get_rank_data();
}));

app.use(controller.get('/ajax/search', function* (){
    this.set('Cache-Control', 'no-cache');
    var qs = require('querystring');
    var params = qs.parse(this.req._parsedUrl.query);
    var key = params.key;
    this.body = yield aqiyi_service.get_search_data(key);
}));

var port = 3000;
app.listen(port);
console.log('koa server is start!:: ' + port);
