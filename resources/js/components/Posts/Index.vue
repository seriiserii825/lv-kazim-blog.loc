<template>
    <div class="pt-5">
        <select v-model="category_id" class="form-control col-md-3">
            <option value="">-- Choose category --</option>
            <option v-for="{id, title} in categories" :value="id">{{ title }}</option>
        </select>
        <table class="table table-striped mt-5">
            <thead>
            <tr>
                <td>Title from Vue</td>
                <td>Post text</td>
                <td>Created at</td>
                <td>Category</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{id, title, post_text, created_at, category} in posts.data" :key="id">
                <td>{{ title }}</td>
                <td>{{ post_text.substring(0, 50) + '...' }}</td>
                <td>{{ created_at }}</td>
                <td>{{ category  }}</td>
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
            posts: {},
            categories: [],
            category_id: ''
        }
    },
    methods: {
        getResults(page = 1) {
            axios.get('/api/posts?page=' + page + '&category_id=' + this.category_id)
                .then(response => {
                    this.posts = response.data;
                });
        },
        getCategories() {
            axios.get('/api/categories')
                .then(response => {
                    this.categories = response.data.data;
                });
        }
    },
    watch: {
        category_id(){
            this.getResults();
        }
    },
    mounted() {
        this.getResults();
        this.getCategories();
    }
}
</script>
