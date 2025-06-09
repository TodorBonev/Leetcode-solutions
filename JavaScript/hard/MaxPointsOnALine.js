function maxPoints(points) {
    if (points.length <= 2) return points.length;

    let max = 0;

    for (let i = 0; i < points.length; i++) {
        const slopes = new Map();
        let duplicates = 1;

        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            if (x1 === x2 && y1 === y2) {
                duplicates++;
                continue;
            }

            const dx = x2 - x1;
            const dy = y2 - y1;
            const gcd = getGCD(dx, dy);
            const slope = `${dy / gcd}/${dx / gcd}`;

            slopes.set(slope, (slopes.get(slope) || 0) + 1);
        }

        let localMax = 0;
        for (let count of slopes.values()) {
            localMax = Math.max(localMax, count);
        }

        max = Math.max(max, localMax + duplicates);
    }

    return max;
}

function getGCD(a, b) {
    if (b === 0) return a;
    return getGCD(b, a % b);
}

console.log(maxPoints([[1, 1], [2, 2], [3, 3]]));
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));