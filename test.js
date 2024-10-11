function getValueByMod9(x) {
    switch (x % 9) {
        case 8:
            return 3;
        case 7:
            return 2;
        case 6:
            return 1;
        case 5:
            return 9;
        case 4:
            return 8;
        case 3:
            return 7;
        case 2:
            return 6;
        case 1:
            return 5;
        case 0:
            return 4;
        default:
            return 'N/A';
    }
}

// Kiểm tra với một số giá trị x từ 0 đến 20
for (let x = 2020; x <= 2030; x++) {
    console.log(`x = ${x}: ${getValueByMod9(x)}`);
}
