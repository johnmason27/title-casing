import { TestScheduler } from "jest";
import { toTitleCase } from "./index.js";

describe("When using toTitleCase", () => {
    
    test("and giving a lowercase string, it returns the string in titlecase", () => {
        const actual = toTitleCase("lowercasestring");
        expect(actual).toBe("Lowercasestring");
    });

    test("and giving a uppercase string, it returns the string in titlecase", () => {
        const actual = toTitleCase("UPPERCASESTRING");
        expect(actual).toBe("Uppercasestring");
    });

    test("and giving a titlecase string, it returns the string in titlecase", () => {
        const actual = toTitleCase("Titlecasestring");
        expect(actual).toBe("Titlecasestring");
    });

});