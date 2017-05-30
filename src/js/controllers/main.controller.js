angular
.module('TottiApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope','CurrentUserService','$state'];
function MainCtrl($rootScope,CurrentUserService,$state) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    // $state.go('tasksIndex'); //needs to be fixed
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });


}
