## Web stack playground

This is a playground to test and learn about the web stack. [Visit the preview website](https://playground-web-six.vercel.app/fr).

#### The stack used in the provided code includes the following:

Monorepo architecture with:

- TypeScript
- Next.js (a React framework)
- React
- Tailwind CSS (for styling)
- Turbo (for build system)
- ESLint (for linting)
- Zod (for runtime type checking)
- React Hook Form (for form handling)

### Scripts

To start developing, run this cmd and open [localhost:3000](http://localhost:3000).

```bash
$ npm run dev
```

To build the app, run this cmd.

```bash
$ npm run build
```

To build the production app and run the production server, run this cmd.
```bash
$ NODE_ENV=production npm run start
```

 :bulb: Every cmd can be run individually

#### TODO:

1. **Implement Unit Tests**
   - Write unit tests for TypeScript classes using a testing framework like Jest or Mocha.
   - Test React components using testing libraries like React Testing Library or Enzyme.

2. **Implement End-to-End Tests**
   - Use a tool like Playwright to write end-to-end tests that ensure the application functions as expected.

3. **Design and Implement UI System**
   - Use Tailwind CSS and a component library like shadcn/ui and implement a consistent UI system.
   - Create reusable components that can be easily used across the application.

4. **Create UI Documentation**
   - Document the UI system using a tool like Storybook or Styleguidist.
   - Include examples of how to use each component, along with their props and default values.

5. **Set Up Internationalization (i18n)**
   - Use an intl library like Intl and next/intl to support multiple languages in the application.
   - Create translation files for each language, and set up a mechanism for switching between languages.

6. **Integrate Zod with React Hook Form** https://x.com/asidorenko_/status/1797428316233740660)
   - Use Zod to define the schema for the forms, and integrate it with React Hook Form for runtime type checking and form validation.
   - Use Zod's error messages to display validation errors to the user.
   - Share validation between server/client
