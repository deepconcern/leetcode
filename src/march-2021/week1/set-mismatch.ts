/**
 * You have a set of integers s, which originally contains all the numbers from
 * 1 to n. Unfortunately, due to some error, one of the numbers in s got
 * duplicated to another number in the set, which results in repetition of one
 * number and loss of another number.
 * 
 * You are given an integer array nums representing the data status of this set
 * after the error.
 * 
 * Find the number that occurs twice and the number that is missing and return
 * them in the form of an array.
 * 
 * @param nums The set of numbers to check
 * @returns A tuple with the repeated number and missing number
 */
 export const setMismatch = (nums: number[]): [number, number] => {
    // We'll use an array to validate our set. We don't know if the given set is
    // ordered, but we do know that it should be a set (no duplicates) and
    // contains all numbers between 1-n (length of array) inclusive. We'll have
    // enough information to create an ordered set which should quickly tell us
    // the missing and duplicated numbers. By convention, we'll use -1 for any
    // gaps.
    const orderedNums = Array(nums.length).fill(-1);

    // As we go through the `nums` set, we should be able to run into the repeat
    // during the first go. We can store that here.
    let duplicatedNumber = -1;

    // Walk through the `nums` set to get our ordered set and duplicated number
    for(const num of nums) {
        // If we haven't found the duplicate yet, look for it
        if (duplicatedNumber === -1) {
            // Check if the current number is duplicated. We would have already
            // added it to the sorted array, so a simple lookup will tell us if
            // that is the case.
            if (orderedNums[num - 1] !== -1) {
                duplicatedNumber = num;
            }
        }

        orderedNums[num - 1] = num;
    }

    // Now that we have the ordered set, only one number should be missing. We
    // can quickly find that with one more loop
    let missingNumber = -1;
    
    for (let i = 0; i < nums.length; i++) {
        const num = orderedNums[i];
        
        // Check to see if the number is missing
        if (num === -1) {
            // We can use the current index to get what the number _should_ be
            missingNumber = i + 1;

            // Bail out
            break;
        }
    }

    return [duplicatedNumber, missingNumber];
};
