// TUJUAN generic constraints agar data parameter wajib di isi dan menjaga data property

// kita punya sebuah function untuk mencari ID
// ID wajib ada karena extends
// extends adalah constraints
function findById<data extends {id: number}> (rows: data[], id: number): data | undefined {
    // kondisi dengan extends (1)
    // data ini ada atau tidak? sesuai dengan type data atau tidak
    // kalau sesuai lanjut...
    // check data ini punya properties ID atau ga? 
    // kalau ga punya, jadikan undefined

    // tanpa extends (2)
    // data ini ada atau tidak? sesuai dengan type data atau tidak
    // kalau sesuai lanjut...
    // langsung proses code... 
    // Property 'id' does not exist on type 'Data'

    return rows.find(r => r.id === id) // nanti bakal muncul error: Property 'id' does not exist on type 'Data'
}


function findByIdWithoutExtends<data> (rows: data[], id: number): data | undefined {
    // kondisi dengan extends (1)
    // data ini ada atau tidak? sesuai dengan type data atau tidak
    // kalau sesuai lanjut...
    // check data ini punya properties ID atau ga? 
    // kalau ga punya, jadikan undefined

    // tanpa extends (2)
    // data ini ada atau tidak? sesuai dengan type data atau tidak
    // kalau sesuai lanjut...
    // langsung proses code... 
    // Property 'id' does not exist on type 'Data'

    return rows.find(r => r.id === id) // nanti bakal muncul error: Property 'id' does not exist on type 'Data'
}

// dia akan mengambil property yang memang ada.. 
// fungsi ini bakal menjaga, agar tidak mengambil property yang tidak ada..
function getProperty<data, keyData extends keyof data> (object: data, key: keyData): data[keyData] | undefined {
    return object[key]
}

// new case
// // data = users: User[] = [
//     {id: 1, name: "Taufik", email: "taufik@gmail.com"},
//     {id: 2, name: "Budi", email: "budi@gmail.com"}
// ]

// dinamis bisa berdasarkan banyak variabel
// key = "name"
// key = "id"
// key = "email"

// value = "Taufik"


function findByKey<data, keyData extends keyof data> (rows: data[], key: keyData, value: data[keyData]): data | undefined {
    return rows.find(item => item[key] === value)
}

// type untuk membuat structure data
type User = { id: number, name: string; email: string };

type Product = { id: number; name: string; price: number };


// untuk memasukan data user ke dalam variabel users
const users: User[] = [
    {id: 1, name: "Taufik", email: "taufik@gmail.com"},
    {id: 2, name: "Budi", email: "budi@gmail.com"}
]

// untuk memasukan data product ke dalam variabel products
const products: Product[] = [
    {id: 1, name: "Taufik", price: 20000},
    {id: 2, name: "Budi", price: 200000}
]

// users === data

// mau mencari product berdasarkan nama
const byName = findByKey(products, "name", "Taufik")
console.log("ini nama: ", byName)

// ingin mencari data berdasarkan ID untuk users
console.log("user #2", findById(users, 2))

// ingin mencari data berdasarkan ID untuk product
console.log("product #1", findById(products, 1))

console.log("user #1", findByIdWithoutExtends(users, 1))

// misal mengambil property yang tidak ada
console.log("email untuk users #1", getProperty(users[0], "email"))