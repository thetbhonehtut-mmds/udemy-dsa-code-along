function areThereDuplicates() {
  console.log([...arguments]);
  let args = [...arguments].sort();
  for (let i = 0; i < args.length - 1; i++) {
    console.log(args[i], args[i + 1]);
    if (args[i] == args[i + 1]) {
      return true;
    }
  }

  return false;

  //1 2 3 4 5 6 2 7 8 9 0
}
