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
  
Certainly! Here's a comprehensive guide on how Supabase is utilized in the Airbnb Clone project:

---

The Airbnb Clone project is a web application that allows users to list and view rental properties. It leverages [Supabase](https://supabase.io/), an open-source alternative to Firebase, for handling user authentication, database management, and file storage. This guide provides an in-depth overview of how Supabase is integrated into the project.

## Table of Contents

1. [Setting Up Supabase](#setting-up-supabase)
2. [User Authentication](#user-authentication)
3. [Database Management](#database-management)
4. [File Storage](#file-storage)

---

## 1. Setting Up Supabase

### Installation

To integrate Supabase into the project, follow these steps:

1. **Install Supabase CLI**:

   ```bash
   npm install -g supabase
   ```

2. **Initialize Supabase Project**:

   ```bash
   supabase init
   ```

   This command guides you through the process of setting up your project on Supabase. Follow the prompts to create a new project.

3. **Configure `.env.local`**:

   Create a `.env.local` file in the project root and add your Supabase URL and API key:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_api_key
   ```

   Make sure to replace `your_supabase_url` and `your_api_key` with your actual Supabase credentials.

---

## 2. User Authentication

Supabase provides a robust authentication system. In the Airbnb Clone project, user authentication is implemented as follows:

### User Registration

1. **Creating a New User**:

   When a user registers, their data is sent to Supabase using the `createUser` function provided by the Supabase client.

   ```javascript
   const { user, error } = await supabase.auth.signUp({
     email,
     password,
   });
   ```

   The user is now registered in the Supabase authentication system.

2. **Trigger Function for User Insert**:

   A PostgreSQL trigger function (`add_new_user()`) is created to insert the user data into the project's database.

   ```sql
   CREATE FUNCTION public.add_new_user() RETURNS TRIGGER AS $$
   BEGIN
     INSERT INTO public.users (id, metadata, email)
     VALUES (new.id, new.raw_user_meta_data, new.email);
     RETURN new;
   END;
   $$;
   ```

3. **Trigger for User Creation**:

   A trigger (`on_auth_user_created`) is set to execute the `add_new_user` function every time a user is created in the Supabase authentication system.

   ```sql
   CREATE TRIGGER on_auth_user_created
     AFTER INSERT ON auth.users
     FOR EACH ROW
     EXECUTE PROCEDURE public.add_new_user();
   ```

### User Login

1. **Logging In**:

   When a user logs in, their credentials are sent to Supabase for authentication.

   ```javascript
   const { user, error } = await supabase.auth.signIn({
     email,
     password,
   });
   ```

   Supabase returns a JWT token which is stored for subsequent requests.

2. **Protecting Routes**:

   Certain routes in the application are protected and can only be accessed by authenticated users. This is achieved by checking the user's authentication status before allowing access.

   ```javascript
   const user = supabase.auth.user();
   if (!user) {
     // Redirect to login page
   }
   ```

---

## 3. Database Management

Supabase simplifies database management. In the Airbnb Clone project, it is used for storing property listings and user data.

### Adding a New Home

1. **Inserting Home Data**:

   When a user submits a new property listing, the data is sent to the server and inserted into the database.

   ```javascript
   const { data, error } = await supabase.from('homes').insert({
     user_id: user.id,
     title: formData.title,
     // ...other details
   });
   ```

2. **Uploading Images**:

   Images of the property are uploaded to Supabase storage. The resulting URLs are stored in the database.

   ```javascript
   const { data: imageData, error: imageError } = await supabase.storage
     .from('public')
     .upload('homes/images', imageFile);
   ```

---

## 4. File Storage

Supabase provides secure file storage capabilities. In the Airbnb Clone project, it is used for storing property images.

### Uploading Images

1. **Uploading to Storage**:

   Images are uploaded to Supabase storage. The resulting URLs are then associated with the respective property.

   ```javascript
   const { data: imageData, error: imageError } = await supabase.storage
     .from('public')
     .upload('homes/images', imageFile);
   ```

2. **Retrieving Image URLs**:

   The URLs of uploaded images can be retrieved using the `getSignedUrl` function.

   ```javascript
   const imageUrl = supabase.storage
     .from('public')
     .getSignedUrl(imageData

?.Key, new Date(), { expiresIn: 60 });
   ```

---

## Conclusion

By integrating Supabase into the Airbnb Clone project, we have established a secure and reliable backend system for user authentication, database management, and file storage. This approach enhances the scalability and robustness of the application, ensuring a seamless user experience.

For further details and in-depth code examples, refer to the project's source code and documentation.

---

This comprehensive guide covers the setup and integration of Supabase, user authentication, database management, and file storage in the Airbnb Clone project. It provides a detailed overview of each step along with relevant code snippets and explanations.



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
