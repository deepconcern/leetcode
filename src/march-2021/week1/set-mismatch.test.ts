import { setMismatch } from "./set-mismatch";

describe("Set Mismatch", () => {
    test("Example 1", () => {
        expect(setMismatch([1,2,2,4])).toEqual([2,3]);
    });
    
    test("Example 2", () => {
        expect(setMismatch([1,1])).toEqual([1,2]);
    });
});