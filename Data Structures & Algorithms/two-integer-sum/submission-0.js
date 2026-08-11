class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let n = nums.length;
       let seen = {};
       for(let i = 0;i<n;i++){
        let complement = target - nums[i];
        if(seen[complement]!==undefined){
            return[seen[complement],i]
        }
        seen[nums[i]] = i;
       }
       return false;
    }
}
