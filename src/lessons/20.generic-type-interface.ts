// kita membuat ApiResponse
interface ApiResponse<responseData> {
  status: boolean; // true or false
  data: responseData; // dynamic. sesuai responseData
  message: string; // string
}

// type Product - ID, name, price
type Product = { id: number; name: string; price: number };

const productResp: ApiResponse<Product> = {
  status: true,
  data: { id: 1, name: "laptop", price: 10000000},
  message: "Data fetched successfully",
};

console.log(productResp)

// kalau misalkan sukses mengambil API
// {
//     status: true,
//     data: [
// {
//         "nama" : "taufik",
// },
// {
//         "nama" : "taufik",
// }
//     ]
//.    message: "data fetched successfully"
// }

// kalau misalkan gagal mengambil API
// {
//     status: false,
//     data: []
//.    message: "data fetched failed"
// }
