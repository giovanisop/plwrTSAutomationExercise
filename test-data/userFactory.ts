import { faker } from '@faker-js/faker';

const ALLOWED_COUNTRIES = [
  'India',
  'Australia',
  'Singapore',
  'Canada',
  'United States',
  'Israel',
  'New Zealand',
] as const;

export function generateNewUser() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password({ length: 10 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        name: faker.person.fullName(),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement(ALLOWED_COUNTRIES),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobile: faker.phone.number(),
        birth: faker.date.birthdate().toISOString(),
  };
}