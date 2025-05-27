// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
//soluotion 1, use {}, dic/dictionary, hashtable
// Failure
// Failure
// Failure
// Failure
// Failure

// let s = "abcabcbb";
// let l = 0;
// let max_len = 0;
// let  dic = {};


// for (let r = 0; r < s.length; r++) {
//     if (s[r] in dic){
//         dic[s[l]] -= 1;
//         l += 1;
//     }
//     max_len = Math.max(max_len, r - l + 1);
//     dic[s[r]] = r;

// }
// return max_len;


// Approved
// Approved
// Approved
// Approved
// Approved
// Approved

// let s = "abcabcbb";
// var lengthOfLongestSubstring = function(s) {
// let l = 0;
// let maxLen = 0;
// let  dic = {};

// for (let r = 0; r < s.length; r++) {
//     let element = s[r]
//     dic[element] = (dic[element] || 0) + 1;
//     //dic[element] is trying to access the value in the 'dic', object.
//     // if dic[element] is indefine, meaning 'element' is yet not a key., we choos 0.
//     //if dic[element] is indefine, 'element' key will be added auto at the end
//     //console.log(`${r}, ${element}, dic =${dic[element]}`) 

//     while (dic[element] > 1) {
//         dic[s[l]] -= 1;
//         l++;
//     }
//     maxLen = Math.max(maxLen, r - l + 1);

// };
// return maxLen;
// };





// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
//soluotion 2, using set

//Review 
//Review 
//Review 
//Review 
//Review 
//Review 

//var lengthOfLongestSubstring = function(s) {
//     let s = "abcabcbb";
//     let elementSet = new Set();
//     let l = 0;
//     let maxLen = 0;

//     for (let r = 0; r < s.length; r++) {
//         element = s[r];
//         console.log(`${element}`)
//         while (elementSet.has(element)) {
//             elementSet.delete(s[l]);
//             l++;
//         }
//         elementSet.add(element);
//         maxLen = Math.max(maxLen, r - l + 1);
//     }
//      return maxLen;

// //};