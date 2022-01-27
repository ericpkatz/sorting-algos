const { expect } = require('chai'); 

const sort = (arr)=> {
  //loop once
    //loop again
  return arr;
};

describe('bubble sort', ()=> {
  it('sorts an empty array', ()=> {
    expect(sort([])).to.eql([]);
  });
  it('sorts the array [2, 1, 3] to [1, 2, 3]', ()=> {
    const arr = [2, 11, 3];
    arr.sort((a, b)=> a - b);
    console.log(arr);
    expect(sort([2, 11, 3])).to.eql(arr);
  });
});
