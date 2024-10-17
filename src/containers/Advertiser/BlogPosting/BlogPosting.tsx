import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import axios from "axios";
import "./BlogPosting.css"; // Import file CSS

const BlogPosting: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Hiển thị hình ảnh trước khi upload
  };

  const handlePost = async () => {
    if (!title || !content) {
      alert("Please enter a title and content");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post("/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Blog post successful:", response.data);
      // Reset form sau khi post thành công
      setTitle("");
      setContent("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="blog-post-form">
      <h2 className="blog-post-form-h2">Create a Blog Post</h2>
      <input
        type="text"
        className="title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        className="content-editor"
        placeholder="Write your blog content here..."
      />
      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              <p>Drag and drop an image here, or click to select one</p>
            )}
          </div>
        )}
      </Dropzone>
      <button onClick={handlePost} className="post-button">
        Post Blog
      </button>
    </div>
  );
};

export default BlogPosting;
