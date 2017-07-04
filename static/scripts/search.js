
new Vue({
	el: '#search',
	data: {
		result: ''
	},
	methods: {
		launch: function launch(event) {
            var aid = event.target.getAttribute('a_id');
            var tvid = event.target.getAttribute('tv_id');
            location.href = 'iqiyi://mobile/player?aid=' + aid + '&tvid=' + tvid + '&ftype=27&to=3&url=' + encodeURIComponent(location.href);
        },
		getResult: function(){
			// $('.search-result').show();
			$('.search-section .search-button').css('color', '#6ba2ed');
			var key = $('.search-text')[0].value;
			console.log(key);
			var _self = this;
			$.get('/ajax/search?key=' + key, function(result){
				console.log(result);

				$('.search-section .search-button').css('color', '#000');
				_self.result = result.data;
			}, 'json')
		}
	}
})

var width = $(window).width();

$('.search-container').css('width', width);