type UserApiResponse = {
  status: 'Error' | 'Success';
  data?: { id: string; name: string }; // ? itu adalah optional
  errorMessage?: string;
};

function handleResponse(res: UserApiResponse) {
  if (res.status === 'Success') {
    console.log(res.data.name); // Error: Property 'name' does not exist on type 'undefined'.
  } else {
    console.log(res.errorMessage.length); // Error: Property 'length' does not exist on type 'undefined'.
  }
}

// case 2
// type pertama
type SuccessResponse = {
  status: 'Success';
  data: { id: string; name: string };
};

// type kedua
type ErrorResponse = {
  status: 'Error';
  errorMessage: string;
};


// ApiResponse
type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse2(res: ApiResponse) {

    // kalau sukses munculkan data
  if (res.status === 'Success') {
    console.log(res.data.name); // Tidak ada error, TypeScript tahu 'data' pasti ada
  } else {
    // kalau tidak, munculkan error message
    console.log(res.errorMessage.length); // Tidak ada error, TypeScript tahu 'errorMessage' pasti ada
  }
}

const res1: SuccessResponse = {
    status: "Success",
    data: {id: "1", name: "Taufik"}
}

const res2: ErrorResponse = {
    status: "Error",
    errorMessage: "User not found"
}

console.log(res1)

console.log(res2)



// case 3
// type pertama
type SuccessResponse2<T> = {
  status: 'Success';
  data: T
};

// type kedua
type ErrorResponse2 = {
  status: 'Error';
  errorMessage: string;
};


// ApiResponse
type ApiResponse2<T> = SuccessResponse2<T> | ErrorResponse;

function handleResponse3<T>(res: ApiResponse2<T>) {
    if (res.status === "Success") console.log("Data: ", res.data)
    else console.log("Error: ", res.errorMessage)
}

// casting
type User = {id: string, name: string}

const rawUser = {
    status: "Success",
    data: {id: "1", name: "Taufik"}
} as ApiResponse2<User>

const rawError = {
    status: "Error",
    errorMessage: "Not Found",
} as ApiResponse2<User>


handleResponse3(rawUser)
handleResponse3(rawError)