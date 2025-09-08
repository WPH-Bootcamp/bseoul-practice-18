// misalkan ada type CREATE, UPDATE, DELETE

// filtering based on type

// check type nya, apakah CREATE itu ada?

// dia sukses

// type filtering
type Filter<data, union> = data extends union ? data : never;

// type event
type Event = "create" | "update" | "delete" | "read"

// type admin (bisa semua akses untuk admin)
type adminAccount = Filter<Event, "create" | "update" | "delete" | "read">
// type user (yang hanya bisa membaca data)
type userAccount = Filter<Event, "read">

// Sosial Media
type SosialMedia = "facebook" | "instagram" | "twitter" | "linkedin"

// account users
function handleAccountUser(userId: string, user: userAccount) {
    if (user === "read") console.log(`${userId} telah membaca data`)
}

// account admin
function handleAccountAdmin(admin: adminAccount) {
    if (admin === "read") console.log("admin membaca datanya!")
    else if (admin === "create") console.log("admin membuat datanya!")
    else if (admin === "delete") console.log("admin menghapus datanya!")
    else if (admin === "update") console.log("admin mengupdate datanya!")
}

function readingData() {
    // informasi data users
    let userId = "12345678"
    let data = "Taufik Users"

    console.log(data) // membaca data

    // masuk ke audit
    handleAccountUser(userId, "read")
}