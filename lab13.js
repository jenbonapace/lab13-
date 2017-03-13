var app = angular.module('myModule');

app.controller('myController', function($scope){
  $scope.emptyList=[];
  $scope.wordList=["cat","dog","cow","pig","horse","chicken","goat"];
  $scope.styles=["red", "pink", "blue", "size1",'size2','size3'];
  $scope.phrases=["Be Happy","Live Well, Eat Well","Grumpy","Sneezy","Sleepy"];
  // var firstWord=0;
  // var random=0;

  $scope.fancyPhrase=function(){
    var fancy = {
      word: $scope.phrases[Math.floor(Math.random()*$scope.phrases.length)],
      styling:  $scope.styles[Math.floor(Math.random()*$scope.styles.length)]
    };
    console.log(fancy);
    $scope.emptyList.push(fancy);
  };
  $scope.addPhrase=function(){
    var fancy = {
      word: $scope.phrases[Math.floor(Math.random()*$scope.phrases.length)],
      styling: ''
    };
    console.log(fancy);
    $scope.emptyList.push(fancy);
  };
  $scope.addWord=function(){
    var fancy = {
      word: $scope.wordList[Math.floor(Math.random()*$scope.wordList.length)],
      styling: ''
    };
    console.log(fancy);
    $scope.emptyList.push(fancy);
  };

  $scope.addFancyWord=function(){
    var fancy = {
      word: $scope.wordList[Math.floor(Math.random()*$scope.wordList.length)],
      styling: $scope.styles[Math.floor(Math.random()*$scope.styles.length)]
    };
    console.log(fancy);
    $scope.emptyList.push(fancy);
  };
  $scope.clicked = function() {
      if ($scope.emptyList) {
        $scope.wordList.push(wordList)}
}
});
