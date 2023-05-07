import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  useGetPostsQuery,
  useCreatePostMutation,
} from "../../store/services/post";
import PostItem from "../../components/Posts/PostItem";
import AddNewPostButton from "../../components/AddNewPostButton/AddNewPostButton";
import Modal from "../../components/UI/Modal/Modal";
import AddPostForm from "../../components/AddPostForm/AddPostform";
const Posts = () => {

  const { data: posts } = useGetPostsQuery();
  const [createPost, error] = useCreatePostMutation();
  const [state, setState] = useState({
    post: "",
    author: "",
    image: "",
  });



  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const onProductFormSubmit = async (post: FormData) => {
    await createPost(post);
    navigate("/");
  };
  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in state) {
      formData.append(key, state[key as keyof typeof state]);
    }
    onProductFormSubmit(formData);
    setState({
      post: "",
      author: "",
      image: "",
    })
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (e.target.files) {
      const file = e.target.files[0];
      setState((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    }
  };

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      spacing={14}
      margin="0 auto"
    >
      <Grid item container direction="column" spacing={2}>
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.id}
              post={post.post}
              author={post.author}
              image={post.image}
              id={post.id}
            />
          ))}
      </Grid>
      <AddNewPostButton add={showModal} />
      <Modal show={show} close={closeModal}>
        <AddPostForm
          post={state.post}
          author={state.author}
          submitFormHandler={submitFormHandler}
          inputChangeHandler={inputChangeHandler}
          fileChangeHandler={fileChangeHandler}
        />
        {error.isError ? <p>You need write post</p> : null}
      </Modal>
    </Grid>
  );
};

export default Posts;
