import { Casino, LOCATION, NACIONALITY, User2 } from "../src/data"
import verifyAge  from '../src/cassino';

describe('Hello world', () => {
    // A
    test("1 brazilian allowed", () => {
        const brazilian: User2 = {
            name: 'jess',
            age: 24,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const cassino: Casino = {
            name: "Royal Vegas",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(cassino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["jess"])
    })
    //B
    test("1 american allowed", () => {
        const american: User2 = {
            name: 'math',
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const cassino: Casino = {
            name: "Royal Vegas",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(cassino, [american])
        expect(result.americans.allowed).toEqual(["math"])
    })
    // C
    test("No one allowed", () => {
        const brazilian: User2 = {
          name: "jess",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User2 = {
          name: "math",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Cosmopolitan",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["jess", "jess"]);
        expect(result.americans.unallowed).toEqual(["math","math"]);
      });
      // D
      test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User2 = {
          name: "jess",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User2 = {
          name: "math",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Cosmopolitan",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["jess", "jess"]);
        expect(result.americans.allowed).toEqual(["math", "math"]);
      });

      // Exercicio 5 A
      test("1 brazilian allowed", () => {
        const brazilian: User2 = {
          name: "jess",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Royal Vegas",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
      });

      // B
      test("1 brazilian allowed", () => {
        const american: User2 = {
          name: "math",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Royal Vegas",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [american]);
        expect(result.brazilians.unallowed.length).toBe(0);
      });

      // C
      test("No one allowed", () => {
        const brazilian: User2 = {
          name: "jess",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User2 = {
          name: "math",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Los Angeles PK",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("jess");
        expect(result.americans.unallowed).toContain("math");
      });

      // D
      test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User2 = {
          name: "jess",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User2 = {
          name: "math",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Bates Motel PK",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
      });
})