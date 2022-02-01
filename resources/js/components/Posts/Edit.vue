<template>
    <div class="row mt-5">
        <div class="col-md-4">
            <form @submit.prevent="submit_form">
                <div class="form-group">
                    <label>Title</label>
                    <input name="title" v-model="fields.title" type="text" class="form-control">
                </div>
                <div class="alert alert-danger" v-if="errors && errors.title">{{ errors.title[0] }}</div>

                <div class="form-group">
                    <label>Text</label>
                    <textarea name="text" v-model="fields.post_text" class="form-control" rows="5"></textarea>
                </div>
                <div class="alert alert-danger" v-if="errors && errors.post_text">{{ errors.post_text[0] }}</div>

                <div class="form-group mb-5">
                    <label>Category</label>
                    <select v-model="fields.category_id" class="form-control">
                        <option v-for="{id, title} in categories" :value="id" :key="id">{{ title }}</option>
                    </select>
                </div>
                <div class="alert alert-danger" v-if="errors && errors.category_id">{{ errors.category_id[0] }}</div>

                <div class="form-group">
                    <button type="submit" class="btn btn-success" :disabled="form_submitting">
                        {{ form_submitting ? 'Saving data...' : 'Save' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [],
            fields: {
                title: '',
                post_text: '',
                category_id: ''
            },
            errors: {},
            form_submitting: false
        }
    },
    methods: {
        submit_form() {
            this.form_submitting = true;

            axios.put('/api/posts/' + this.$route.params.id, this.fields).then(res => {
                this.$router.push('/')
                this.form_submitting = false;
            }).catch(error => {
                this.errors = error.response.data.errors;
                this.form_submitting = false;
            });
        }
    },
    mounted() {
        axios.get('/api/categories').then(res => {
            this.categories = res.data.data;
        });

        axios.get('/api/posts/' + this.$route.params.id).then(res => {
            this.fields = res.data.data;
        });
    }
}
</script>
