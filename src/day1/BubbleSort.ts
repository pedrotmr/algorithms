/*
- iterar sobre a rray
- checa se o numero do lado eh maior que o atual
- se for, trocam de posicao
  [9,3,7,4,69,420,42]
  [3,7,4,9,69,42,420]
  [3,4,7,9,42,69]
  [3,4,7,9,42]
  [3,4,7,9]
*/

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length - 1 - i ; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
