/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    if (!seen[word]) {              // 2 * n = O(2n) ~= 0(n)
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(2n) ~= 0(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n) Fair/Linear Time

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 2 * n^2 = O(n^2)
      c++                           // 2 * n^2 = O(n^2)
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2)
      if (comparing === word) {     // 2 * n^2 = O(n^2)
        isUnique = false;           // 2 * n^2 = O(n^2)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 2 * n = O(2n) ~= O(n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: 2 * n^2 = O(n^2) Horrible/Quadratic Time