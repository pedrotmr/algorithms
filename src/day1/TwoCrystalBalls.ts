/* 

Given two crystal balls that will break if dropped from high enough
distance, determine the exact spot in which it will break in the most
optimized way.

[false, false, false, false, false, false, false, true, true, true]
*/

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i;
    for (i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break;
    }
    for (let j = i - jumpAmount; j < breaks.length; j++) {
        if (breaks[j]) return j;
    }
    return -1;
}
