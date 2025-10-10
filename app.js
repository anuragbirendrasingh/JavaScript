let s = "A man, a plan, a canal: Panama"
let ans = ""

for(let i = 0;i<s.length;i++){
       let ch = s[i];
       if(
        (ch >='a' && ch <= 'z') ||
        (ch >='A' && ch <= 'Z')
       ){
        ans+=ch;
       }
}
console.log(ans);



