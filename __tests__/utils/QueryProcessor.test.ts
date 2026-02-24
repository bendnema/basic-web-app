import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Rohan"
          ));
    })

    test('should return andrew ID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "bnematad"
          ));
    })

    test('should return largest number in query', () => {
        const query = "What is the largest number in 3, 5, and 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "5"
          ));
    })

    test('should return sum or multiplication of numbers in query', () => {
        const query1 = "What is 3 plus 5?";
        const response1: string = QueryProcessor(query1);
        expect(response1).toBe((
            "8"
          ));

        const query2 = "What is 3 multiplied by 5?";
        const response2: string = QueryProcessor(query2);
        expect(response2).toBe((
            "15"
          ));
    })

    test ('should return number that is both a square and a cube', () => {
        const query = "What is the number that is both a square and a cube in 1, 8, and 27?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1"
          ));
    })

    test ('should return difference of numbers in query', () => {   
        const query = "What is 10 minus 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "7"
          ));
    })

    test ('should return prime numbers in query', () => {   
        const query = "What are the prime numbers in 1, 2, 3, 4, 5, and 6?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2, 3, 5"
          ));   
    })
});
