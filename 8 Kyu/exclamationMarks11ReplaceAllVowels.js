// Exclamation Marks Series #11: Replace All Vowels to Exclamation Marks
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '!')
}