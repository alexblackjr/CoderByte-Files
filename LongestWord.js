/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. */

function LongestWord(sen) { 

  // code goes here  
  var sentence = sen.replace(/(\W+)/g, ' ');
  sen = sentence.replace(/\d+/g, '');
  var separateWord = sen.split(' ');
  var container = [];
  var bigger = 0;
  var wordContainer = " ";
 
   for(var i in separateWord){
       if(separateWord[i].length > bigger){
         bigger = separateWord[i].length;
         wordContainer = separateWord[i];
       }
   }sen = wordContainer;return sen; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());  