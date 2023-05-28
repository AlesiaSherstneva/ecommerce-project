import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2shopValidators {
    static notOnlyWhitespace(control: FormControl): ValidationErrors {
        if ((control.value != null) && (control.value.trim().length <= 1)) {
            return { 'notOnlyWhitespace': true };
        } else {
            return null;
        }
    }
}