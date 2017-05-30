angular
.module('TottiApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  $http
  .get('localhost:3000/api/users')
  .then(response => {
    vm.users = response.data;

    console.log(vm.users);
  });
}
