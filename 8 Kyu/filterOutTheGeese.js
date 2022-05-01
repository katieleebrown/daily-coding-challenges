// Filter Out the Geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    const namesToDeleteSet = new Set(geese);

    return birds.filter((name) => {
        return !namesToDeleteSet.has(name);
    })
}