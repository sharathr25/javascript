/*

Happy Ladybugs is a board game having the following properties:

The board is represented by a string, , of length . The  character of the string, , denotes the  cell of the board.
If  is an underscore (i.e., _), it means the  cell of the board is empty.
If  is an uppercase English alphabetic letter (ascii[A-Z]), it means the  cell contains a ladybug of color .
String  will not contain any other characters.
A ladybug is happy only when its left or right adjacent cell (i.e., ) is occupied by another ladybug having the same color.
In a single move, you can move a ladybug from its current position to any empty cell.
Given the values of  and  for  games of Happy Ladybugs, determine if it's possible to make all the ladybugs happy. For each game, return YES if all the ladybugs can be made happy through some number of moves. Otherwise, return NO.
Example

You can move the rightmost  and  to make  and all the ladybugs are happy. Return YES.

Function Description

Complete the happyLadybugs function in the editor below.

happyLadybugs has the following parameters:

string b: the initial positions and colors of the ladybugs
Returns

string: either YES or NO
Input Format

The first line contains an integer , the number of games.

The next  pairs of lines are in the following format:

The first line contains an integer , the number of cells on the board.
The second line contains a string  that describes the  cells of the board.
Constraints

Sample Input 0

4
7
RBY_YBR
6
X_Y__X
2
__
6
B_RRBR
Sample Output 0

YES
NO
YES
YES
Explanation 0

The four games of Happy Ladybugs are explained below:

Initial board:
    R   B   Y   _   Y   B   R

After the first move:
    R   B   Y   Y   _   B   R

After the second move:
    R   _   Y   Y   B   B   R

After the third move:
    R   R   Y   Y   B   B   _

Now all the ladybugs are happy, so we print YES on a new line.
There is no way to make the ladybug having color Y happy, so we print NO on a new line.
There are no unhappy ladybugs, so we print YES on a new line.
Move the rightmost  and  to form .
Sample Input 1

5
5
AABBC
7
AABBC_C
1
_
10
DD__FQ_QQF
6
AABCBC
Sample Output 1

NO
YES
YES
YES
NO

*/

/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs (b) {
  const freq = {}

  for (let i = 0; i < b.length; i++) {
    const ch = b[i]
    if (freq[ch]) {
      freq[ch] = {
        count: freq[ch].count + 1,
        index: i,
        indexDiff: i - freq[ch].index
      }
    } else {
      freq[ch] = {
        count: 1,
        index: i,
        indexDiff: null
      }
    }
  }

  if (!freq['_']) {
    // if there is no empty place for bugs to move, all should be happy
    for (const key in freq) {
      if (key !== '_' && freq[key].indexDiff !== 1) return 'NO'
    }
  }

  for (const key in freq) {
    if (key !== '_' && freq[key].count === 1) return 'NO'
  }

  return 'YES'
}
