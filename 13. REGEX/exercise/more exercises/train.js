let text = ["Cash$$$$$$Ca$$$$$$sh, $$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey, validticketnomatch:("]
text = text[0].split(", ").map(x => x.trim());
let pattern = /(?=.{20}).*?(?=(?<ch>[\@\#\$\^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
for (let ticket of text) {
    let valid = pattern.exec(ticket);
    if(valid){
        
    }else{
        console.log('NO');
    }
}
console.log(text);