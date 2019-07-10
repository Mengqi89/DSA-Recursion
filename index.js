const newArr = []

const arrayDoubler = function (arr) {
    if (arr.length === 0) {
        return
    }

    newArr.push(arr[0] * 2)
    console.log(newArr)
    return arrayDoubler(arr.splice(1))
}

// arrayDoubler([1, 2, 3])


//1. Counting Sheet
function countSheep(num) {
    if (num === 0) {
        console.log("All sheep jumped over the fence")
        return
    }

    console.log(`${num}: another sheep jumped over the fence`)
    num = num - 1
    return countSheep(num)
}

// countSheep(4)

// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent.The function returns the value of the base raised to the power of the exponent.Use only exponents greater than or equal to 0(positive numbers)

// powerCalculatorRec(10, 2) should return 100
// powerCalculatorRec(10, -2) should return exponent should be >= 0


function powerCalculatorRec(base, exp) {
    if (exp === 1) {
        return base
    }
    if (exp < 1) {
        return "exponent should be greater than 0"
    }

    return base * powerCalculatorRec(base, exp - 1)

}

// console.log(powerCalculatorRec(10, 3))

// 3. Reverse String
// Write a function that reverses a string.Take a string as input, reverse the string, and return the new string.

function reverseStr(str) {
    if (str.length === 0) {
        return ''
    }
    const newStr = str.slice(-1)

    return newStr + reverseStr(str.slice(0, str.length - 1))
}

// console.log(reverseStr('abcde'))

// 4. nth Triangular Number
// Calculate the nth triangular number.A triangular number counts the objects that can form an equilateral triangle.The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangularNum(n) {
    if (n === 0) {
        return 0
    }
    return n + triangularNum(n - 1)
}

// console.log(triangularNum(5))

// 5. String Splitter
// Write a recursive function that split a string based on a separator(similar to String.prototype.split).Don't use JS array's split function to solve this problem.

// Input: 02 / 20 / 2020
// Output: 02202020

