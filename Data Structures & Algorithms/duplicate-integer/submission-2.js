class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length;
        for(var i = 0;i<n;i++){
            for(var j = i +1;j<n;j++){
                if(nums[i]===nums[j]){
                    return true;
                }
            }

        }
        return false;
    }
}
