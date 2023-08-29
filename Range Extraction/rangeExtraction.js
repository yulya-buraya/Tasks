function extractionRange(nums) {
  let formatted = [];
  let start = nums[0];
  let end = start;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      formatData(start, end, formatted);
      start = end = nums[i];
    }
  }
  formatData(start, end, formatted);
  return formatted.join(",");
}

function formatData(start, end, arr) {
  if (start === end) {
    arr.push(start.toString());
  } else if (end - start === 1) {
    arr.push(start.toString());
    arr.push(end.toString());
  } else {
    arr.push(`${start}-${end}`);
  }
  return arr;
}

const data = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];

console.log(extractionRange(data));
