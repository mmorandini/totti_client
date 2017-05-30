angular
.module('TottiApp')
.controller('UserIndexCtrl', UserIndexCtrl);

UserIndexCtrl.$inject = ['User', '$http'];
function UserIndexCtrl(User, $http){
  const vm  = this;
  vm.users = User.query();
  
  $http
  .get('http://localhost:3000/api/users')
  .then(response => {
    vm.users = response.data;

    console.log(vm.users);
    console.log(vm.users[1].posts);
  });
  // vm.delete  = tasksDelete;
  //
  //
  // function tasksDelete(task) {
  //   Task
  //   .remove({ id: task._id })
  //   .$promise
  //   .then(() => {
  //     $state.go('tasksIndex');
  //   });
  // }

}
