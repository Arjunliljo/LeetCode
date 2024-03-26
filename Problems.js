
//344.1 Reverse String
var reverseString = function (s) {

    // return s.reverse();

    let start = 0;
    let end = s.length - 1;

    while (start < end) {

        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
    return s;
};

//709.2 To Lower Case
var toLowerCase = function (s) {

    let result = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] <= 'Z' && s[i] >= 'A') {

            result += String.fromCharCode(s[i].charCodeAt(0) + 32);
        }
        else
            result += s[i];
    }

    return result;
};

//2744.3 Find Maximum Number of String Pairs
var maximumNumberOfStringPairs = function (words) {

    return words.reduce((acc, s, i) => {

        if (i === words.length - 1) return acc;

        for (let j = i + 1; j < words.length; j++) {

            if (s === reverse(words[j])) acc++;
        }
        return acc;
    }, 0);

    function reverse(s) {

        let reversed = '';

        for (let i = s.length - 1; i >= 0; i--) {

            reversed += s[i];
        }
        return reversed;
    }
};
//1844.4 Replace All Digits with Characters
var replaceDigits = function (s) {

    const shift = (char, num) => String.fromCharCode(char.charCodeAt(0) + Number(num));

    let result = '';

    for (let i = 0; i < s.length - 1; i += 2) {

        let shifted = shift(s[i], s[i + 1]);

        result += s[i] + (shifted ? shifted : '');
    }
    return s.length % 2 !== 0 ? result.concat(s.at(-1)) : result;
};


//1309.5 Decrypt String from Alphabet to Integer Mapping
var freqAlphabets = function (s) {

    const decrypt = (val) => String.fromCharCode('a'.charCodeAt(0) + Number(val) - 1);

    s = s.split('');

    const ans = [];

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] === '#') {

            ans.unshift(s[i - 2] + s[i - 1]);

            i -= 2;

            continue;
        }

        ans.unshift(s[i]);
    }
    return ans.reduce((acc, val) => acc + decrypt(val), '');
};



//944.6 Delete Columns to Make Sorted
var minDeletionSize = function (strs) {
    const createCol = (num) => {
        let col = '';
        for (let i = 0; i < strs.length; i++) {
            col += strs[i][num];
        }
        return col;
    }

    const isSorted = (col) => {
        for (let i = 0; i < col.length - 1; i++) {
            if (col[i] > col[i + 1])
                return false;
        }
        return true;
    }
    const columns = strs[0].length;

    // gpt helped
    const grid = Array.from({ length: columns }, (_, i) => createCol(i));

    return grid.reduce((acc, val) => (isSorted(val) ? acc : acc + 1), 0);
};


//2553.7 Separate the Digits in an Array
var separateDigits = function (nums) {

    const splitNum = (num) => {

        const ans = [];

        while (num > 0) {

            ans.unshift(num % 10);

            num = Math.trunc(num / 10);
        }

        return ans;
    }

    const ans = nums.map(digit => {

        if (digit < 10) return digit;

        return splitNum(digit);
    })

    return ans.flat();
};


//1684.8 Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {

    return words.reduce((acc, word) => {

        for (let i = 0; i < word.length; i++) {
            if (!allowed.includes(word[i])) return acc;
        }

        return acc + 1;
    }, 0)
};

//2733.9 Neither Minimum nor Maximum
var findNonMinOrMax = function (nums) {

    if (nums.length <= 2) return -1;

    const max = Math.max(...nums);

    const min = Math.min(...nums);

    return nums.find((val) => val !== min && val !== max);
};

//1351.10 Count Negative Numbers in a Sorted Matrix
var countNegatives = function (grid) {

    function negCount(arr) {

        let start = 0;
        let end = arr.length - 1;
        let target;


        if (arr[end] >= 0) return 0;

        if (arr[start] < 0) return arr.length;

        while (start <= end) {

            let mid = Math.trunc((start + end) / 2)

            if (arr[mid - 1] >= 0 && arr[mid] < 0) {
                target = mid;
                break;
            }

            if (arr[mid] >= 0) start = mid + 1;

            if (arr[mid] < 0) end = mid - 1;

        }

        if (target) return arr.length - (target);

        return -1;
    }
    return grid.reduce((acc, arr) => {

        if (negCount(arr) > 0) return acc + negCount(arr);

        return acc;
    }, 0)
};

//2706.11 Buy Two Chocolates
var buyChoco = function (prices, money) {

    prices.sort((a, b) => a - b);

    const total = prices[0] + prices[1];

    if (total <= money) return money - total;

    return money;
};

//2057.12 Smallest Index With Equal Value
var smallestEqual = function (nums) {
    return nums.findIndex((val, i) => i % 10 === val) ?? -1;
};

//2951.13 Find the Peaks
var findPeaks = function (mountain) {

    return mountain.reduce((acc, val, i) => {
        if (i === 0 || i === mountain.length - 1) return acc;
        if (val > mountain[i + 1] && val > mountain[i - 1]) acc.push(i);
        return acc;
    }, [])

};

//1295.14 Find Numbers with Even Number of Digits
var findNumbers = function (nums) {

    const evenCount = (num) => {

        let digit = 0;

        while (num > 0) {
            digit++;
            num = Math.trunc(num / 10);
        }
        return digit % 2 === 0;
    }

    return nums.reduce((acc, val) => evenCount(val) ? ++acc : acc, 0);
};

//2544. Alternating Digit Sum
var alternateDigitSum = function (n) {

    const digit = [];

    while (n > 0) {

        digit.unshift(n % 10);

        n = Math.floor(n / 10);
    }

    return digit.reduce((acc, val, i) => {

        if (i % 2 !== 0) {

            return acc + (val * -1);
        }
        else {

            return acc + val;
        }

    }, 0)

};

//268. Missing Number
var missingNumber = function (nums) {

    const correctSum = (nums.length * (nums.length + 1)) / 2;

    const currSum = nums.reduce((sum, val) => sum + val, 0);

    return correctSum - currSum;

};

//1688. Count of Matches in Tournament
var numberOfMatches = function (n) {

    let correntTeam = n;

    let matches = (team) => {

        if (team % 2 === 0) {

            correntTeam = team / 2;

            return correntTeam;
        }

        else {

            correntTeam = ((team - 1) / 2) + 1;

            return (team - 1) / 2;
        };
    };

    let totalMatch = 0;

    while (correntTeam > 1) {

        totalMatch += matches(correntTeam);
    }
    return totalMatch;
};

//1304. Find N Unique Integers Sum up to Zero
var sumZero = function (n) {

    const ans = [];

    for (let i = 1; i <= n / 2; i++) {

        ans.push(i, -i);
    }

    n % 2 !== 0 && ans.push(0);

    return ans;

};

//389. Find the Difference
var findTheDifference = function (s, t) {

    s = s.split('');

    s.forEach(val => t = t.replace(val, ''));

    return t;

};

//709. To Lower Case
var toLowerCase = function (s) {

    //String.fromCharCode(char.charCodeAt(0) + 32)

    let result = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] <= 'Z' && s[i] >= 'A') {

            result += String.fromCharCode(s[i].charCodeAt(0) + 32);
        }
        else
            result += s[i];
    }

    return result;
};
//2441. Largest Positive Integer That Exists With Its Negative
var findMaxK = function (nums) {

    return nums.reduce((acc, val) => {

        if (val > acc && nums.includes(-val)) return val;

        return acc;

    }, 0) || -1;
};

//575. Distribute Candies
var distributeCandies = function (candyType) {

    const differentType = new Set(candyType);

    const allowed = candyType.length / 2;

    return differentType.size > allowed ? allowed : differentType.size;
};

//744. Find Smallest Letter Greater Than Target
var nextGreatestLetter = function (letters, target) {

    letters = [...new Set(letters)];

    const ans = letters.indexOf(target);

    if (ans === letters.length - 1) return letters[0];

    if (ans !== -1) return letters[ans + 1];

    return letters.find(char => char.charCodeAt(0) > target.charCodeAt(0)) || letters[0];
};
//628. Maximum Product of Three Numbers
function maximumProduct(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // Case 1: Product of three largest positive numbers
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Case 2: Product of two smallest negative numbers and the largest positive number
    const product2 = nums[0] * nums[1] * nums[n - 1];

    // Return the maximum of the two cases
    return Math.max(product1, product2);
}

//34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {

    const ans = [];

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {

            while (nums[mid] === target) mid--;

            ans.push(++mid);

            while (nums[mid] === target) mid++;

            ans.push(--mid);

            return ans;
        }

        if (nums[mid] < target) start = mid + 1;

        else end = mid - 1;
    }

    return [-1, -1];
};
//81. Search in Rotated Sorted Array II
var search = function (nums, target) {

    if (nums.length <= 1 && nums[0] === target) return true;

    if (nums.length === 0) return false;

    nums = [...new Set(nums)]

    if (nums[0] < nums.at(-1)) return searching(0, nums.length, nums, target)

    const pivot = findPivot(nums);

    console.log(pivot);

    if (searching(pivot, nums.length, nums, target)) return true;

    if (searching(0, pivot, nums, target)) return true;

    return false;


    function findPivot(nums) {

        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (mid > 0 && nums[mid] < nums[mid - 1]) {

                return mid;
            }

            if (nums[mid] < nums[0]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1;
    }

    function searching(start, end, nums, target) {

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) return true;

            if (nums[mid] < target) start = mid + 1;

            else end = mid - 1;
        }

        return false;
    }

};

//852. Peak Index in a Mountain Array
var peakIndexInMountainArray = function (arr) {

    return arr.findIndex((val, i) => {

        if (i === 0) return;

        return val > arr[i + 1] && val > arr[i - 1]
    })
};

//162. Find Peak Element
var findPeakElement = function (arr) {

    if (arr.length <= 3) return arr.indexOf(Math.max(...arr));

    const index = arr.findIndex((val, i) => {

        if (i === 0) return;

        return val > arr[i + 1] && val > arr[i - 1]
    })

    if (index < 0) return arr.indexOf(Math.max(...arr));

    return index;
};

//2089. Find Target Indices After Sorting Array
var targetIndices = function (nums, target) {

    const ans = [];

    nums.sort((a, b) => a - b);

    let index = nums.indexOf(target);

    while (nums[index] === target) ans.push(index++);

    return ans;
};

//349. Intersection of Two Arrays
var intersection = function (nums1, nums2) {

    nums1 = [...new Set(nums1)];

    return nums1.filter(val => nums2.includes(val));
};
//287. Find the Duplicate Number
var findDuplicate = function (nums) {

    const unique = new Set();

    for (const val of nums) {

        if (unique.has(val)) return val;

        unique.add(val);
    }

    return -1;
};

//Medium need to optimize
//74. Search a 2D Matrix
var searchMatrix = function (matrix, target) {

    for (const val of matrix) {

        if (val.includes(target)) return true;
    }

    return false;
};

//Medium need to Optimize
//378. Kth Smallest Element in a Sorted Matrix
var kthSmallest = function (matrix, k) {

    matrix = matrix.flat().sort((a, b) => a - b);

    return matrix[k - 1];
};

//278. First Bad Version
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        let start = 1;
        let end = n;

        while (start <= end) {

            let mid = Math.floor((start + end) / 2);

            if (mid > 1 && !isBadVersion(mid - 1) && isBadVersion(mid)) return mid;

            if (isBadVersion(mid)) end = mid - 1;

            else start = mid + 1;
        }

        return 1;
    };
};

//240. Search a 2D Matrix II
var searchMatrix = function (matrix, target) {

    return matrix.some((val, i) => {

        if (val[0] < target && isTarget(i)) return true;

        return false;
    })

    function isTarget(index) {

        let start = 0;

        let end = matrix[index].length - 1;

        while (start <= end) {

            let mid = Math.floor((start + end) / 2);

            if (matrix[index][mid] === target) return true;

            if (matrix[index][mid] < target) start = mid + 1;

            else end = mid - 1;
        }

        return false;
    }

};

// Hard need to optimize
//4. Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {

    const arr = nums1.concat(nums2);

    arr.sort((a, b) => a - b);

    let mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {

        return (arr[mid] + arr[mid - 1]) / 2;
    }
    else {

        return arr[mid];
    }
};

// 350. Intersection of Two Arrays II
var intersect = function (nums1, nums2) {
    return nums1.filter((val, i) => {
        if (nums2.includes(val)) {
            nums2.splice(nums2.indexOf(val), 1);
            return true;
        }
        return false;
    });
};
//1539. Kth Missing Positive Number
var findKthPositive = function (arr, k) {

    let count = 0;

    if (arr.length < arr.at(-1)) {

        let i = 1;

        for (i = 1, j = 0; j < arr.length; i++) {

            if (i !== arr[j]) {
                count++;
            }
            else j++;

            if (count === k) return i;
        }

        while (count < k) {
            count++;
            i++;
        };

        return i - 1;
    }
    else {

        count = arr.at(-1);

        for (let i = 0; i < k; i++) {
            count++;
        }

        return count;
    }
};

//2529. Maximum Count of Positive Integer and Negative Integer
var maximumCount = function (nums) {

    const posCount = nums.reduce((acc, val) => val > 0 ? acc + 1 : acc, 0);

    const negCount = nums.reduce((acc, val) => val < 0 ? acc + 1 : acc, 0);

    return Math.max(posCount, negCount);
};


//414. Third Maximum Number
var thirdMax = function (nums) {

    nums = [...new Set(nums)].sort((a, b) => b - a);

    return nums[2] ?? nums[0];

};


//1337. The K Weakest Rows in a Matrix
var kWeakestRows = function (mat, k) {

    const values = new Map();

    mat.forEach((arr, i) => {
        const count = arr.reduce((acc, val) => val ? acc + 1 : acc, 0);
        values.set(i, count);
    })

    return Array.from(values).sort((a, b) => a[1] - b[1]).splice(0, k).map(val => val[0]);
};

// 451. Sort Characters By Frequency
var frequencySort = function (s) {

    const counts = (char) => {

        let count = 0;

        for (let i = 0; i < s.length; i++) {

            s[i] === char && count++;
        }

        return count;
    }

    const chars = Array.from(new Set(s.split('')));

    const frequencyOf = [];

    chars.forEach(val => {

        const frequency = counts(val);

        frequencyOf.push([frequency, val.repeat(frequency)]);

    });

    return frequencyOf.sort((a, b) => b[0] - a[0]).map(arr => arr[1]).join('');
};

//88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {

    let i = 0;

    while (i < n) {

        nums1[m++] = nums2[i++];
    }

    return nums1.sort((a, b) => a - b);
};

//27. Remove Element
var removeElement = function (nums, val) {

    const dupCount = nums.reduce((acc, value) => val === value ? acc + 1 : acc, 0);

    const length = nums.length;

    for (let i = 0, j = 0; i < nums.length; i++) {

        if (nums[i] !== val) nums[j++] = nums[i];
    }
    return length - dupCount;
};

//26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {

    const moveToLast = (index) => {

        for (let i = index; i < nums.length - 1; i++) {

            nums[i] = nums[i + 1];
        }
    }

    const unique = [...new Set(nums)];

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }

    return unique.length;
};

//Medium
//80. Remove Duplicates from Sorted Array II
var removeDuplicates = function (nums) {

    let size = nums.length;

    const moveToLast = (i) => {
        for (let j = i; j < size - 1; j++) {
            nums[j] = nums[j + 1];
        }
        size--;
    }

    let count = 1;

    for (let i = 0; i < size - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            count++;

            if (count > 2) {
                moveToLast(i);
                i--;
            };

        } else {
            count = 1;
        }
    }
    return size;
};

//Medium
//189. Rotate Array
var rotate = function (nums, k) {
    k = k % nums.length;

    const firstPart = nums.slice(nums.length - k);
    const secondPart = nums.slice(0, nums.length - k);

    nums.length = 0;

    nums.push(...firstPart, ...secondPart)
    return nums;
};

//Medium
//122. Best Time to Buy and Sell Stock II
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
};

//Easy
//58. Length of Last Word
var lengthOfLastWord = function (s) {

    let words = s.split(' ');

    words = words.filter((val) => val);

    return words.at(-1).trim().length;
};

//125. Valid Palindrome
var isPalindrome = function (s) {

    let letters = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return isPal(letters);

    function isPal(s) {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
};

//Medium
//151. Reverse Words in a String
var reverseWords = function (s) {

    s = s.trim();

    let reversed = s.split(' ').reverse();

    reversed = reversed.filter((word) => word);

    return reversed.join(' ')
};

//Medium
//167. Two Sum II - Input Array Is Sorted
var twoSum = function (numbers, target) {

    let start = 0;

    let end = numbers.length - 1;

    while (start <= end) {

        let sum = numbers[start] + numbers[end];

        if (sum === target) return [start + 1, end + 1];

        else if (sum > target) end--;

        else start++;
    }

    return [];
};

//Medium --Need to Optimize
//238. Product of Array Except Self
var productExceptSelf = function (nums) {

    const product = nums.reduce((acc, val) => val ? acc * val : acc, 1);

    const productFun = (i) => nums.reduce((acc, value, j) => (i !== j ? acc * value : acc), 1);

    if (nums.includes(0)) return nums.map((val, i) => productFun(i));

    return nums.map((val) => product / val);
};

//Medium
//3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {

    const unique = new Set();

    let count = 0, ans = 0;

    for (let i = 0; i < s.length; i++) {

        if (!unique.has(s[i])) {
            count++;
            ans = count > ans ? count : ans;
        }

        else {

            while (unique.has(s[i])) {

                unique.delete(s[i - count]);

                count--;
            }

            count++;
        }

        unique.add(s[i])
    }

    return ans;
};
//2053. Kth Distinct String in an Array
var kthDistinct = function (arr, k) {
    const frequencyMap = new Map();

    for (const str of arr) {
        frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
    }

    for (const str of arr) {
        if (frequencyMap.get(str) === 1) {
            k--;

            if (k === 0) {
                return str;
            }
        }
    }

    return "";
};
//Medium
//1481. Least Number of Unique Integers after K Removals
var findLeastNumOfUniqueInts = function (arr, k) {
    const frequency = new Map();
    arr.forEach(val => {
        frequency.set(val, (frequency.get(val) || 0) + 1);
    });
    const sortedFrequency = Array.from(frequency.entries()).sort((a, b) => a[1] - b[1]);
    let uniqueCount = sortedFrequency.length;
    for (const [, count] of sortedFrequency) {
        if (k >= count) {
            k -= count;
            uniqueCount--;
        } else {
            break;
        }
    }
    return uniqueCount;
};
//392. Is Subsequence
var isSubsequence = function (s, t) {

    for (let i = 0; i < s.length; i++) {

        if (!t.includes(s[i])) return false;

        else {
            t = t.slice(t.indexOf(s[i]) + 1);
        }
    }
    return true;
};

//28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) return haystack.indexOf(needle);
    return -1;
};
// need to look
//13. Roman to Integer
var romanToInt = function (s) {

    const MapToConvertRomanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let output = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = MapToConvertRomanToInt[s[i]];
        const nextValue = MapToConvertRomanToInt[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            output -= currentValue;
        } else {
            output += currentValue;
        }
    }

    return output;

};
//20. Valid Parentheses
//Gpt helped
var isValid = function (s) {
    const stack = [];

    const parenthesesMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            const top = stack.pop();
            if (parenthesesMap[top] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

//Easy
//73. Set Matrix Zeroes
var setZeroes = function (matrix) {

    if (matrix.length === 1 && matrix.flat().includes(0)) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
        return matrix;
    }

    const makeZero = (row, coulm) => {

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][coulm] = 0;
        }

        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }

    }
    const indexes = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === 0) indexes.push([i, j]);
        }
    }
    indexes.forEach(arr => {
        makeZero(...arr);
    })
    return matrix;
};

//7. Reverse Integer
var reverse = function (x) {

    let ans = String(Math.abs(x));
    ans = ans.split('').reverse().join('');

    ans = Number(ans);

    if (!(ans >= -Math.pow(2, 31) && ans <= Math.pow(2, 31) - 1)) return 0;

    return x < 0 ? -ans : ans;
};
//Medium
//15. 3Sum
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};

//Easy
// 1768. Merge Strings Alternately
var mergeAlternately = function (word1, word2) {

    let ans = '';

    const length = word1.length > word2.length ? word1.length : word2.length;

    let j = 0, k = 0;

    for (let i = 0; i < length; i++) {

        if (word1[j]) ans += word1[j++];

        if (word2[k]) ans += word2[k++];

    }

    return ans;
};

//Easy
//1051. Height Checker
var heightChecker = function (heights) {

    const expected = heights.slice().sort((a, b) => a - b);

    return expected.reduce((acc, val, i) => {

        if (heights[i] !== val) return acc + 1;

        return acc;
    }, 0)
};
//Easy
//2778. Sum of Squares of Special Elements 
var sumOfSquares = function (nums) {

    let sum = 0;

    for (let i = 1; i <= nums.length; i++) {

        if (nums.length % i === 0) sum += Math.pow(nums[i - 1], 2);
    }

    return sum;
};

//1299. Replace Elements with Greatest Element on Right Side
var replaceElements = function (arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        arr[i] = max;
        max = Math.max(max, current);
    }

    return arr;
};

//888. Fair Candy Swap
var fairCandySwap = function (aliceSizes, bobSizes) {
    const sumAlice = aliceSizes.reduce((acc, val) => acc + val, 0);
    const sumBob = bobSizes.reduce((acc, val) => acc + val, 0);

    const target = (sumAlice + sumBob) / 2;

    const setBob = new Set(bobSizes);

    for (const candy of aliceSizes) {
        const targetCandyBob = target - (sumAlice - candy);
        if (setBob.has(targetCandyBob)) {
            return [candy, targetCandyBob];
        }
    }

    return [];
};

//557. Reverse Words in a String III
var reverseWords = function (s) {

    s = s.split(' ');

    return s.map(word => word.split('').reverse().join('')).join(' ');
};

//3019. Number of Changing Keys
var countKeyChanges = function (s) {

    let count = 0;

    s = s.toLowerCase();

    for (let i = 0; i < s.length - 1; i++) {

        if (s[i] !== s[i + 1]) count++;
    }

    return count;
};

//2810. Faulty Keyboard
var finalString = function (s) {
    s = s.split('');
    let ans = '';
    return s.reduce((acc, char, i) => {
        if (char === 'i') {
            acc = s.slice(0, i).reverse().join('');
            s = [...acc.split(''), ...s.slice(i)];
        }
        else {
            acc += char;
        }
        return acc;
    }, '').replaceAll('i', '')
};

//2678. Number of Senior Citizens
var countSeniors = function (details) {

    return details.reduce((acc, str) => {

        const age = str[11] + str[12];

        if (Number(age) > 60) return acc + 1;

        return acc;

    }, 0)
};

//1935. Maximum Number of Words You Can Type
var canBeTypedWords = function (text, brokenLetters) {

    const broken = brokenLetters.split('')

    const isBroken = (word) => {

        return broken.some((val) => word.includes(val));
    }

    text = text.split(' ');

    return text.reduce((acc, word) => {

        if (!isBroken(word)) return acc + 1;

        return acc;

    }, 0)
};

//1002. Find Common Characters
var commonChars = function (words) {

    const letters = words[0].split('');

    const check = (letter) => {
        for (let i = 1; i < words.length; i++) {
            const index = words[i].indexOf(letter);
            if (index !== -1) {
                words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
            } else {
                return false;
            }
        }
        return true;
    };
    return letters.filter(letter => check(letter));
};

//2586. Count the Number of Vowel Strings in Range
var vowelStrings = function (words, left, right) {

    let count = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = left; i <= right; i++) {
        if (vowels.includes(words[i][0]) && vowels.includes(words[i].at(-1))) count++;
    }

    return count;
};

//2496. Maximum Value of a String in an Array
var maximumValue = function (strs) {

    return strs.reduce((acc, str) => {

        if (Number(str) == 0) return acc;

        if (Number(str)) {
            acc = acc < Number(str) ? Number(str) : acc;
        }
        else {
            acc = acc < str.length ? str.length : acc;
        }
        return acc;
    }, 0)
};

//500. Keyboard Row
var findWords = function (words) {

    const first = 'qwertyuiop';
    const second = 'asdfghjkl';
    const third = "zxcvbnm";

    return words.reduce((acc, word) => {

        let currWord = word;

        word = [...new Set(word.toLowerCase().split(''))];

        if (word.every(char => first.includes(char))) {
            acc.push(currWord);
            return acc;
        }
        else if (word.every(char => second.includes(char))) {
            acc.push(currWord);
            return acc;
        }
        else if (word.every(char => third.includes(char))) {
            acc.push(currWord);
            return acc;
        }
        return acc;
    }, []);
}

//2309. Greatest English Letter in Upper and Lower Case
var greatestLetter = function (s) {

    let greatest = '';

    for (const char of s) {

        const charCode = char.charCodeAt(0);

        const isUpper = charCode >= 65 && charCode <= 90 ? true : false;

        if (isUpper && s.includes(char.toLowerCase())) {
            greatest = char > greatest ? char : greatest;
        }
        else if (!isUpper && s.includes(char.toUpperCase())) {
            greatest = char.toUpperCase() > greatest ? char.toUpperCase() : greatest;
        }
    }

    return greatest;
};

//1507. Reformat Date
var reformatDate = function (date) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    date = date.split(' ').reverse();

    let month = months.indexOf(date[1]) + 1;
    month = month < 10 ? '0' + month : month;

    let currDate = parseInt(date[2]);
    currDate = currDate < 10 ? '0' + currDate : currDate;

    return date[0] + '-' + month + '-' + currDate;

};

//2278. Percentage of Letter in String
var percentageLetter = function (s, letter) {

    if (!s.includes(letter)) return 0;

    let count = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === letter) {
            count++;
        }
    }

    return Math.floor((count / s.length) * 100);
};

//2185. Counting Words With a Given Prefix
var prefixCount = function (words, pref) {

    return words.filter(word => {

        for (let i = 0; i < pref.length; i++) {

            if (pref[i] !== word[i]) return false;
        }

        return true;
    }).length;
};

//1544. Make The String Great
var makeGood = function (s) {
    let stack = [];
    for (let char of s) {
        if (
            stack.length > 0 &&
            (char === stack[stack.length - 1].toLowerCase() && char.toUpperCase() === stack[stack.length - 1] ||
                char === stack[stack.length - 1].toUpperCase() && char.toLowerCase() === stack[stack.length - 1])
        ) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

//1636. Sort Array by Increasing Frequency
var frequencySort = function (nums) {

    const unique = [...new Set(nums)];

    const arrMap = new Map();

    const frequency = (val) => nums.reduce((acc, vals) => val === vals ? acc + 1 : acc, 0);

    unique.forEach(val => {
        arrMap.set(val, frequency(val));
    })

    const sorted = Array.from(arrMap).sort((a, b) => {

        if (a[1] === b[1]) return b[0] - a[0];

        return a[1] - b[1];
    });

    return sorted.reduce((acc, arr) => {

        for (let i = 0; i < arr[1]; i++) {
            acc.push(arr[0]);
        }
        return acc;
    }, [])
};

//2643. Row With Maximum Ones
var rowAndMaximumOnes = function (mat) {

    let maxCount = 0;

    return mat.reduce((acc, arr, row) => {

        const count = arr.reduce((acc2, val) => {

            if (val === 1) return acc2 + 1;

            return acc2;

        }, 0);

        if (count > maxCount) {

            maxCount = count;

            acc[0] = row;
            acc[1] = maxCount;
        }

        return acc;

    }, [0, 0])
};

//1207. Unique Number of Occurrences
var uniqueOccurrences = function (arr) {

    const count = (num) => arr.reduce((acc, val) => val === num ? acc + 1 : acc, 0);

    const arrCopy = [...new Set(arr)];

    const counts = arrCopy.map(val => count(val));

    const frequecies = new Set(counts);

    return frequecies.size === counts.length;

};
//1323. Maximum 69 Number
var maximum69Number = function (num) {

    const arrNum = String(num).split('');

    if (!arrNum.includes('6')) return num;

    const firstSix = arrNum.indexOf('6');

    arrNum[firstSix] = '9';

    return Number(arrNum.join(''));
};

//2500. Delete Greatest Value in Each Row
var deleteGreatestValue = function (grid) {

    let max = 0;

    while (grid[0].length) {

        max += grid.reduce((acc, arr) => {

            const currMax = Math.max(...arr);

            arr.splice(arr.indexOf(currMax), 1);

            acc = currMax < acc ? acc : currMax;

            return acc;

        }, 0)
    }

    return max;
};

// different quesitions but same solution as above
//2679. Sum in a Matrix
var matrixSum = function (nums) {

    let max = 0;

    while (nums[0].length) {

        max += nums.reduce((acc, arr) => {

            const currMax = Math.max(...arr);

            arr.splice(arr.indexOf(currMax), 1);

            acc = currMax < acc ? acc : currMax;

            return acc;

        }, 0)
    }

    return max;
};

//2032. Two Out of Three
var twoOutOfThree = function (nums1, nums2, nums3) {

    const unique = [...new Set([...nums1, ...nums2, ...nums3])];

    return unique.filter(val => {

        if (nums1.includes(val) && nums2.includes(val)) return true;

        else if (nums1.includes(val) && nums3.includes(val)) return true;

        else if (nums2.includes(val) && nums3.includes(val)) return true;

        return false;
    })
};

//2363. Merge Similar Items
var mergeSimilarItems = function (items1, items2) {

    const grid = [...items1, ...items2];

    const arrMap = new Map();

    grid.forEach(arr => {

        let val = 0;

        if (arrMap.get(arr[0])) val = arrMap.get(arr[0]) + arr[1];

        else val = arr[1];

        arrMap.set(arr[0], val)
    })

    return Array.from(arrMap).sort((a, b) => a[0] - b[0]);
};

//1394. Find Lucky Integer in an Array
var findLucky = function (arr) {

    const frequency = (num) => arr.reduce((acc, val) => num === val ? acc + 1 : acc, 0);

    return arr.reduce((acc, val) => {

        if (frequency(val) === val) acc = val > acc ? val : acc;

        return acc;

    }, -1);
};