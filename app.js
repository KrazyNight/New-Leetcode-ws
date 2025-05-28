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

//new
//new
//new
//new
//new
//new
//new
// LEETCODE : 1876. Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

//Yes
//Yes
//Yes
//Yes
//Yes
//Yes
//Yes correct

// var countGoodSubstrings = function(s) {
//     //s = "xyzzaz"
//     goodCount = 0;
//     //console.log(`s = ${s}, length = ${s.length}`)
//     //create a for loop, sliding window length 3
//     //no repeated characters, use a Set();
//     for (let i = 0; i <= s.length - 3; i++) {
//         const window = s.substring(i, i + 3);
//         const charSet = new Set(window);
//         //console.log(charSet);
//         if (charSet.size === 3) {
//             goodCount++;

//         }
//         //if () {}
//     }
//     //console.log(`${goodCount}`);
//     return goodCount;





// };

//WHY IS THIS WRONG
//FIX
//FIX
//FIX
//FIX
//FIX
//FIX

// var countGoodSubstrings = function(s) {
//   let l = 0;
//   let dic = {};
//   let countOfGoodSubstring = 0;

//   for (let r = 0; r < s.length; r++) {
//     const c = s[r];
//     dic[c] = (dic[c] || 0) + 1;

//     // If the current character is already in the window (duplicate)
//     if (dic[c] > 1) {
//       // Shrink the window until the duplicate is removed
//       while (dic[c] > 1) {
//         dic[s[l]]--;
//         l++;
//       }
//     }

//     // If the window size is 3 and all characters are distinct
//     if (r - l + 1 === 3) {
//       countOfGoodSubstring++;
//     }
//   }
//   return countOfGoodSubstring;
// };








// LEETCODE: 424. Longest Repeating Character Replacement
/** 
You are given a string s and an integer k.
You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
// Fix- Challenge
//var characterReplacement = function(s, k) {
    //Begin
    //Create a FOR LOOP, sliding window
    //sliding window has same chararacters, where you can add 2 more (k);
//     s = "ABAB";
//     k = 2;
//     let l = 0;
//     let maxLen = 0;
//     let maxFreq = 0; //same letters count
//     let dic = {}; //count dictionary

//     for (let r = 0; r < s.length; r++) {
//         c = s[r];
//         dic[c] = (dic[c] || 0) + 1;
//         maxFreq = Math.max(maxFreq, dic[c])
//         if ((r - l + 1) - maxFreq > k) {
//             s[l] -= 1;
//             l++;
//         }
//         return maxLen += 1;
//     }

// //};


/// correct Ans
/// correct Ans
/// correct Ans
/// correct Ans
/// correct Ans
/// correct Ans
/// correct Ans
/// correct Ans
// var characterReplacement = function(s, k) {
//     //Begin
//     //Create a FOR LOOP, sliding window
//     //sliding window has same chararacters, where you can add 2 more (k);
//     //s = "ABAB";
//     //k = 2;
//     let l = 0;
//     let maxLen = 0;
//     let maxFreq = 0; //same letters count
//     let dic = {}; //count dictionary

//     for (let r = 0; r < s.length; r++) {
//         c = s[r];
//         dic[c] = (dic[c] || 0) + 1;
//         maxFreq = Math.max(maxFreq, dic[c]);
//         while ((r - l + 1) - maxFreq > k) {
//             dic[s[l]] -= 1;
//             l++;
//         }
//         maxLen = Math.max(maxLen, r - l + 1);
//     }
//     return maxLen

// };
// console.log(`${characterReplacement}`)



