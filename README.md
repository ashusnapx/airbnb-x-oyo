# Airbnb Clone

An Airbnb clone project built with Next.js, Supabase, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Libraries Used](#libraries-used)
- [Usage](#usage)
- [Data Flow Diagram](#data-flow-diagram)
- [Use Case Diagram](#use-case-diagram)
- [UML Diagram](#uml-diagram)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow the steps below:

```bash
# Clone the repository
git clone https://github.com/yourusername/airbnb-clone.git

# Change to project directory
cd airbnb-clone

# Install dependencies
npm install
```

## Libraries Used

- `@hookform/resolvers`
  - Installation: `npm install @hookform/resolvers`
  - Usage: A library for resolving form data.

- `@radix-ui/react-alert-dialog`
  - Installation: `npm install @radix-ui/react-alert-dialog`
  - Usage: A UI component for displaying alert dialogs.

- `@radix-ui/react-dialog`
  - Installation: `npm install @radix-ui/react-dialog`
  - Usage: A UI component for creating dialogs.

- `@radix-ui/react-label`
  - Installation: `npm install @radix-ui/react-label`
  - Usage: A UI component for labels.

- `@radix-ui/react-popover`
  - Installation: `npm install @radix-ui/react-popover`
  - Usage: A UI component for popovers.

- `@radix-ui/react-slot`
  - Installation: `npm install @radix-ui/react-slot`
  - Usage: A UI component for slots.

- `@supabase/auth-helpers-nextjs`
  - Installation: `npm install @supabase/auth-helpers-nextjs`
  - Usage: A library for handling authentication with Supabase in Next.js.

- `@supabase/supabase-js`
  - Installation: `npm install @supabase/supabase-js`
  - Usage: The JavaScript client library for Supabase.

- `@types/react-date-range`
  - Installation: `npm install @types/react-date-range`
  - Usage: Type definitions for the React Date Range library.

- `autoprefixer`
  - Installation: `npm install autoprefixer`
  - Usage: A tool to parse CSS and add vendor prefixes.

- `class-variance-authority`
  - Installation: `npm install class-variance-authority`
  - Usage: A library for handling class variations.

- `clsx`
  - Installation: `npm install clsx`
  - Usage: A utility for constructing className strings.

- `date-fns`
  - Installation: `npm install date-fns`
  - Usage: A library for manipulating dates.

- `eslint`
  - Installation: `npm install eslint`
  - Usage: A tool for identifying and fixing code problems.

- `eslint-config-next`
  - Installation: `npm install eslint-config-next`
  - Usage: The ESLint configuration for Next.js projects.

- `lucide-react`
  - Installation: `npm install lucide-react`
  - Usage: A library of high-quality React icons.

- `next`
  - Installation: `npm install next`
  - Usage: The React framework for building web applications.

- `postcss`
  - Installation: `npm install postcss`
  - Usage: A tool for transforming CSS with JavaScript plugins.

- `react`
  - Installation: `npm install react`
  - Usage: The core React library.

- `react-animated-numbers`
  - Installation: `npm install react-animated-numbers`
  - Usage: A component for animating numbers in React.

- `react-date-range`
  - Installation: `npm install react-date-range`
  - Usage: A date range picker component for React.

- `react-dom`
  - Installation: `npm install react-dom`
  - Usage: The entry point for working with the DOM in React.

- `react-hook-form`
  - Installation: `npm install react-hook-form`
  - Usage: A library for managing forms in React.

- `react-quill`
  - Installation: `npm install react-quill`
  - Usage: A React component for the Quill rich text editor.

- `react-shimmer`
  - Installation: `npm install react-shimmer`
  - Usage: A component for creating shimmering loading effects.

- `react-toastify`
  - Installation: `npm install react-toastify`
  - Usage: A component for displaying toast notifications in React.

- `tailwind-merge`
  - Installation: `npm install tailwind-merge`
  - Usage: A utility for merging Tailwind CSS classes.

- `tailwindcss`
  - Installation: `npm install tailwindcss`
  - Usage: A utility-first CSS framework for rapidly building custom user interfaces.

- `tailwindcss-animate`
  - Installation: `npm install tailwindcss-animate`
  - Usage: A collection of CSS animations for Tailwind CSS.

- `typescript`
  - Installation: `npm install typescript`
  - Usage: A superset of JavaScript that adds static types.

- `yup`
  - Installation: `npm install yup`
  - Usage: A library for object schema validation.

## Usage

To start the project, run the following command:

```bash
npm run dev
```

## Data Flow

The data flow in the Airbnb Clone project is as follows:

1. **User Registration and Authentication:**
   - When a user registers, the registration data is sent to the Supabase authentication service.
   - Supabase returns a JWT token and stores user data in the database.

2. **User Login:**
   - When a user logs in, their credentials are sent to the Supabase authentication service.
   - Supabase returns a JWT token for authentication.

3. **Adding a New Home:**
   - User inputs for a new home are collected through a form.
   - When the form is submitted, the data is sent to the server.
   - The server uploads the image to the Supabase storage and adds the home details to the database.

4. **Viewing Homes:**
   - When a user visits the site, a request is made to fetch a list of homes from the server.
   - The server retrieves the list of homes from the database and sends it back to the client.

5. **Viewing Home Details:**
   - When a user clicks on a home, a request is made to fetch the details of that specific home.
   - The server retrieves the home details from the database and sends them back to the client.

6. **Deleting a Home:**
   - When a user initiates the deletion of a home, a request is sent to the server with the ID of the home.
   - The server deletes the home from the database.

7. **Logout:**
   - When a user logs out, the client sends a request to invalidate the JWT token to the Supabase authentication service.

8. **Toasts for User Feedback:**
   - Toast notifications are used to provide feedback to the user after certain actions, such as successful home addition or deletion.



## Data Flow Diagram

![Data Flow Diagram](diagrams/data-flow-diagram.png)

## Use Case Diagram

![Use Case Diagram](diagrams/use-case-diagram.png)

## U

ML Diagram

![UML Diagram](diagrams/uml-diagram.png)

## Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).
