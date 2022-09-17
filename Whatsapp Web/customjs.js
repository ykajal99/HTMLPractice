var app = angular.module('myApp', []);
angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {Name : "Bhai", Image : " ", Text : "Yhi main h ", Time : "9:14 am"},
    {Name : "Didu", Image : " ", Text : "Hmmm sure..Byee ", Time : "8:30 am"},
    {Name : "Jiju", Image : " ", Text : "Isme edit kya karna h? ",  Time : "7:47 am"},
    {Name : "Shreya", Image : " ", Text : "Ye modi hame 15 rupaye kb bhejenge", Time : "yesterday"},
    {Name : "Kaveri", Image : " ", Text : "Same here yr", Time : "yesterday"},
    {Name : "Mummy", Image : " ", Text : "Aadhar card bhej diya h", Time : "08/09/2022"},
    {Name : "Sneha", Image : " ", Text : "I m happy for you", Time : "08/09/2022"},
    {Name : "Kiran", Image : " ", Text : "Yr ye hame government job kb lagegi?", Time : "07/09/2022"},
    {Name : "Keertana", Image : " ", Text : "Thank You", Time : "05/09/2022"},
    {Name : "Soumya", Image : " ", Text : "Chlo khush raho", Time : "03/09/2022"},
      
  ];
});