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






//LEETCODE 76. Minimum Window Substring
/** 
Given two strings s and t of lengths m and n respectively,
return the minimum window substring of s such that every character 
in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
*/


// I don't know why it failes, 
//Failed
//Failed
//Failed
//Failed
//Failed
//Failed

/** 
var minWindow = function(s, t) {
    if (s.length < t.length) return "";
    // create a slidind window
    // record only when all characters of string 't' that are in window
    // keep track of minimum window
    // If there is no such substring, return the empty string "".
    const dicS = { };
    const dicT = {};
    let l = 0;
    let r = 0;
    let minLen = Infinity;
    let minL = 0; //Keeps track of l index of the minimum window found so far.
    //minL => minStart: Keeps track of the starting index of the minimum window found so far.
    //when will i need it
    let have = 0;  //Number of characters fully matched, (s,t)
    let need = t.length //correct:  let need = Object.keys(dicT).length;
    //let need = Object.keys(dicT).length;


    for (let r of t) {
        //"for...of" iterates over the values of an iterable object. 
        //Iterating over characters in a string.
        dicT[r] = (dicT[r] || 0) + 1; //auto rec. in dic, both key: value
    };
    // NOW I have the dic of the elements/character and Freq/ count


    for (let r = 0; r < s.length; r++) {
        let element = s[r];
        dicS[element] = (dicS[element] || 0) + 1;
        //return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 

        if (element in dicT && dicS[element] === dicT[element]) {
            // ABOVE: && dicS[element] === dicT[element]
            // it states if element/character 'value'/Freq/count are the same
            have += 1;
        }

        // Step 4: When all characters are matched, try shrinking the window
        // while have  == number of unique characters in t:
        while (have === need) {
            if((r - l + 1) < minLen) {
                minLen = Math.min(minLen, r - l + 1);
                minL = l;
            }
            dicS[s[l]] -= 1;
            if (s[l] in dicT && dicS[s[l]] < dicT[s[l]]) {
                have -= 1;
            }
            l++;
        }

    }
    return minLen !== Infinity ? s.substring(l, r + 1) : "";
    
};
*/



// Succesful Failure
// Succesful Failure
// Succesful Failure
// Succesful Failure
// Succesful Failure
// Succesful Failure
// Succesful Failure
// Succesful Failure
/**
 * LEETCODE 76.
 
AI I Don't Understand this !!!!
How to fix
res = [l, r]; // i do know understan this code

var minWindow = function(s, t) {
    if (s.length < t.length) return "";

        const dicT = {};
        const dicS = {};
        let have = 0; //Number of characters fully matched, (s,t)
        let need = t.length; //correct:  let need = Object.keys(dicT).length;
        let res = [-1, -1];
        let minLen = Infinity;
        let l = 0;

        for (const c of t) {
            dicT[c] = (dicT[c] || 0) + 1;
        }


        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            dicS[c] = (dicS[c] || 0) + 1;

            if (c in dicT && dicS[c] === dicT[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < minLen) {
                    res = [l, r]; // i do know understan this code
                    minLen = r - l + 1;
                }
                dicS[s[l]]--;
                if (s[l] in dicT && dicS[s[l]] < dicT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        l = res[0];
        r = res[1];
        return minLen !== Infinity ? s.substring(l, r + 1) : "";
    
};
 */



// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans
// correct Ans


// var minWindow = function (s, t) {
//     if (t.length > s.length) return "";

//     let tMap = new Map();
//     let sMap = new Map();

//     // Store frequency of characters in t; 
//     for (let char of t) {
//         /**
//         "for...of" iterates over the values of an iterable object. 
//         Iterating over characters in a string.
//          */
//         tMap.set(char, (tMap.get(char) || 0) + 1); // { a: 1, b: 1, c: 1 }
//         /**
//         Map objects:
//         The .set() method is used to add or update key-value pairs in a Map object.
//         */
//     }

//     let left = 0;
//     let right = 0;
//     let have = 0;    // How many characters matched, (s,t)
//     let need = tMap.size; // Total unique characters in t      //   3
//     let resRangeLR = [-1, -1]; //initial placeholder, 
//     //result array could store the starting and ending indices of the range
//     /**
    
//     let result = [-1, -1]; is typically used as an initial placeholder or default value for storing the result of a search or lookup operation where a pair of indices or positions are expected. 
//     Here are some common scenarios where this code might be used:
// Finding the first and last occurrence of an element:
// In algorithms that search for the first and last position of a specific item within an array, the result array is initialized to [-1, -1]. If the element is not found, the result will remain [-1,-1], indicating that the element is absent. If found, the indices will be updated to the first and last position.

// Range searches:
// When searching for a range of values or a particular interval within an ordered collection, the result array could store the starting and ending indices of the range. If no such range is found, the initial [-1, -1] value remains.
    
//      */
//     let minLength = Infinity;

//     // >>>>>  // A D O B E C O D E B A N C
//     while (right < s.length) {
//         // Expand the window by adding s[right]
//         let char = s[right];
//         sMap.set(char, (sMap.get(char) || 0) + 1);

//         //  >>>>> //  { a: 1, d: 0 , o: 0, b: 0, e: 0, c: 1, n: 1 }

//         // If the current character count matches the required count, increase 'have'
//         if (tMap.has(char) && sMap.get(char) === tMap.get(char)) {
//             have++;
//         }

//         // Now try to shrink the window
//         while (have === need) {
//             // Update the resRangeLR if the current window is smaller
//             if ((right - left + 1) < minLength) {
//                 resRangeLR = [left, right];
//                 minLength = (right - left + 1);
//             }

//             // Shrink the window from the left
//             let leftChar = s[left];
//             sMap.set(leftChar, sMap.get(leftChar) - 1); //this shrinks window
//             if (tMap.has(leftChar) && sMap.get(leftChar) < tMap.get(leftChar)) {
//                 have--;
//             }
//             left++; //this shrinks window, l pointer
//         }
//         right++; // this is added b/c r pointer need to iterate through s.length
//         // 
//     }

//     // If no valid window is found
//     if (resRangeLR[0] === -1) return "";

//     // Return the minimum window substring
//     return s.substring(resRangeLR[0], resRangeLR[1] + 1); 
//     // range beg. w/ 0 index, so add + 1;

// };
/** 
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    let tMap = new Map();
    let sMap = new Map();

    
    for (let char of t) {       
        tMap.set(char, (tMap.get(char) || 0) + 1);      
    }

    let left = 0;
    let right = 0;
    let have = 0;   
    let need = tMap.size; 
    let resRangeLR = [-1, -1];  
    let minLength = Infinity;

    while (right < s.length) {
        let char = s[right];
        sMap.set(char, (sMap.get(char) || 0) + 1);

        if (tMap.has(char) && sMap.get(char) === tMap.get(char)) {
            have++;
        }
        
        while (have === need) {      

            if ((right - left + 1) < minLength) {
                resRangeLR = [left, right];
                minLength = (right - left + 1);
            }

            let leftChar = s[left];
            sMap.set(leftChar, sMap.get(leftChar) - 1); 

            if (tMap.has(leftChar) && sMap.get(leftChar) < tMap.get(leftChar)) {
                have--;
            }
            
            left++; 
        }
        right++;   
    }    
    if (resRangeLR[0] === -1) return "";

    return s.substring(resRangeLR[0], resRangeLR[1] + 1); 
};
*/

//LEETCODE 76. Minimum Window Substring
/** 
Given two strings s and t of lengths m and n respectively,
return the minimum window substring of s such that every character 
in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
*/


var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    let tMap = new Map();
    let sMap = new Map();

    for (let c of t) {
        tMap.set(c, (tMap.get(c) || 0) + 1)
    }

    let left = 0;
    let right = 0;
    let have = 0;
    let need = tMap.size;
    let resRangeLR = [-1, -1];
    let minLength = Infinity;
    

};