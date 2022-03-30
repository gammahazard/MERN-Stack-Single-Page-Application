import bcrypt from 'bcryptjs'
const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'Admin User1',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'Admin User2',
      email: 'admin2@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
  ]
  // test data for users, 3 admins for each dev
  export default users