import { faker } from '@faker-js/faker';

export type UserData = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    name: string;
    title: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile_number: string;
    birth: string;
    birth_date: string;
    birth_month: string;
    birth_year: string;
};
const ALLOWED_COUNTRIES = [
  'India',
  'Australia',
  'Singapore',
  'Canada',
  'United States',
  'Israel',
  'New Zealand',
] as const;
const ALLOWED_TITLES = [
  'Mr',
  'Mrs',
] as const;

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export function generateNewUser(): UserData {
  const fullbirth = faker.date.birthdate().toISOString();
  const birth_date = String(Number(fullbirth.slice(8,10)));
  const birthMonthIndex = Number(fullbirth.slice(5, 7));
  const birth_month = monthNames[birthMonthIndex - 1];
  const birth_year = String(Number(fullbirth.slice(0,4)));

  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    name: faker.person.fullName(),
    title: faker.helpers.arrayElement(ALLOWED_TITLES),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.helpers.arrayElement(ALLOWED_COUNTRIES),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile_number: faker.phone.number(),
    birth: fullbirth,
    birth_date,
    birth_month,
    birth_year,
  };
}