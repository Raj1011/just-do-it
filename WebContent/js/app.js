
angular.module('themeManagement', ['ui.router','ngAudio']);

angular.module('themeManagement').config(function($stateProvider, $urlRouterProvider) {
 
	$urlRouterProvider.otherwise('/home');
	$stateProvider
   // HOME STATES AND NESTED VIEWS ========================================
 /*  .state('home', {
       url: '/home',
       templateUrl: 'home.html'
   })
   */
   .state('soundMixer', {
       url: '/soundMixer',
       templateUrl: 'soundMixer.html'
       
   })
   .state('mashup', {
       url: '/mashup',
       templateUrl: 'mashup.html'
   })
   // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
   .state('about', {
       // we'll get to this in a bit       
   });
	
});

angular.module('themeManagement').controller("audioController",['$scope','ngAudio', function($scope,ngAudio){
	$scope.songs=[{
		'type':'Bollywood',
		'songList':[{
			'title':'Awari (Ek Villian)',
			'singer':'Adnan Dhool, Momina Mustehsan',
			'path':'\'resources/bollywood/Awari (Ek Villian).mp3\''
		},{
			'title':'Ek Villian Mashup',
			'singer':'Adnan Dhool, Momina Mustehsan',
			'path':'\"resources/bollywood/Ek Villian Mashup.mp3\"'
		},{
			'title':'Party Night With Dj Waley Babu',
			'singer':'Badshah,Aastha Gill',
			'path':'\"resources/bollywood/Party Night With Dj Waley Babu.mp3\"'
		},{
			'title':'Sab Tera (Baghi)',
			'singer':'Armaan Malik',
			'path':'\"resources/bollywood/Sab Tera (Baghi).mp3\"'
		},{
			'title':'Ye Fitoor Mera (Fitoor)',
			'singer':'Arjit Singh',
			'path':'\"resources/bollywood/Ye Fitoor Mera (Fitoor).mp3\"'
		}]
	},{
		'type':'English',
		'songList':[{
			'title':'Years  (Vocal Extended Mix)',
			'singer':'Alesso',
			'path':'/resources/english/Alesso feat. Matthew Koma - Years  (Vocal Extended Mix) (320  kbps).mp3'
		},{
			'title':'What a wonderful world',
			'singer':'Axwell and Bib Sinclar',
			'path':'/resources/english/Bob+Sinclar-2C+Axwell+-26amp-3B+Ron+Carroll+-+-26-23039-3BWhat+a+Wonderful+World-26-23039-3B+Official+Music+Video.mp3'
		},{
			'title':'Sexy Bitch(HQ)',
			'singer':'David Guetta ft. Akon',
			'path':'/resources/english/David Guetta ft Akon - Sexy Bitch (HQ).mp3'
		},{
			'title':'Hold that Sucker Down',
			'singer':'David Vendetta',
			'path':'/resources/english/OT.+Quartet+-+Hold+that+sucker+down.mp3'
		}]
	},{
		'type':'Punjabi',
		'songList':[{
			'title':'Tamanna Meri Ft. Jassi Gill',
			'singer':'Jassi Gill',
			'path':'/resources/punjabi/Tamanna Meri Ft. Jassi Gill.mp3'
		},{
			'title':'Rim Jhim -Khan Saab Ft. PavDharia',
			'singer':'Pav Dharia',
			'path':'/resources/punjabi/Rim Jhim -Khan Saab Ft. PavDharia.mp3'
		},{
			'title':'Rang Sanwla (Aarsh Benipal)',
			'singer':'Aarsh Benipal',
			'path':'/resources/punjabi/Rang Sanwla (Aarsh Benipal).mp3'
		},{
			'title':'Ambrsariya.mp3',
			'singer':'Diljit Doshanjh',
			'path':'/resources/punjabi/Ambrsariya.mp3'
		},{
			'title':'Punjabi Songs Mashup',
			'singer':'Remix',
			'path':'/resources/english/Punjabi Songs Mashup.mp3'
		}]
	}];
	
	$scope.selectedSongList=$scope.songs[0].songList;
	$scope.selectSongList=function(songType){
		alert(songType);
		for(var i=0;i<$scope.songs.length;i++)
		{	
			if($scope.songs[i].type==songType)
				$scope.selectedSongList=$scope.songs[i].songList;
		}
	};
	$scope.songA= ngAudio.load($scope.songs[0].songList[0].path);
	$scope.songA_title=$scope.songs[0].songList[0].title;
	$scope.songA_singer=$scope.songs[0].songList[0].singer;
	$scope.play_A=function(title,songList){
		//alert(title);
		//alert(songList);
		for(var i=0;i<songList.length;i++){
			if(title==songList[i].title)
				{
				alert(songList[i].path);
					$scope.songA=ngAudio.load(songList[i].path);
					$scope.songA_title=songList[i].title;
					$scope.songA_singer=songList[i].singer;				
				}
		}
	};
	
	$scope.songB= ngAudio.load($scope.songs[1].songList[0].path);
	$scope.songB_title=$scope.songs[1].songList[0].title;
	$scope.songB_singer=$scope.songs[1].songList[0].singer;
	$scope.play_B=function(title,songList){
		//alert(title);
		//alert(songList);
		for(var i=0;i<songList.length;i++){
			if(title==songList[i].title)
				{
				alert(songList[i].path);
					$scope.songB=ngAudio.load(songList[i].path);
					$scope.songB_title=songList[i].title;
					$scope.songB_singer=songList[i].singer;				
				}
		}
	};

}])
