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