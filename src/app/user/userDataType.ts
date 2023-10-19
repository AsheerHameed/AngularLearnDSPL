import { FormControl } from "@angular/forms";

export interface userDataType{
    id: number,
    email: string,
    firstName:string,
    lastName: string,
    address: string,
    dob:  string | Date,
}
export interface UserEditFormControls {
    id: FormControl<number | null>;
    email: FormControl<string | null>;
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    address: FormControl<string | null>;
    dob: FormControl<string | null | Date>;
  }
  