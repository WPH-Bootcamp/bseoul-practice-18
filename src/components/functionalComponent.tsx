import React from 'react';

type GreetingWithFunctionProps = {
  name?: string;
  email?: string;
};


// Definisikan tipe untuk alamat (Address)
type Address = {
  street?: string;
  city?: string;
  zip?: string;
};

// Definisikan tipe untuk props UserProfile
type UserProfileProps = {
  name?: string; // ? berarti opsional, jadi bisa tidak diberikan
  age: number; // age adalah wajib
  address: Address; // Address adalah tipe custom yang mengikuti struktur yang didefinisikan di atas
};

// Functional component UserProfile
export const UserProfile: React.FC<UserProfileProps> = ({
  name = 'Guest', // Nilai default untuk name adalah 'Guest'
  age,
  address: { street, city, zip }, // Destructuring langsung pada props
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <h2>Address:</h2>
      <p>
        {street}, {city}, {zip}
      </p>
    </div>
  );
};


// Functional component menggunakan React.FC untuk memberikan type safety
export const GreetingWithFunction: React.FC<GreetingWithFunctionProps> = ({
  name = 'John',
  email = "taufik@gmail.com"
}) => {
  return <h1>Hello, {name}</h1>;
};

export const DontChangeThePropsExample: React.FC<UserProfileProps> = (props) => {
  // props.name = 'Jane'; // Ini akan menimbulkan error karena props adalah read-only
  // props.age = 30 // read only

  // props.name = "Taufik" (langsung ganti gabisa)

  // kalau mau ganti props.
  // pindahin dulu ke variable
  let name = props.name
  name = "ini ganti"

  return <h1>Hello, {name}</h1>;
};