// Remove All The Marked Elements of a List
// https://www.codewars.com/kata/563089b9b7be03472d00002b/

Array.prototype.remove_ = function (integer_list, values_list) {
    for (let i = 0; i < values_list.length; i++) {
        integer_list = integer_list.filter(x => x != values_list[i])
    }
    return integer_list
}