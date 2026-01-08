function consecutiveSubstrings(string) {
  const result = [];

  // Use the correct parameter name "string" instead of "input"
  for (let start = 0; start < string.length; start++) {
      let substring = "";
      for (let end = start; end < string.length; end++) {
          substring += string[end];
          result.push(substring);
      }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



