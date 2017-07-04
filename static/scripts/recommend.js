
// $.get('/ajax/channel_list', function(data_list){
//     console.log(data_list);
//         $.get('/ajax/channel_detail?channel_name=' + data_list.data[0].desc, function(data_detail){
//             console.log(data_detail);
//             var app = new Vue({
//                 el: '#app',
//                 data: {
//                     channel_name : data_detail.data.channelName,
//                     channel_info : data_detail.data.video_list
//                 },
//                 mounted:function(){
//                     console.log("挂载完成，延迟更换！")
//                     var _self = this;
//                     setTimeout(function(){
//                         console.log(_self);
//                         $.get('/ajax/channel_detail?channel_name=' + data_list.data[2].desc, function(data_detail){
//                             // data_detail = JSON.parse(data_detail);
//                             console.log(data_detail);
//                             _self.channel_name = data_detail.data.channelName;
//                             _self.channel_info = data_detail.data.video_list;
//                         })
//                     }, 3000)
//                 }
//             })
//         }, 'json')
// }, 'json');
