class User {
  constructor(fname, lname, isTherapist, id) {
    this.fname = fname;
    this.lname = lname;
    this.isTherapist = isTherapist;
    this.id = id;  
  }

  formatName() {
    const fCap = this.fname[0].toUpperCase();
    const lCap = this.lname[0].toUpperCase();
    const fSubstring = this.fname.slice(1);
    const lSubstring = this.lname.slice(1);
    return `${lCap + lSubstring}, ${fCap + fSubstring}` 
  }
}