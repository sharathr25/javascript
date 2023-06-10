const passwords = [
  '123456',
  'password',
  'admin',
  'freecodecamp',
  'mypassword123'
]

// imperative code:
// Imperative programming is like how you do something
let longPasswords = []
for (let i = 0; i < passwords.length; i++) {
  const password = passwords[i]
  if (password.length >= 9) {
    longPasswords.push(password)
  }
}
console.log(longPasswords) // logs ["freecodecamp", "mypassword123"];

// declrative code:
// declarative code is more like what you do.
longPasswords = passwords.filter(password => password.length >= 9)
console.log(longPasswords) // logs ["freecodecamp", "mypassword123"];

// Imperative and declarative programming achieve the same goals.
// They are just different ways of thinking about code.

// metaphors
// An imperative approach (HOW):
// “I see that table located under the Gone Fishin’ sign is empty. My husband and I are going to walk over there and sit down.”

// A declarative approach (WHAT):
// “Table for two, please.”
