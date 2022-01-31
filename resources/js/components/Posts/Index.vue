<template>
    <div>
        <table v-if="posts.data.length" class="table table-striped mt-5">
            <thead>
            <tr>
                <td>Title from Vue</td>
                <td>Post text</td>
                <td>Created at</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{id, title, post_text, created_at} in posts.data" :key="id">
                <td>{{ title }}</td>
                <td>{{ post_text.substring(0, 50) + '...' }}</td>
                <td>{{ created_at }}</td>
                <td>buy</td>
            </tr>
            </tbody>
        </table>
        <pagination :data="posts" @pagination-change-page="getResults"></pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: {}
        }
    },
    methods: {
        getResults(page = 1) {
            axios.get('/api/posts?page=' + page)
                .then(response => {
                    this.posts = response.data;
                });
        }
    },
    mounted() {
        this.getResults();
    }
}
</script>
