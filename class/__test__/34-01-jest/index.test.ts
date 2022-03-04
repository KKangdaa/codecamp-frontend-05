import { add } from "../../pages/34-01-jest/index";

it("더하기 잘 되는지 테스트해보기", () => {
  const result = add(3, 5);

  expect(result).toBe(8);
});

/* describe('내가 하고 싶은 테스트', ()=> {
    it('내가 하고 싶은 작은 테스트', () => {
    
    })
    it('내가 하고 싶은 작은 테스트', () => {
    
    })
    it('내가 하고 싶은 작은 테스트', () => {
    
    })
    it('내가 하고 싶은 작은 테스트', () => {
    
    })
}) */
