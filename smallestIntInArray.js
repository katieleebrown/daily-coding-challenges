// Find the Smallest Integer in the Array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestInt

        for (let i = 0; i < args.length; i++) {
            if (!smallestInt) {
                smallestInt = args[i]
            } else if (args[i] < smallestInt) {
                smallestInt = args[i]
            }
        }
        return smallestInt
    }
}

// Edge case - this does not work if 0 is both the smallest integer and not last in the array. Here is my updated answer after finding this error:

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestInt = Number.POSITIVE_INFINITY

        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallestInt) {
                smallestInt = args[i]
            }
        }
        return smallestInt
    }
}
