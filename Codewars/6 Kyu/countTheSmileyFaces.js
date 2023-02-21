// Count the Smiley Faces
// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
    let smiles = [`:)`, `:D`, `;)`, `;D`, `:-)`, `:-D`, `;-)`, `;-D`, `:~)`, `:~D`, `;~)`, `;~D`]
    return arr.filter(x => smiles.includes(x)).length
}