const { expect } = require('chai'); 

const sort = (arr)=> {
  if(arr.length <= 1){
    return arr;
  }
  const mid = arr.length / 2;
  const left = sort(arr.slice(0, mid));
  const right = sort(arr.slice(mid));
  let results = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];

};

describe('merge sort', ()=> {
  it('sorts an empty array', ()=> {
    const arr = [];
    sort(arr);
    expect(arr).to.eql([]);
  });
  it('sorts the array [2, 1] to [1, 2]', ()=> {
    const arr = [2, 1];
    const sorted = sort(arr);
    expect(sorted).to.eql([1, 2]);
  });
  it('sorts the array [2, 1, 2, 1] to [1, 1, 2, 2]', ()=> {
    const arr = [2, 1, 2, 1];
    const sorted = sort(arr);
    expect(sorted).to.eql([1, 1, 2, 2]);
  });
  it('sorts the array [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', ()=> {
    const arr = [5, 4, 3, 2, 1];
    const sorted = sort(arr);
    expect(sorted).to.eql([1, 2, 3, 4, 5]);
  });
  it('sorts a random array', ()=> {
    const arr = [];
    while(arr.length < 30000){
      arr.push(Math.random()*100);
    }
    let now = new Date();
    const sorted = sort(arr);
    console.log("our sort", new Date() - now);
    now = new Date();
    arr.sort((a, b)=> a - b);
    console.log("native sort", new Date() - now);
    expect(sorted).to.eql(arr);
  });
});
