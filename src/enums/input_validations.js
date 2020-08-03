import { required,email,minValue } from 'vuelidate/lib/validators'

export const input_types = {
    DEFAULT: {
        NAME: 'Text',
        VALIDATORS: {
            required,
        }
    },
    SEARCH: {
        NAME: 'Search',
        VALIDATORS: {
        }
    },
    EMAIL: {
        NAME: 'Email',
        VALIDATORS: {
            email,
            required
        }
    },
    NUMBER: {
        NAME: 'Number',
        VALIDATORS: {
            minValue: minValue(9),
            required
        }
    },
    NUMDESC: {
        NAME: 'Description',
        VALIDATORS: {
            required
        }
    }
}

export const validation_messages = {
    REQUIRED: () => 'Field is required',
    MINLENGTH: (name,number) => `${name} must have at least ${number} characters`
}

