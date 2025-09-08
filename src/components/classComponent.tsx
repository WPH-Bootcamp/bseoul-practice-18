import React from 'react';

// props fungsinya buat menerima data..
type GreetingWithClassProps = {
  name?: string; // optional
  email?: string // optional
};

// extends react.component => Component (children) karena dipanggil oleh App

export class GreetingWithClass extends React.Component<GreetingWithClassProps> {

   // apalah ada nama? dari GreetingWithClassProps

   // kalau tidak ada, pakai yang default (john)

   // kalau ada, pake nilai tersebut


  // Default props, jika `name` tidak diberikan saat komponen dipanggil
  static defaultProps = {
    name: 'Default',
    email: 'taufik@gmail.com'
  };


  // rendering HTML nya
  render() {
    return (
        <div>
            <h1>Hello, {this.props.name}</h1>
            <h2>Email saya. {this.props.email}</h2>
            <br></br>
        </div>
    )
  }
}