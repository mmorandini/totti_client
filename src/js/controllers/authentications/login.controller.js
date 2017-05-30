angular
  .module('TottiApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService','$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
        if(vm.user){
          $state.go('home');
        }
      }, err => {
        console.log('LoginCtrl error: ', err);
      });
  };
}
