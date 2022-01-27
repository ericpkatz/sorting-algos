const { expect } = require('chai'); 

const sort = (arr)=> {
  for(let i = 0; i < arr.length; i++){
    let swapped = false;
    for(let j = 1; j < arr.length - i; j++){
      if(arr[j - 1] > arr[j]){
        swapped = true;
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    if(!swapped){
      return;
    }
  }
};

describe('bubble sort', ()=> {
  it('sorts an empty array', ()=> {
    const arr = [];
    sort(arr);
    expect(arr).to.eql([]);
  });
  it('sorts the array [2, 1, 3] to [1, 2, 3]', ()=> {
    const arr = [2, 11, 3];
    sort(arr);
    console.log(arr);
    expect(arr).to.eql([2, 3, 11]);
  });
  it('sorts the array [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', ()=> {
    const arr = [5, 4, 3, 2, 1];
    sort(arr);
    expect(arr).to.eql([1, 2, 3, 4, 5]);
  });
  it('sorts a random array', ()=> {
    const arr = [];
    while(arr.length < 10000){
      arr.push(Math.random()*100);
    }
    const copy = [...arr];
    let now = new Date();
    sort(copy);
    console.log("our sort", new Date() - now);
    now = new Date();
    arr.sort((a, b)=> a - b);
    console.log("native sort", new Date() - now);
    expect(copy).to.eql(arr);
  });
});
