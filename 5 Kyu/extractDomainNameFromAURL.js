// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    console.log(url)

    if (url.charAt(0) == 'h') {
        let splitOne = url.split('/')
        console.log(splitOne)
        let splitTwo = splitOne[2].split('.')
        console.log(splitTwo)

        if (splitTwo[0] == 'www') {
            return splitTwo[1]
        } else {
            return splitTwo[0]
        }
    } else if (url.charAt(0) == 'w') {
        let chars = url.split('.')
        return chars[1]
    } else {
        let split = url.split('.')
        return split[0]
    }
}