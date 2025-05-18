# JavaScript Form Field Validator

This project provides a set of **JavaScript validation functions** using **regular expressions (RegEx)** to validate common form input types. All validation logic is encapsulated in a single `regexValidator` object for simplicity and maintainability.

## Supported Validations

The following form fields and patterns are validated:

1. **Email Addresses**
   - Examples: `user@example.com`, `firstname.lastname@company.co.uk`

2. **URLs** (HTTPS only)
   - Examples: `https://www.example.com`, `https://subdomain.example.org/page`

3. **Phone Numbers** (U.S. formats)
   - Formats: `(123) 456-7890`, `123-456-7890`, `123.456.7890`

4. **Credit Card Numbers**
   - Formats: `1234 5678 9012 3456`, `1234-5678-9012-3456`

5. **Time Formats**
   - 24-hour: `14:30`
   - 12-hour: `2:30 PM`

6. **HTML Tags**
   - Examples: `<p>`, `<div class="example">`, `<img src="image.jpg" alt="description">`

7. **Hashtags**
   - Examples: `#example`, `#ThisIsAHashtag`

8. **Currency Amounts (USD)**
   - Examples: `$19.99`, `$1,234.56`

---

## How to Use

### 1. Clone or Copy the Code

Include the `regexValidator` object in your JavaScript project.

### 2. Call Validation Functions

Each function returns a boolean (`true` or `false`):

```javascript
regexValidator.isValidEmail("user@example.com");       // true
regexValidator.isValidPhone("(123) 456-7890");          // true
regexValidator.isValidCurrency("$19.99");              // true
regexValidator.isValidURL("http://example.com");       // false (only HTTPS allowed)
