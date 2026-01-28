/*
 * name: Samuel Lavoie
 * CS364 - H2
 * Documentation: Used https://www.regular-expressions.info/email.html to help with email regex.
 * Used https://stackoverflow.com/questions/4050381/regular-expression-for-checking-if-capital-letters-are-found-consecutively-in-a#:~:text=Whenever%20one%20writes%20%5BA%2DZ%5D%20or,Lo%7D%20;%20eg:%20%C6%BB%D7%90%E1%8E%AF%E1%9A%A6%E4%BA%AC
 * to help with capital letter regex.
 * Used https://www.regular-expressions.info/backref.html#:~:text=Using%20Backreferences%20To%20Match%20The,such%20as%20non%2Dcapturing%20groups.
 * for number 8.
 * Used https://uibakery.io/regex-library/password for help with password regex.
 * Used https://regex101.com/ for regex validation.
 */ 

//1: match the word "hello"
const regex01 = /\bhello\b/;

//2: match phone numbers in the format (123) 456-7890
const regex02 = /\(\d{3}\) \d{3}-\d{4}/;

//3: match valid email addresses
const regex03 = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;

//4: find all words that start with a capital letter
const regex04 = /\b[A-Z][a-zA-Z]*\b/;

//5: match strings with any one of these characters: ; [, ], {, }, ^ 
const regex05 = /\b\w*[;\[\]\{\}\^]+\w*\b/;

//6: match dates in the format DD/MM/YYYY
const regex06 = /\b\d{2}\/\d{2}\/\d{4}\b/;

//7: find all words that are exactly 4 characters long
const regex07 = /\b\w{4}\b/;

//8: to find sequences where any character is repeated three or more times 
const regex08 = /(.)\1{2,}/;

//9: match URLs starting with http:// or https://
const regex09 = /\bhttps?:\/\/[\w].[^\s]*\b/;

//10: Validate a Password
const regex10 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/


