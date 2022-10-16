// 26. Remove Duplicates from a Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
    let last = NaN;
    let count = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};