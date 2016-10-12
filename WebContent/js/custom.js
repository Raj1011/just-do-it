
angular.module('themeManagement').controller("themeController",['$scope','ngAudio',function($scope,ngAudio){
	
	$scope.theme=[{
		'themeName':'BlackBird',
		'themeIcon':'img/blackbird.jpg',
		'sideIcons':[{
			'iconId':1,
			'path':'img/star-icon.jpg',
			'status':true
		},{
			'iconId':2,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':3,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':4,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':5,
			'path':'img/star-icon.jpg',
			'status':false
		}],
		'audios':[{
			'name':'abc1',
			'path':'resource/abc.mp23'
		},{
			'name':'abc2',
			'path':'resource/abc.mp23'
		},{
			'name':'abc3',
			'path':'resource/abc.mp23'
		},{
			'name':'abc4',
			'path':'resource/abc.mp23'
		},{
			'name':'abc5',
			'path':'resource/abc.mp23'
		}]
	},{
		'themeName':'StarWars',
		'themeIcon':'img/starwars.jpg',
		'sideIcons':[{
			'iconId':1,
			'path':'img/star-icon.jpg',
			'status':true
		},{
			'iconId':2,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':3,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':4,
			'path':'img/star-icon.jpg',
			'status':false
		},{
			'iconId':5,
			'path':'img/star-icon.jpg',
			'status':false
		}],
		'audios':[{
			'name':'abc1',
			'path':'resource/abc.mp23'
		},{
			'name':'abc2',
			'path':'resource/abc.mp23'
		},{
			'name':'abc3',
			'path':'resource/abc.mp23'
		},{
			'name':'abc4',
			'path':'resource/abc.mp23'
		},{
			'name':'abc5',
			'path':'resource/abc.mp23'
		}]
	},{
		'themeName':'OneDay',
		'themeIcon':'img/oneday.jpg',
		'sideIcons':[{
			'iconId':1,
			'path':'img/trngle-icon.jpg',
			'status':true
		},{
			'iconId':2,
			'path':'img/trngle-icon.jpg',
			'status':false
		},{
			'iconId':3,
			'path':'img/trngle-icon.jpg',
			'status':false
		},{
			'iconId':4,
			'path':'img/trngle-icon.jpg',
			'status':false
		},{
			'iconId':5,
			'path':'img/trngle-icon.jpg',
			'status':false
		}],
		'audios':[{
			'name':'abc1',
			'path':'resource/abc.mp23'
		},{
			'name':'abc2',
			'path':'resource/abc.mp23'
		},{
			'name':'abc3',
			'path':'resource/abc.mp23'
		},{
			'name':'abc4',
			'path':'resource/abc.mp23'
		},{
			'name':'abc5',
			'path':'resource/abc.mp23'
		}]
	},{
		'themeName':'Orchestra',
		'themeIcon':'img/orchestra.png',
		'sideIcons':[{
			'iconId':1,
			'path':'img/circle-icon.jpg',
			'status':true
		},{
			'iconId':2,
			'path':'img/circle-icon.jpg',
			'status':false
		},{
			'iconId':3,
			'path':'img/circle-icon.jpg',
			'status':false
		},{
			'iconId':4,
			'path':'img/circle-icon.jpg',
			'status':false
		},{
			'iconId':5,
			'path':'img/circle-icon.jpg',
			'status':false
		}],
		'audios':[{
			'name':'abc1',
			'path':'resource/abc.mp23'
		},{
			'name':'abc2',
			'path':'resource/abc.mp23'
		},{
			'name':'abc3',
			'path':'resource/abc.mp23'
		},{
			'name':'abc4',
			'path':'resource/abc.mp23'
		},{
			'name':'abc5',
			'path':'resource/abc.mp23'
		}]
	}]
	

	
	$scope.selectedTheme=$scope.theme[0]
	$scope.changeTheme=function(themeName){
		
		for(var i=0;i<$scope.theme.length;i++)
			{
			if($scope.theme[i].name==themeName)
				$scope.selectedTheme=$scope.theme[i];
			}
	}
	
	
}]);


angular.module('themeManagement').controller('audio1Controller')['$scope','ngAudio',function($scope,ngAudio){
	$scope.songs=[{
		'name':'Years  (Vocal Extended Mix)',
		'singer':'Alesso',
		'path':'/resources/english/Alesso feat. Matthew Koma - Years  (Vocal Extended Mix) (320  kbps).mp3'
	},
	{
		'name':'What a wonderful world',
		'singer':'Axwell and Bib Sinclar',
		'path':'/resources/english/Bob+Sinclar-2C+Axwell+-26amp-3B+Ron+Carroll+-+-26-23039-3BWhat+a+Wonderful+World-26-23039-3B+Official+Music+Video.mp3'
	},{
		'name':'Sexy Bitch(HQ)',
		'singer':'David Guetta ft. Akon',
		'path':'/resources/english/David Guetta ft Akon - Sexy Bitch (HQ).mp3'
	},{
		'name':'Hold that Sucker Down',
		'singer':'David Vendetta',
		'path':'/resources/english/OT.+Quartet+-+Hold+that+sucker+down.mp3'
	}]
	
	$scope.play_A(title){
		
	}
	$scope.play_B(title){
		
	}
}];
