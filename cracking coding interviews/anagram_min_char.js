function main() {
    let a = readLine();
    let b = readLine();
    let obj = {},
        count = 0;
    for (let i = 0; i < a.length; i++) {
        const o = a[i];
        obj[o] = obj[o] ? obj[o] + 1 : 1;
    }

    for (let i = 0; i < b.length; i++) {
        const o = b[i];
        obj[o] = obj[o] ? obj[o] - 1 : -1;
    }

    Object.entries(obj).forEach(([key, value]) => {
        count += Math.abs(value);
    });
    console.log(count);
}