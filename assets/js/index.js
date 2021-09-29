// alphabet 'E'
for (let i = 0; i < 5; i++) {
    str = ` `
    for (let j = 0; j < 5; j++) {
        if ((i % 2) && (j > 0)) {
            str += `    `
        }
        else {
            str += ` - `
        }
    }
    console.log(str)
}

//solid rectangle
for (let i = 0; i < 5; i++) {
    str = ` `
    for (let j = 0; j < 5; j++)
        str += ` * `
    document.write(str)
    document.write("<br>")
    console.log('the solid rectangle was printed on document')
}

console.log("\n")

//hollow rectangle
for (let i = 0; i < 5; i++) {
    str = ` `
    for (let j = 0; j < 5; j++) {
        if (`${i}${j}` == 11 || `${i}${j}` == 12 || `${i}${j}` == 13 || `${i}${j}` == 21 || `${i}${j}` == 22 || `${i}${j}` == 23 || `${i}${j}` == 31 || `${i}${j}` == 32 || `${i}${j}` == 33) {
            str += `    `
        }
        else {
            str += ` ${i}${j} `
        }
    }
    console.log(str)
}

//square in 2parts
for (let i = 0; i < 5; i++) {
    str = ` `
    for (let j = 0; j < 5; j++)
        if (i > j)
            str += ` * `
        else
            str += ` # `
    console.log(str)
}

//half pyramid
for (let i = 0; i < 7; i++) {
    str = ` `
    for (let j = 0; j < 7; j++)
        if (i > j)
            str += ` * `
        else
            str += `    `
    console.log(str)
}
console.log("\n")
//inverted half pyramid
for (let i = 0; i < 5; i++) {
    str = ` `
    for (let j = 0; j < 5; j++)
        if (j == 0 || i == 0 || i + j <= 4)
            str += ` * `
        else
            str += `    `
    console.log(str)

}

//hollow inverted half pyramid
for (let i = 0; i < 7; i++) {
    str = ` `
    for (let j = 0; j < 7; j++)
        if (j == 0 || i + j == 6 || i == 0)
            str += ` ${i}${j} `
        else
            str += `    `
    console.log(str)
}

//triangle
for (let i = 0; i < 7; i++) {
    str = ` `
    for (let j = 0; j < 7; j++)
        if ((j == 6 && i + j <= 11) || (j == 0 && i + j <= 5) || (j == 2 && i + j <= 3) || (j == 1 && i + j <= 4) || (j == 4 && i + j <= 5) || (j == 1 && j + i <= 4) || (j == 5 && i + j <= 8))
            str += `    `
        else
            str += ` ${i}${j} `
    console.log(str)
}
console.log("\n")
//inverted triangle
for (let i = 0; i < 4; i++) {
    str = ` `
    for (let j = 0; j < 7; j++)
        if((j==0&&i+j>=1)||(j==2&&i+j>=5)||(j==1&&i+j>=3)||(j==4&&i+j>=7)||(j==5&&i+j>=7)||j==6&&i+j>=7)
        str+=`    `
        else
        str += ` ${i}${j} `
        // str+=` ${i}${j} `
    console.log(str)
}
console.log("\n")
//hollow full triangle
for (let i = 0; i < 3; i++) {
    str = ` `
    for (let j = 2; j < 12; j+=2)
    if((i==0&&j==6)||(i==1&&i+j % 2)||(i==2))
        str += ` ${i}${j} `
        else if((` ${i}${j} `==12)||(` ${i}${j} `==16)||(` ${i}${j} `==110))
        str+="    "
        else
        str+="    "
    console.log(str)
}

/*for(let i=0;i<5;i++){
    str=''
    for(let j=0;j<5;j++){
        if(j+i==4 || j==i){
            if((j+i)>=4 && j>=i)
                str+=` ${i}${j} `
            else
                str+=`    `
        }
        else
            str+=`    `
    }
    console.log(str)
}*/