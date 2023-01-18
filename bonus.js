//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper leo, in consequat sapien. Vivamus bibendum quis est eu interdum. Nam in commodo sapien. Etiam non efficitur massa. Sed quis fermentum nisl. Vestibulum maximus vulputate metus a iaculis. Aenean ullamcorper condimentum iaculis. Aenean id augue ut lectus dapibus posuere vel in ligula. Donec sodales, nisl ac consectetur malesuada, nisi ante congue ex, a auctor erat sapien vel urna. Curabitur eget congue nibh. Ut id elit vel mi luctus molestie. Vestibulum porttitor viverra orci eu ullamcorper. Nam sed diam ac nunc efficitur lobortis at non diam. Nam condimentum semper enim, et feugiat dui semper eu. Donec convallis eget ante a sodales. Donec ut leo nunc. Mauris laoreet vestibulum sapien, at mattis enim vehicula non. Vestibulum volutpat dui vitae mattis lacinia. Morbi enim eros, tempor non hendrerit at, finibus id dui. Donec imperdiet, diam quis finibus maximus, nulla justo pharetra lorem, id posuere justo purus sit amet quam. Nullam commodo tempor porttitor. Donec sit amet ornare odio. Praesent id tristique dui, at faucibus justo.Suspendisse facilisis nulla at leo feugiat egestas. In id metus vel metus pulvinar laoreet. Morbi magna dolor, efficitur et tempor quis, interdum quis urna. Donec non pellentesque massa, at sagittis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pretium, velit laoreet lacinia mattis, nisl elit condimentum mauris, in lobortis mauris lorem sed nisi. Curabitur hendrerit leo nulla, vel scelerisque orci feugiat nec. Aenean non gravida sapien, vel pellentesque mi. Nunc sit amet hendrerit enim, non ornare nisl";

let spaceCount = "";

for (let i = 0; i < longText.length; i++) {    
    if (longText[i] === " ") {
        spaceCount++;     
    }
}
console.log(spaceCount + 1);


let etCount = "";

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " && longText[i+1] === "e" && longText[i+2] === "t" && longText[i+3] === " ") {
        etCount++; 
    }
}
console.log(etCount);

//Bonus 2

let phraseToCheck ="amor, roma";
let reversePhrase="";
let easyToCheck="";

for (let i = phraseToCheck.length-1; i >=0; i--) {    
    if(phraseToCheck[i]<="z" && phraseToCheck[i]>="a"){
        easyToCheck+=phraseToCheck[i];    
    }
}

for (let i = easyToCheck.length-1; i >=0; i--) {    
    reversePhrase+=easyToCheck[i];
    
}

console.log(easyToCheck.toUpperCase()===reversePhrase.toUpperCase() ? "It's a palindrome":"It's not a palindrome");