// simulasi proses order: bayar -> barang di kemas -> kirim barang.

type OrderId = number;

// misal saya memanggil fungsi wait, agar menunggu 300ms
function wait(ms: number) {
  // misal mau nunggu 1 menit... 60 second x 1000 ms = 60000 ms (1 menit)
  // ms = 300
  // void => tidak punya hasil data.. (sukses atau tidak)
  // promise void -> selesai tanpa return value
  // res -> resolver untuk menyelesaikan promise kalau sudah selesai
  // setTimeout buat ngecheck dia udah selesai atau belum? berdasarkan ms nya..
  return new Promise<void>((res) => setTimeout(res, ms));
}

interface Payment {
  orderId: OrderId;
  paid: true;
}

async function bayar(orderId: OrderId): Promise<Payment> {
  await wait(300); // menunggu proses pembayaran
  console.log(`Pembayaran dengan ${orderId} sudah selesai...`);
  return { orderId, paid: true };
}

interface Packed {
  orderId: OrderId;
  packed: true;
}

async function packing(orderId: OrderId): Promise<Packed> {
  await wait(400); // 400 ms
  console.log(`Order ${orderId} telah di packing...`);
  return { orderId, packed: true };
}

interface Delivery {
  orderId: OrderId;
  delivery: true;
}

async function delivery(orderId: OrderId): Promise<Delivery> {
  await wait(500); // 500 ms
  console.log(`Order ${orderId} telah di diambil...`);
  return { orderId, delivery: true };
}

async function processOrder(orderId: OrderId) {
  const payment = await bayar(orderId); // berjalannnya 1x

  // bisa multiple running..
  // misal kita lagi packing barang..
  // sembari kita packing barang, si kurir bakal ke lokasi kita...
  const [packingData, deliveryData] = await Promise.all([
    packing(orderId),
    delivery(orderId),
  ]);

  console.log("packing & delivery done: ", {
    payment,
    packingData,
    deliveryData,
  });
}

processOrder(100);
