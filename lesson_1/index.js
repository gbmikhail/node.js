function isSimple (n) {
    if (n === 1 || n === 0) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const colors = require('colors')
const args = process.argv.slice(2)

if (args.length !== 2)
    console.log(colors.red('Аргументов должно быть 2!'))
const min = parseInt(args[0])
const max = parseInt(args[1])
if (isNaN(min) || isNaN(max))
    console.log(colors.red('В аргументах допускаются только числа'))

let list = []
for (let i = min; i <= max; i++) {
    if (isSimple(i))
        list.push(i);
}

if (list.length === 0) {
    console.log(colors.red('Простых чисел в диапазоне нет'))
}
else {
    let line_colors = 1;
    for (let i of list) {
        if (line_colors === 1)
            console.log(colors.red(i))
        else if (line_colors === 2)
            console.log(colors.green(i))
        else
            console.log(colors.blue(i))

        line_colors++;
        if (line_colors > 3)
            line_colors = 1
    }
}
