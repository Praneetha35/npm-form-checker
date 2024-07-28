# 🌟 form-checker 🌟

form-checker is an easy-to-use form validation library that supports both synchronous and asynchronous validations, designed for seamless integration with React.

## ✨ Features

- **Synchronous and Asynchronous Validation:** Supports real-time validation and async checks like username availability.
- **Built-in Common Validations:** Includes built-in validators for username, email and password.
- **Real-Time Validation:** Provides instant feedback as users fill out forms.
- **Ease of Use:** Simplified API to make integration highly intuitive.

## 📦 Installation

Install the package using npm or yarn:

```sh
npm install @validation-lib/form-checker
# or
yarn add @validation-lib/form-checker
```

## 🚀 Usage

### Import the validateEmail function from the form-checker library
```sh
import {validateEmail} from "@validation-lib/form-checker";
```

### Use the validateEmail function to check if the email is valid
```sh
const validEmail = validateEmail(formData.email);
```


