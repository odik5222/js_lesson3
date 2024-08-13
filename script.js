// 1
let text2 = "   Hello, World, This is, Javascript,  ";

text2 = text2.toLowerCase().trim().replaceAll(',' , '.')

console.log(text2 , "Длина текста -" , text2.length  );


// 2
let text3 = "JavaLang, TypeLang, CoffeeLang";

text3 = text3.replaceAll('Lang' , 'Script')

console.log(text3);

//3

let text4 = " is a programming language"

text4 = text4.replace(' ' , 'Javascript ') 

console.log(text4);

// 4

let email = "TylerRake@teST.com"

email = email.replace('TylerRake@teST.com' , 'TylerRake.com')

console.log(email);