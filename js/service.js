angular.module('UserService', [])
	/*.factory('UserAPIService', function($http) {

		UserAPIService = {
			registerUser: function(url, data) {
				return $http.post(url, data);
			}
		};

		return UserAPIService;
	})*/
	.service('UserAPIService', function($http) {

		this.callAPI = function(url, data) {
				return $http.post(url, data);
		};

	})
;

angular.module('TodoService', [])
	.service('TodoAPIService', function($http) {
		this.getToDos = function(url, data, token) {
			var header = "Authorization: JWT " + token;
			return $http.get(url, {params: {"username": data}}, header);
		};
		this.createToDos = function(url, data, token) {
			var header = "Authorization: JWT " + token;
			return $http.post(url, data, header);
		};
	})
;