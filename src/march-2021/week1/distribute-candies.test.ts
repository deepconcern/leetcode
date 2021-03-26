import { distributeCandies } from "./distribute-candies";

describe("Distribute Candies", () => {
    test("Example 1", () => {
        // Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types,
        // she can eat one of each type.
        expect(distributeCandies([1,1,2,2,3,3])).toBe(3);
    });

    test("Example 2", () => {
        // Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2],
        // [1,3], or [2,3], she still can only eat 2 different types.
        expect(distributeCandies([1,1,2,3])).toBe(2);
    });
    
    test("Example 3", () => {
        // Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2
        // candies, she only has 1 type.
        expect(distributeCandies([6,6,6,6])).toBe(1);
    });
});