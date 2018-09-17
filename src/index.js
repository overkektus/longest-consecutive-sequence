module.exports = function longestConsecutiveLength(array) {
  const set = new Set(array);
  let longest = 0;

  if(!array || array.length == 0) {
    return longest;
  }
  
  set.forEach(num => {
    if(!set.has(num-1)) {
      let currentNum = num;
      let currentStreak = 1;
      
      while(set.has(currentNum+1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      
      longest = Math.max(longest, currentStreak);
    }
  });
  
  return longest;
}

// https://leetcode.com/articles/longest-consecutive-sequence/