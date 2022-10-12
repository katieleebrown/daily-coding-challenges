// Surface Area and Volume of a Box
// https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
    return [2 * (height * width) + 2 * (height * depth) + 2 * (width * depth), width * height * depth]
  }