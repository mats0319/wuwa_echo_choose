// mathCeil num向上取整，保留n位小数
export function mathCeil(num: number, n: number = 0): number {
    for (let i = 0; i < n; i++) {
        num *= 10;
    }

    num = Math.ceil(num);

    for (let i = 0; i < n; i++) {
        num /= 10;
    }

    return num;
}
