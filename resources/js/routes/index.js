import PostsIndex from "../components/Posts/Index";
import PostsCreate from "../components/Posts/Create";
import PostsEdit from "../components/Posts/Edit";

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
        },
        {
            path: "/posts/edit:id",
            component: PostsEdit,
            name: "posts.edit"
        }
    ]
};
export default routes;
