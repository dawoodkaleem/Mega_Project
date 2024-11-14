import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("66e7dc1c003e5740120a"); // Your project ID

  account = new Account(this.client);

  // Create a new user account
  async createAccount({ email, password, name }) {
    try {
      console.log("Creating account with:", { email, password, name });

      // Optionally, use ID.unique() for Appwrite's auto-generated user ID
      const userAccount = await this.account.create(
        ID.unique(), // Replace with a custom user ID if needed
        email,
        password,
        name
      );

      console.log("Account created successfully:", userAccount);

      // Login after account creation
      const loginResponse = await this.login({ email, password, userAccount });
      console.log("Login after account creation result:", loginResponse);

      return loginResponse;
    } catch (error) {
      console.error("Error during account creation or login:", error.message);
      throw error;
    }
  }

  // Login a user
  async login({ email, password }) {
    try {
      console.log("Attempting to log in with:", { email, password });

      if (!email || !password) {
        throw new Error("Email and password must be provided.");
      }

      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      email, password;
      console.log("Session created successfully:", session);

      return session;
    } catch (error) {
      console.error("Login failed:", error.message);

      // Provide better error messages based on Appwrite error codes
      if (error.code === 401) {
        console.error(
          "Invalid credentials. Please check your email and password."
        );
      } else if (error.code === 404) {
        console.error("User not found. Please check if the account exists.");
      } else if (error.code === 500) {
        console.error("Server error. Please try again later.");
      }

      throw error;
    }
  }

  // Get the current logged-in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching current user:", error.message);
    }
    return null;
  }

  // Logout the current user
  async logout() {
    try {
      await this.account.deleteSessions("current");
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }
}

const authService = new AuthService();
export default authService;
