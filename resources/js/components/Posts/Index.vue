<template>
    <div class="pt-5">
        <select v-model="category_id" class="form-control col-md-3">
            <option value="">-- Choose category --</option>
            <option v-for="{id, title} in categories" :value="id">{{ title }}</option>
        </select>
        <table class="table table-striped mt-5">
            <thead>
            <tr>
                <td>
                    <a href="#" @click.prevent="sortTable('title')">Title</a>
                    <span v-if="sort_field === 'title' && sort_direction === 'asc'">&uarr;</span>
                    <span v-if="sort_field === 'title' && sort_direction === 'desc'">&darr;</span>
                </td>
                <td>
                    <a href="#" @click.prevent="sortTable('post_text')">Title</a>
                    <span v-if="sort_field === 'post_text' && sort_direction === 'asc'">&uarr;</span>
                    <span v-if="sort_field === 'post_text' && sort_direction === 'desc'">&darr;</span>
                </td>
                <td>
                    <a href="#" @click.prevent="sortTable('created_at')">Created at</a>
                    <span v-if="sort_field === 'created_at' && sort_direction === 'asc'">&uarr;</span>
                    <span v-if="sort_field === 'created_at' && sort_direction === 'desc'">&darr;</span>
                </td>
                <td>
                    <a href="#" @click.prevent="sortTable('category_id')">Category</a>
                    <span v-if="sort_field === 'category_id' && sort_direction === 'asc'">&uarr;</span>
                    <span v-if="sort_field === 'category_id' && sort_direction === 'desc'">&darr;</span>
                </td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{id, title, post_text, created_at, category} in posts.data" :key="id">
                <td>{{ title }}</td>
                <td>{{ post_text.substring(0, 50) + '...' }}</td>
                <td>{{ created_at }}</td>
                <td>{{ category }}</td>
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
            category_id: '',
            sort_field: 'created_at',
            sort_direction: 'desc'
        }
    },
    methods: {
        sortTable(field) {
            if (this.sort_field === field) {
                this.sort_direction = this.sort_direction === 'asc' ? 'desc' : 'asc';
            } else {
                this.sort_field = field;
                this.sort_direction = 'asc';
            }
            this.getResults();
        },
        getResults(page = 1) {
            axios.get('/api/posts?page=' + page
                + '&category_id=' + this.category_id
                + '&sort_field=' + this.sort_field
                + '&sort_direction=' + this.sort_direction
            )
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
        category_id() {
            this.getResults();
        }
    },
    mounted() {
        this.getResults();
        this.getCategories();
    }
}
</script>
