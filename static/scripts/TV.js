$.get('/ajax/channel_detail?channel_name=电视剧', function(TV_data){
    console.log(TV_data);
    new Vue({
        el: '#TV',
        data: {
            TV_name: TV_data.data.channelName,
            TV_video: TV_data.data.video_list
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
