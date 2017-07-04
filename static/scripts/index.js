
$.get('/ajax/recommend', function(recommend_data){
    console.log(recommend_data);
    new Vue({
        el: '#app',
        data: {
            recommend_carousel: recommend_data.data[0].video_list,
            recommend_information: recommend_data.data[1],
            recommend_TV: recommend_data.data[2],
            recommend_movie: recommend_data.data[3],
            recommend_variety: recommend_data.data[4]
        },
        methods:{
            toSearch: function(){
                location.href = "/search";
            },
            toTV: function(){
                location.href = "/TV";
            },
            toMovie: function(){
                location.href = "/movie";
            },
            toRank: function(){
                location.href = "/rank";
            },
            launch: function launch(event) {
                var aid = event.target.getAttribute('a_id');
                var tvid = event.target.getAttribute('tv_id');
                location.href = 'iqiyi://mobile/player?aid=' + aid + '&tvid=' + tvid + '&ftype=27&to=3&url=' + encodeURIComponent(location.href);
            }
        }
    })
}, 'json')

var width = $(window).width();
var allImgWidth = width*5;

$('.container').css("width", width);
$('.carousel li').css("width", width);
$('.carousel .img-container').css("width", allImgWidth);
var cnt = width;
var x;

setInterval(function(){
    $('.carousel li').css("transition-duration", "0.5s");
    cnt-=width;
    x = cnt + "px";
    if(cnt <= -width*5){
        cnt = 0;
        x = cnt + "px";
        $('.carousel li').css("transition-duration", "0s");
    }
    $('.carousel li').css("transform", "translate3d("+ x +", 0px, 0px)") ;
}, 3000)

