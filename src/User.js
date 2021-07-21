class User {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  formatName() {
    const fCap = this.fname[0].toUpperCase();
    const lCap = this.lname[0].toUpperCase();
    const fSubstring = this.fname.slice(1);
    const lSubstring = this.lname.slice(1);
    return `${fCap + fSubstring}, ${lCap + lSubstring}` 
  }
}