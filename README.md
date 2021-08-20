# JS-Asyncronous

## latihan-callback

------


Ceritanya David merupakan anak yang senang sekali jajan boba.

Ini adalah list boba. yang bisa dibeli beserta harganya:

```javascript
const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
```

David mau membeli boba. yang ada di list tersebut secara berurutan, mulai dari Xing Fu Tang,
sampai ke Bubble Station Milk. Namun sayangnya, uang jajan David terbatas, jadi mungkin tidak bisa membeli semuanya.

Buatlah sebuah **function yang bisa menceritakan kegiatan David ketika sedang jajan boba dengan uang jajan nominal tertentu**.
gunakan konsep callback untuk melakukan console.log
simulasi proses asyncronous dengan setTimeout, delay 700 ms

```javascript
function jajanBoba(uangJajan) {
 //your code here
}
```

contoh output :

```
David mulai jajan dengan uang jajan 100.000 rupiah.
Dengan uang 100.000 rupiah, cukup untuk beli 'Xing Fu Tang',
setelah beli 'Xing Fu Tang' uangnya berkurang 38.000 rupiah,
jadi uangnya sisa 62.000 rupiah. 
Dengan uang 62.000 rupiah, cukup untuk beli 'OneZo',
setelah beli 'OneZo' uangnya berkurang 53.500 rupiah,
jadi uangnya sisa 8.500 rupiah.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'KOI The'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Chatime'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Kokumi'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Bubble Station Milk'.
David pulang dengan sisa uang jajan 9.500 rupiah.
```
