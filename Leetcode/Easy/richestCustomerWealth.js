// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth

var maximumWealth = function(accounts) {
    for(let i =0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a, b) => a + b, 0)
    }
    accounts.sort((a,b) => b - a)
    return accounts[0]
};