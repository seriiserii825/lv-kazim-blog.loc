<template>
    <table v-if="posts.length" class="table table-striped mt-5">
        <thead>
        <tr>
            <td>Title from Vue</td>
            <td>Post text</td>
            <td>Created at</td>
            <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="{id, title, post_text, created_at} in posts" :key="id">
            <td>{{ title }}</td>
            <td>{{ post_text.substring(0, 50) + '...' }}</td>
            <td>{{ created_at }}</td>
            <td>buy</td>
        </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios.get('/api/posts').then(res => {
            this.posts = res.data.data;
            // console.log(this.posts, 'this.posts')
        });
    }
}
</script>
