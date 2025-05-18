const regexValidator = {
  // 1. Email Addresses (e.g., user@example.com, firstname.lastname@domain.co.uk)
  // Matches alphanumeric usernames, optional dots/underscores, and domains with valid TLDs
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  isValidEmail(email) {
    return this.emailRegex.test(email);
  },

  // 2. URLs (HTTPS only, optional path)
  // Matches https:// followed by domain/subdomain and optional path
  urlRegex: /^https:\/\/[\w.-]+\.[a-z]{2,}(\/[\w.-]*)*\/?$/i,
  isValidURL(url) {
    return this.urlRegex.test(url);
  },

  // 3. Phone Numbers (US formats)
  // Matches formats like (123) 456-7890, 123-456-7890, 123.456.7890
  phoneRegex: /^(\(\d{3}\)|\d{3})[.\-\s]?\d{3}[.\-\s]?\d{4}$/,
  isValidPhone(phone) {
    return this.phoneRegex.test(phone);
  },

  // 4. Credit Card Numbers
  // Matches 16-digit card numbers with optional spaces or dashes: 1234-5678-9012-3456 or 1234 5678 9012 3456
  creditCardRegex: /^(?:\d{4}[-\s]?){3}\d{4}$/,
  isValidCreditCard(cardNumber) {
    return this.creditCardRegex.test(cardNumber);
  },

  // 5. Time Formats
  // 24-hour format: HH:MM (00:00 to 23:59)
  // 12-hour format: H:MM AM/PM (with optional leading zero)
  time24HourRegex: /^([01]\d|2[0-3]):[0-5]\d$/,
  time12HourRegex: /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i,
  isValidTime(time) {
    return this.time24HourRegex.test(time) || this.time12HourRegex.test(time);
  },

  // 6. HTML Tags
  // Matches opening or closing HTML tags like <p>, <div class="x">, <img src="...">
  htmlTagRegex: /^<\s*\/?\s*\w+[^>]*>$/,
  isValidHTMLTag(tag) {
    return this.htmlTagRegex.test(tag);
  },

  // 7. Hashtags
  // Matches strings starting with # followed by letters, numbers, or underscores
  hashtagRegex: /^#[A-Za-z0-9_]+$/,
  isValidHashtag(tag) {
    return this.hashtagRegex.test(tag);
  },

  // 8. Currency Amounts (USD)
  // Matches amounts like $19.99, $1,234.56 (with optional comma separation)
  currencyRegex: /^\$\d{1,3}(,\d{3})*(\.\d{2})?$|^\$\d+(\.\d{2})?$/,
  isValidCurrency(amount) {
    return this.currencyRegex.test(amount);
  }
};

// Test Cases to Demonstrate Functionality
const testInputs = {
  emails: ["user@example.com", "firstname.lastname@company.co.uk"],
  urls: ["https://www.example.com", "https://subdomain.example.org/page"],
  phones: ["(123) 456-7890", "123-456-7890", "123.456.7890"],
  creditCards: ["1234 5678 9012 3456", "1234-5678-9012-3456"],
  times: ["14:30", "2:30 PM"],
  htmlTags: ["<p>", '<div class="example">', '<img src="image.jpg" alt="description">'],
  hashtags: ["#example", "#ThisIsAHashtag"],
  currencies: ["$19.99", "$1,234.56"]
};

// Run validations and log results
console.log("Email Validation:");
testInputs.emails.forEach(e => console.log(`${e} => ${regexValidator.isValidEmail(e)}`));

console.log("\nURL Validation:");
testInputs.urls.forEach(u => console.log(`${u} => ${regexValidator.isValidURL(u)}`));

console.log("\nPhone Number Validation:");
testInputs.phones.forEach(p => console.log(`${p} => ${regexValidator.isValidPhone(p)}`));

console.log("\nCredit Card Validation:");
testInputs.creditCards.forEach(c => console.log(`${c} => ${regexValidator.isValidCreditCard(c)}`));

console.log("\nTime Validation:");
testInputs.times.forEach(t => console.log(`${t} => ${regexValidator.isValidTime(t)}`));

console.log("\nHTML Tag Validation:");
testInputs.htmlTags.forEach(tag => console.log(`${tag} => ${regexValidator.isValidHTMLTag(tag)}`));

console.log("\nHashtag Validation:");
testInputs.hashtags.forEach(tag => console.log(`${tag} => ${regexValidator.isValidHashtag(tag)}`));

console.log("\nCurrency Validation:");
testInputs.currencies.forEach(cur => console.log(`${cur} => ${regexValidator.isValidCurrency(cur)}`));
