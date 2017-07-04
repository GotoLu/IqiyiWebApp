$.get('/ajax/rank', function(rank_data){
    console.log(rank_data);
    new Vue({
        el: '#rank',
        data: {
            rank_information_name: rank_data.data[1].channel_name,
            rank_information_video: rank_data.data[1].video_list,

            rank_TV_name: rank_data.data[2].channel_name,
            rank_TV_video: rank_data.data[2].video_list,

            rank_movie_name: rank_data.data[3].channel_name,
            rank_movie_video: rank_data.data[3].video_list,

            rank_variety_name: rank_data.data[4].channel_name,
            rank_variety_video: rank_data.data[4].video_list
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
