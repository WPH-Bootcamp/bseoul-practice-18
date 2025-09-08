// fungsi firstItem, mempunyai parameter pertama. yaitu arr
// untuk mengambil item pertama, karena arr[0] => index pertama
function firstItem<data>(arr: data[]): data | undefined {
  // kondisi 1 misal, ada datanya di dalam variabel arr
  // dia akan membaca data tersebut

  // kondisi 2, misal tidak ada data di dalam variabel arr
  // dia akan membaca undefined

  return arr[0];
}

let data = ["apel", "semangka", "nanas"];

let output = firstItem(data)

console.log(output) // akan memunculkan apel