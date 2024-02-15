
//https://ejosue.com/about/

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