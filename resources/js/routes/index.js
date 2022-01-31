import PostsIndex from "../components/Posts/Index";
import PostsCreate from "../components/Posts/Create";

const routes = {
    mode: 'history',
    routes: [
        {
            path: "/",
            component: PostsIndex,
            name: "posts.index"
        },
        {
            path: "/posts/create",
            component: PostsCreate,
            name: "posts.create"
        }
    ]
};
export default routes;
