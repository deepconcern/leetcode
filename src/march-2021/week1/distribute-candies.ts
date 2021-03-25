/**
 * Alice has n candies, where the ith candy is of type candies[i]. Alice
 * noticed that she started to gain weight, so she visited a doctor.
 * 
 * The doctor advised Alice to only eat n / 2 of the candies she has (n is
 * always even). Alice likes her candies very much, and she wants to eat the
 * maximum number of different types of candies while still following the
 * doctor's advice.
 * 
 * Given the integer array candies of length n, return the maximum number of
 * different types of candies she can eat if she only eats n / 2 of them.
 * 
 * @param candies An even-length array of candy types (numbers)
 * @returns The maximum number of candy types Alice can eat
 * @throws If the input is invalid
 */
export const distributeCandies = (candies: number[]): number => {
    // Alice can eat n (the number of candies given) / 2, so that will be the
    // maximum she can eat
    const edibleCandyTypeLimit = candies.length / 2;

    // A set containing unique candy types
    const edibleCandyTypes = new Set<number>();

    // Loop through each candy
    for (const candyType of candies) {
        // Add the candy type to our set
        edibleCandyTypes.add(candyType);

        // If we hit our maximum limit, bail. Otherwise, continue
        if (edibleCandyTypes.size === edibleCandyTypeLimit) {
            break;
        }
    }

    return edibleCandyTypes.size;
};
