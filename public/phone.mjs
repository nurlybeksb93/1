// The country prefix is rendered separately and cannot be edited.
export function nationalDigits(value) {
 let digits = String(value ?? '').replace(/\D/g, '');
 if (digits.length === 11 && /^[78]/.test(digits)) digits = digits.slice(1);
 return digits.slice(0, 10);
}
export function formatNationalPhone(value) {
 const digits = nationalDigits(value);
 if (!digits) return '';
 let result = '(' + digits.slice(0, 3);
 if (digits.length >= 3) result += ')';
 if (digits.length > 3) result += '-' + digits.slice(3, 6);
 if (digits.length > 6) result += '-' + digits.slice(6, 8);
 if (digits.length > 8) result += '-' + digits.slice(8, 10);
 return result;
}
