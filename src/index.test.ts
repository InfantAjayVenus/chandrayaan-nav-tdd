import { updateMove } from ".";

describe("updateMove", () => {
    it('should pass the test', () => {
        expect(updateMove).toBeDefined();
    });

    it("should return co-ordinates", () => {
        expect(updateMove()).toEqual({ x: 0, y: 0, z: 0, direction: 'N' });
    });
})