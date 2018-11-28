/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
    
    var score = 0;
    
    
    function mainScore(){
        
        if(score >= -5 && score <= -2){
            return "unhealthy";
        
        } else if (score <= -2 && score >= 2){
            return "avg";
            
        } else {
            return "healthy";
        }
        
    }
    
    function Salad_Pizza(response){
    
        if(response === "Pizza"){
          score = score - 2; 
          
        } else {
          score = score + 2;
          
        }
        
    }
    
    function Coke_Water(response){
        
        if(response === "Coke"){
          score = score - 2; 
          
        } else {
          score = score + 2;
          
        }
        
    }
    
    function Candy_Fruit(response){
        
        if(response === "Candy"){
          score = score - 1; 
          
        } else {
          score = score + 2;
          
        }
        
    }

});
