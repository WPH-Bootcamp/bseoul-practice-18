// response (sukses dan error dan warning)

// case 1 => sukses
// case 2 => error
// case 3 => warning

// case ApiResponse (1)
type ApiResponse<data> = data extends { success: true} ? "Sukses" : "Error"

// bisa nulis conditional sesuai dengan yang kita inginkan..
type StatusResult<flag> = 
flag extends "success" ? {ok: true; data: string} :
flag extends "failed" ? {ok: true; error: string} :
flag extends "pending" ? {ok: true; loading: string} :
never; 

function handleResponse<data extends {success: boolean}>(response: data): ApiResponse<data> {
    return (response.success ? "Sukses" : "Error") as ApiResponse<data>
}

const case1 = handleResponse({success: true}) // "Sukses"

const case2 = handleResponse({success: false}) // "Error"


/// ================ //

// case saveUser (2)
type User = {
    nama: string;
    email: string;
    password: string;
    telepon: string;
}

type Result<flag> = 
flag extends "success" ? 
{ok: true, data: string} : 
{ok: false, error: string}

// buildResult biasanya untuk helper (bisa digunakan berulang kali)
// buildResult akan menerima data, success atau fail 
function buildResult<data extends "success" | "fail">(flag: data): Result<data> {
    if (flag === "success") return {ok: true, data: "Data berhasil di simpan"} as Result<data> 
    
    return {ok: false, error: "Gagal menyimpan data"} as Result<data>  
}

// menyimpan users
function saveUser(u: User): Result <"success"> | Result<"fail"> {
    // kalau misal namanya kurang dari 3 karakter atau bernilai kosong
    if (!u.nama || u.nama.trim().length <3) return {ok: false, error: "Nama minimal 3 karakter"}

    // password minimal 6 karakter
    if (u.password.length < 6) return {ok: false, error: "password minimal 6 karakter"}

    // nama ga boleh admin
    if(u.nama == "admin") return buildResult("fail")

     // kita bakal jalanin ini
    return buildResult("success")
}

// menghapus users
function deleteUser(u: User): Result <"success"> | Result<"fail"> {
    // contoh delete
    if (u) {
        u.nama = ""
        u.email = ""
        u.password = ""
        u.telepon = ""
    }

    return buildResult("success")
}


const data = saveUser({
    nama: "admin",
    email: "taufik@example.com",
    password: "secret123",
    telepon: "628123456789"
})

const deleteuser = deleteUser({
    nama: "admin",
    email: "taufik@example.com",
    password: "secret123",
    telepon: "628123456789"
})

console.log("data: ", data)

console.log("deleteUser: ", deleteuser)