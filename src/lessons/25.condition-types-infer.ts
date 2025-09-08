type IdOf<T> = T extends {id: infer I} ? I : never;

type User = {id: number | string; role: "user"} // id => number

type Admin = {id: string; role: "admin"} // id => string

type UserId = IdOf<User> // number
type AdminId = IdOf<Admin> // string

// kalau ga pake infer
type UserIdTanpaInfer = number
type AdminIdTanpaInfer = string

// ID => representasi data unique
// Email => representasi data unique
// nomor hape => representasi data unique
// no ktp => representasi data unique

type Role = 'user' | 'admin' | 'superadmin'

function handle(role: Role) {
    switch (role) {
        case "user":
            console.log("ini users")
            break;
        case "admin":  
            console.log("ini admin")
            break;
        default:
            const notExist: never = role
            return notExist
    }
}

console.log(handle("superadmin"))


// case infer dalam bentuk array
type User2 = {id: number; name: string}

type Array<T> = T extends (infer U)[] ? U : never;

type Test1 = Array<User2[]>

// [{id: number; name: string}]

// parent
type Notification<TypeName extends string, Payload> = {
  type: TypeName; // Jenis notifikasi (misalnya, 'email', 'sms')
  payload: Payload; // Data yang diperlukan untuk notifikasi
};

// children
type EmailNotification = {
  recipientEmail: string;
  subject: string;
  body: string;
};

// children
type SMSNotification = {
  recipientPhoneNumber: string;
  message: string;
};

// children
type PushNotification = {
  deviceId: string;
  title: string;
  content: string;
};

// Tipe-tipe notifikasi spesifik
type EmailNotificationType = Notification<'email', EmailNotification>;
type SMSNotificationType = Notification<'sms', SMSNotification>;
type PushNotificationType = Notification<'push', PushNotification>;
