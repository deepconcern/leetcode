/**
 * Given an array nums containing n distinct numbers in the range [0, n], return
 *  the only number in the range that is missing from the array.
 * 
 * Follow up: Could you implement a solution using only O(1) extra space
 * complexity and O(n) runtime complexity?
 * 
 * @param nums The set of numbers to check
 * @returns A tuple with the repeated number and missing number
 */
export const missingNumber = (nums: number[]): number => {
    // To figure out the missing number with the complexity constraints, we'll
    // first calculate the nth triangular number (where n is the length of
    // `nums`). This is because the set we are expecting (with the missing
    // number added) should be from 0 - n. Then, we go through the array,
    // subtracting values from our calculated number, which should leave us with
    // the missing number
    let summation = (nums.length * (nums.length + 1)) / 2;

    for (const num of nums) {
        summation -= num;
    }

    return summation;
}