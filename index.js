const palindrome = str => {
    str = str.toLowerCase()
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

console.log(palindrome('programmer'))