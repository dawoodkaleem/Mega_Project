// // import conf from "../conf/conf";
// // import { Client, Databases, Storage, Query, ID } from "appwrite";

// // export class Services {
// //   client = new Client();
// //   dataases;
// //   bucket;

// //   constructor() {
// //     this.client
// //       .setEndpoint(conf.appwriteURL)
// //       .setProject(conf.appwriteProjectId);
// //     this.datases = new Databases(this.client);
// //     this.bucket = new Storage(this.client);
// //   }
// //   async createPost({ title, slug, content, featuredImage, status, userId }) {
// //     try {
// //       return await this.dataases.createDocument(
// //         conf.appwriteDatabaseId,
// //         conf.appwriteCollectionId,
// //         slug,
// //         {
// //           title,
// //           content,
// //           featuredImage,
// //           status,
// //           userId,
// //         }
// //       );
// //     } catch (error) {
// //       console.log("Appwrite service :: createPost :: error ", error);
// //     }
// //   }
// //   async updatePost(slug, { title, content, featuredImage, status }) {
// //     try {
// //       return await this.dataases.updateDocument(
// //         conf.appwriteDatabaseId,
// //         conf.appwriteCollectionId,
// //         slug,
// //         {
// //           title,
// //           content,
// //           featuredImage,
// //           status,
// //         }
// //       );
// //     } catch (error) {
// //       console.log("Appwrite service :: updatePost :: error ", error);
// //     }
// //   }
// //   async deletePost(slug) {
// //     try {
// //       await this.dataases.deleteDocument(
// //         conf.appwriteDatabaseId,
// //         conf.appwriteCollectionId,
// //         slug
// //       );
// //       return true;
// //     } catch (error) {
// //       console.log("Appwrite service :: deletePost :: error ", error);
// //       return false;
// //     }
// //   }
// //   async getPost(slug) {
// //     try {
// //       return await this.dataases.getDocument(
// //         conf.appwriteDatabaseId,
// //         conf.appwriteCollectionId,
// //         slug
// //       );
// //     } catch (error) {
// //       console.log("Appwrite service :: getPost :: error ", error);
// //       return false;
// //     }
// //   }
// //   async getPosts(queries = [Query.equal("status", "active")]) {
// //     try {
// //       return await this.dataases.listDocuments(
// //         conf.appwriteDatabaseId,
// //         conf.appwriteCollectionId,
// //         queries
// //       );
// //     } catch (error) {
// //       console.log("Appwrite service :: getPost :: error ", error);
// //       return false;
// //     }
// //   }
// //   // File upload services

// //   async uploadFile(file) {
// //     try {
// //       return await this.bucket.createFile(
// //         conf.appwriteBucketId,
// //         ID.unique(),
// //         file
// //       );
// //     } catch (error) {
// //       console.log("Appwrite service ::  :: uploadFile :: error ", error);
// //       return false;
// //     }
// //   }
// //   async deleteFile(fileId) {
// //     try {
// //       await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
// //       return true;
// //     } catch (error) {
// //       console.log("Appwrite service :: deleteFile :: error ", error);
// //       return false;
// //     }
// //   }
// //   getFilePreview(fileId) {
// //     return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
// //   }
// // }

// // const service = new Services();
// // export default service;

// import conf from "../conf/conf";
// import { Client, Databases, Storage, Query, ID } from "appwrite";

// export class Services {
//   client = new Client();
//   databases; // Corrected typo here
//   bucket;

//   constructor() {
//     this.client.setProject(conf.appwriteProjectId);
//     this.databases = new Databases(this.client); // Fixed typo: should be 'databases'
//     this.bucket = new Storage(this.client);
//   }

//   async createPost({ title, slug, content, featuredImage, status, userId }) {
//     try {
//       return await this.databases.createDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//           userId,
//         }
//       );
//     } catch (error) {
//       console.error("Appwrite service :: createPost :: error", error);
//       throw error; // Rethrowing for better error handling
//     }
//   }

//   async updatePost(slug, { title, content, featuredImage, status }) {
//     try {
//       return await this.databases.updateDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//         }
//       );
//     } catch (error) {
//       console.error("Appwrite service :: updatePost :: error", error);
//       throw error;
//     }
//   }

//   async deletePost(slug) {
//     try {
//       await this.databases.deleteDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.error("Appwrite service :: deletePost :: error", error);
//       return false;
//     }
//   }

//   async getPost(slug) {
//     try {
//       return await this.databases.getDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
//     } catch (error) {
//       console.error("Appwrite service :: getPost :: error", error);
//       return false;
//     }
//   }

//   async getPosts(queries = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         queries
//       );
//     } catch (error) {
//       console.error("Appwrite service :: getPosts :: error", error);
//       return false;
//     }
//   }

//   // File upload services
//   async uploadFile(file) {
//     try {
//       return await this.bucket.createFile(
//         conf.appwriteBucketId,
//         ID.unique(),
//         file
//       );
//     } catch (error) {
//       console.error("Appwrite service :: uploadFile :: error", error);
//       return false;
//     }
//   }

//   async deleteFile(fileId) {
//     try {
//       await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
//       return true;
//     } catch (error) {
//       console.error("Appwrite service :: deleteFile :: error", error);
//       return false;
//     }
//   }

//   getFilePreview(fileId) {
//     return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
//   }
// }

// const appwriteService = new Services();
// export default appwriteService;
import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66e7dc1c003e5740120a");
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // async createPost({ title, slug, content, featuredImage, status, userId }) {
  //   try {
  //     return await this.databases.createDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       slug,
  //       {
  //         title,
  //         content,
  //         featuredImage,
  //         status,
  //         userId,
  //       }
  //     );
  //   } catch (error) {
  //     console.log("Appwrite serive :: createPost :: error", error);
  //   }
  // }

  // async createPost({ title, slug, content, featuredImage, status, userId }) {
  //   try {
  //     console.log("Request being made:", {
  //       endpoint: this.client.config.endpoint,
  //       project: this.client.config.project,
  //     });
  //     // Use ID.unique() if slug is not provided or you want automatic IDs
  //     const documentId = slug || ID.unique();

  //     const newPost = await this.databases.createDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       console.log(
  //         conf.appwriteCollectionId,
  //         conf.appwriteDatabaseId,
  //         " Hello"
  //       ),
  //       documentId,
  //       {
  //         title,
  //         content,
  //         featuredImage,
  //         status,
  //         userId,
  //       }
  //     );

  //     console.log("Post created successfully:", newPost);
  //     return newPost;
  //   } catch (error) {
  //     console.error("Appwrite service :: createPost :: error", error.message);
  //     throw error;
  //   }
  // }
  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId = "6714c741000384b1857a",
  }) {
    try {
      // Log the request details
      console.log("Request being made:", {
        endpoint: this.client.config.endpoint,
        project: this.client.config.project,
      });

      // Use slug if provided, otherwise generate a unique documentId
      const documentId = slug || ID.unique();

      // Log the IDs for clarity
      console.log("Collection ID:", conf.appwriteCollectionId);
      console.log("Database ID:", conf.appwriteDatabaseId);
      console.log("Document ID:", documentId);
      console.log(this.client);
      if (!this.client.account) {
        // Redirect to login page or throw error
        throw new Error("User is not logged in", this.client);
      }

      // Create a new post (document) in Appwrite
      const newPost = await this.databases.createDocument(
        conf.appwriteDatabaseId, // Database ID
        conf.appwriteCollectionId, // Collection ID
        conf.documentId, // Document ID
        {
          // Data (post content)
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );

      // Log and return the created post
      console.log("Post created successfully:", newPost);
      return newPost;
    } catch (error) {
      // Handle and log any errors
      console.error("Appwrite service :: createPost :: error", error.message);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,

        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
