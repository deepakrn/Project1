app.controller('userProfileController', ['$scope', '$resource', function ($scope, $resource) {
  var UserProfile = $resource('/api/userProfile');
  console.log('userProfile:'+UserProfile); 

  $scope.createUserProfile = function () {
    var userProfile = new UserProfile();
    userProfile.first_name = $scope.firstName;
    userProfile.last_name = $scope.lastName;
    userProfile.id = null;
    userProfile.undergrad={};
    userProfile.grad={};
    userProfile.undergrad.college=$scope.undergrad_college;
    userProfile.undergrad.course=$scope.undergrad_course;
    userProfile.undergrad.gpa=$scope.undergrad_gpa;
    userProfile.grad.college=$scope.grad_college;
    userProfile.grad.course=$scope.grad_course;
    userProfile.grad.gpa=$scope.grad_gpa;
    userProfile.dob=$scope.dob;    
    console.log(userProfile);
    userProfile.$save(function (err,result) {
      if(err)
        console.log("error"+err);
      else
      console.log(result); 
    
    //window.location ="../";  
    });
  }
}]);