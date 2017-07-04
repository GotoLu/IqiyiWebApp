$.get('/ajax/channel_detail?channel_name=电影', function(movie_data){
    console.log(movie_data);
    new Vue({
        el: '#movie',
        data: {
            movie_name: movie_data.data.channelName,
            movie_video: movie_data.data.video_list
        },
        methods: {
        	launch: function launch(event) {
                var aid = event.target.getAttribute('a_id');
                var tvid = event.target.getAttribute('tv_id');
                location.href = 'iqiyi://mobile/player?aid=' + aid + '&tvid=' + tvid + '&ftype=27&to=3&url=' + encodeURIComponent(location.href);
            }
        }
    })
}, 'json')
