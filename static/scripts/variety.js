$.get('/ajax/channel_detail?channel_name=综艺', function(variety_data){
    console.log(variety_data);
    new Vue({
        el: '#variety',
        data: {
            variety_name: variety_data.data.channelName,
            variety_video: variety_data.data.video_list
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
