/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const mid = ~~(nums.length / 2);
  // for(let index =0 ;index< nums.length;index++){
  //     let count =1;
  //     for(let index2=0;index2<nums.length;index2++){
  //         // 双层for循环 如果值相等就说明重复 ++
  //         if(index2!=index&&nums[index2]==nums[index]){
  //             count++
  //         }
  //     }
  //     if(count>mid){
  //         return nums[index]
  //     }

  // }

  const obj = {};
  for (let index2 = 0; index2 < nums.length; index2++) {
    const key = nums[index2];
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  return +Object.keys(obj).find((key) => obj[key] > mid);
};
