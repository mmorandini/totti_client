angular
.module('TottiApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  $http
  .get('http://localhost:3000/users')
  .then(response => {
    vm.users = response.data;

    console.log(vm.users);
    console.log(vm.users[1].posts);
  });
}
