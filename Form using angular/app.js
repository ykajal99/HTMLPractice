var myApp = angular.module("myApp", []);
myApp.service("ContactService" , function(){
	var uid = 1;
	var contacts = [{
		  'id' : 0,
				 'fname' : '',
				 'lname' : '',
				 'email' : ''}];	
				
    this.save = function(contact)  
	{
		if(contact.id == null)                       
		{
			contact.id = uid++;
			contacts.push(contact);
		}
		else
		{
			for(var i in contacts)
			{
				if(contacts[i].id == contact.id)
				{
					contacts[i] = contact;
				}
			}
		}
	};
	
	// serach for a contact
	
	this.get = function(id)
	{
		for(var i in contacts )
		{
			if( contacts[i].id == id)
			{
				return contacts[i];
			}
		}
	};
	
	//Add a contact
	this.add = function(id)
	{
		for(var i in contacts)
			{
				if(contacts[i].id == id)
				{
					contacts.splice(i,1);
				}
			}
	};	
	//Show all contacts
	this.list = function()
	{
		return contacts;
	}	;	
});

////Controller area .....
	
myApp.controller("ContactController" , function($scope , ContactService){
    console.clear();
    
    $scope.ifSearchUser = false;
    $scope.title ="List of Users";
    
		$scope.contacts = ContactService.list();
		
		$scope.saveContact = function()
		{
		  console.log($scope.newcontact);
		  if($scope.newcontact == null || $scope.newcontact == angular.undefined)
		  return;
			ContactService.save($scope.newcontact);
			$scope.newcontact = {};
		};		
		$scope.add = function(id)
		{
			ContactService.add(id);
			if($scope.newcontact != angular.undefined && $scope.newcontact.id == id)
				{
					$scope.newcontact = {};
				}
		};	
		$scope.RefreshUser = function (id) {
			UserID = $scope.users[id].Id;
			$http.refresh('/api/users/' + UserID).success(function (data) {
			   (function (data) {
				$scope.error = "error " + data;
			});
		
		}	
});