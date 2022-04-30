// Closest Elevator
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a

function elevator(left, right, call) {
    return (Math.abs(right - call)) == (Math.abs(left - call)) ? 'right' : (Math.abs(right - call)) < (Math.abs(left - call)) ? 'right' : 'left'
}