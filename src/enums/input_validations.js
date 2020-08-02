import { required, minLength } from 'vuelidate/lib/validators'

export const input_types = {
    DEFAULT: {
    },
    SEARCH: {
        NAME: 'Search',
        LENGTH: 3,
        VALIDATORS:{
            required,
            minLength: minLength(3)
        }
    }
}

export const validation_messages = {
    REQUIRED: () => 'Field is required',
    MINLENGTH: (name,number) => `${name} must have at least ${number} characters`
}

