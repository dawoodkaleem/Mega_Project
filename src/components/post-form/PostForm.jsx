// import { useCallback } from "react";
// import { Button, Input, Select, RTE } from "../index";
// import { useForm } from "react-hook-form";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// function PostForm({ post }) {
//   const { register, handelSubmit, watch, setValue, control, getValues } =
//     useForm({
//       defaultValues: {
//         title: post?.title || "",
//         slug: post?.slug || "",
//         content: post?.content || "",
//         status: post?.status || "active",
//       },
//     });
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.user.userData);
//   const submit = async (data) => {
//     if (post) {
//       const file = data.image[0]
//         ? appwriteService.uploadFile(data.image[0])
//         : null;
//       if (file) {
//         appwriteService.deleteFile(post.featuredImage);
//       }
//       const dbPost = await appwriteService.updatePost(post.$id, {
//         ...data,
//         featuredImage: file ? file.$id : undefined,
//         if(dbPost) {
//           navigate(`/post/${dbPost.$id}`);
//         },
//       });
//     } else {
//       const file = await appwriteService.uploadFile(data.image[0]);
//       if (file) {
//         const fileId = file.$id;
//         data.featuredImage = fileId;
//       }
//       const dbPost = await appwriteService.createPost({
//         ...data,
//         userId: userData.$id,
//       });
//       if (dbPost) {
//         navigate("./post/${dbPost.$id}");
//       }
//     }
//   };

//   const slugTransfrom = useCallback((value) => {
//     if (value && typeof value === "string") {
//       return value
//         .trim()
//         .toLowerCase()
//         .replace(/^[a-zA-Z\d\s]+/g, "-")
//         .replace(/\s/g, "-");
//     }
//     return "";
//   }, []);

//   React.useEffect(() => {
//     const subscribtion = watch((value) => {
//       if (name == "title") {
//         setValue("slug", slugTransfrom(value.title, { shouldValidate: true }));
//       }
//     });
//     return () => {
//       subscribtion.unsubscribe();
//     };
//   }, [watch, slugTransfrom, setValue]);

//   return (
//     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//       <div className="w-2/3 px-2">
//         <Input
//           label="Title :"
//           placeholder="Title"
//           className="mb-4"
//           {...register("title", { required: true })}
//         />
//         <Input
//           label="Slug :"
//           placeholder="Slug"
//           className="mb-4"
//           {...register("slug", { required: true })}
//           onInput={(e) => {
//             setValue("slug", slugTransform(e.currentTarget.value), {
//               shouldValidate: true,
//             });
//           }}
//         />
//         <RTE
//           label="Content :"
//           name="content"
//           control={control}
//           defaultValue={getValues("content")}
//         />
//       </div>
//       <div className="w-1/3 px-2">
//         <Input
//           label="Featured Image :"
//           type="file"
//           className="mb-4"
//           accept="image/png, image/jpg, image/jpeg, image/gif"
//           {...register("image", { required: !post })}
//         />
//         {post && (
//           <div className="w-full mb-4">
//             <img
//               src={appwriteService.getFilePreview(post.featuredImage)}
//               alt={post.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}
//         <Select
//           options={["active", "inactive"]}
//           label="Status"
//           className="mb-4"
//           {...register("status", { required: true })}
//         />
//         <Button
//           type="submit"
//           bgColor={post ? "bg-green-500" : undefined}
//           className="w-full">
//           {post ? "Update" : "Submit"}
//         </Button>
//       </div>
//     </form>
//   );
// }

// PostForm.propTypes = {
//   post: PropTypes.shape({
//     $id: PropTypes.string,
//     title: PropTypes.string,
//     slug: PropTypes.string,
//     content: PropTypes.string,
//     status: PropTypes.string,
//     featuredImage: PropTypes.string,
//   }),
// };

// export default PostForm;
import React from "react";
import { useCallback } from "react";
import { Button, Input, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image?.[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file && post.featuredImage) {
        await appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        data.featuredImage = file.$id;
      }
      const dbPost = await appwriteService.createPost({
        ...data,
        userId: userData.$id,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]/g, "")
        .replace(/\s+/g, "-");
    }
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title should have at least 3 characters",
            },
          })}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", {
            required: "Slug is required",
            pattern: {
              value: /^[a-z0-9-]+$/,
              message:
                "Slug must contain only lowercase letters, numbers, and hyphens",
            },
          })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}

        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
          rules={{ required: "Content is required" }}
        />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {
            required: !post && "Image is required for new posts",
          })}
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: "Status is required" })}
        />
        {errors.status && (
          <p className="text-red-500">{errors.status.message}</p>
        )}

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

// PropTypes for props validation
PostForm.propTypes = {
  post: PropTypes.shape({
    $id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.string,
    status: PropTypes.string,
    featuredImage: PropTypes.string,
  }),
};

export default PostForm;
