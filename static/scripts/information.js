$.get('/ajax/channel_detail?channel_name=资讯', function(information_data){
    console.log(information_data);
    new Vue({
        el: '#information',
        data: {
            information_name: information_data.data.channelName,
            information_video: information_data.data.video_list
        }
    })
}, 'json')
