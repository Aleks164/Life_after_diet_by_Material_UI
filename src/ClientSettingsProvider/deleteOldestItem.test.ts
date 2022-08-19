import { deleteOldestItem } from "./deleteOldestItem";

type TestItemType = {
  [id: number]: {
    id: number;
    title: string;
    image: string;
  };
};

describe("deleteOldestItem test", () => {
  it("deleteOldestItem should delete any item after 10", () => {
    const testHistory = {} as TestItemType;
    for (let i = 0; i < 11; i++) {
      const temp = {
        id: i,
        title: String(Math.random()),
        image: String(Math.random()),
      };
      testHistory[i] = temp;
    }
    deleteOldestItem(testHistory);
    const result = Object.keys(testHistory).length;
    expect(result).toBe(10);
  });
  it("deleteOldestItem do nothing if history length less then 11", () => {
    const testHistory = {} as TestItemType;
    for (let i = 0; i < 5; i++) {
      const temp = {
        id: i,
        title: String(Math.random()),
        image: String(Math.random()),
      };
      testHistory[i] = temp;
    }
    deleteOldestItem(testHistory);
    const result = Object.keys(testHistory).length;
    expect(result).toBe(5);
  });
});
