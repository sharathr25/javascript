const trim = str => str.replace(/^\s*|\s*$/g, '')

const normalize = str => str.replace(/\-/g, '')

const cleanInput = fp.compose(normalize, trim)
// In the above funtion declaration, the constituent functions doesn't declare arguments(pointts of function), as we would see in traditional function declaration
// This way of composing functions or piping functions makes our code more declarative and point free
