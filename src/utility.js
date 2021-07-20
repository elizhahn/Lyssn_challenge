function formatName(fname, lname) {
  const fCap = fname[0].toUpperCase();
  const lCap = lname[0].toUpperCase();
  const fSubstring = fname.slice(1);
  const lSubstring = lname.slice(1);
  return `${fCap + fSubstring}, ${lCap + lSubstring}` 
}