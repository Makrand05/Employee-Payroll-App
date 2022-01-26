class EmployeePayrollData{
    get name(){
        return this._name
    }
    set name(name){
        const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name.value)){
            this._name=name
        }
        else{
           throw "Name is invalid";
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get salary() {
        return this._salary;
    };

    set salary(salary) {
        this._salary = salary;
    }

    get gender() {
        return this._gender;
    };
    set gender(gender) {
        this._gender = gender;
    }

    get startDate() {
        return this._startDate;
    }
}