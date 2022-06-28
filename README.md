﻿# algorithms

# 1. Binary gap

A _binary gap_ within a positive integer K is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.


Write a function:

```javascript
    class Solution { public int solution(int N); }
```

that, given a positive integer K, returns the length of its longest binary gap. The function should return 0 if K doesn't contain a binary gap.

For example, given K = 1041 the function should return 5, because K has binary representation 10000010001 and so its longest binary gap is of length 5. Given K = 32 the function should return 0, because K has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:
        <ul>
        <li>K is an integer within the range [1..2,147,483,647].</li>
        </ul>

[Solution](./binarygap/binarygap.js "Solution")
