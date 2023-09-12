import "./App.css";
import { Post } from "./components/Post";

import {
  useAddPostMutation,
  useGetAllPostsQuery,
} from "./redux/services/postsApiSlice";

function App() {
  // const data = {
  //   userId: 1,
  //   id: 1,
  //   title:
  //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  // };
  // const posts = [data];

  // const posts = useSelector((state) => state.posts.list);
  // const dispatch = useDispatch();

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPostsQuery();
  const [addPost] = useAddPostMutation();

  console.log("posts", posts);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addPost}>Add Post</button>
      </header>
      <main>
        {isLoading ? <p>loading...</p> : null}
        {isError ? <p>Error in fetching : {error.originalStatus}</p> : null}
        {isSuccess
          ? posts?.map((post) => <Post key={post.id} data={post} />)
          : "No Posts"}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
