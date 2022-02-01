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

                <div class="form-group mb-5">
                    <label>File</label>
                    <input type="file" @change="choose_file">
                </div>

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
                category_id: '',
                thumbnail: null
            },
            errors: {},
            form_submitting: false
        }
    },
    methods: {
        choose_file(event){
            this.fields.thumbnail = event.target.files[0];
        },
        submit_form() {
            this.form_submitting = true;

            let fields = new FormData();

            for(let key in this.fields){
                fields.append(key, this.fields[key]);
            }

            axios.post('/api/posts', fields).then(res => {
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
    }
}
</script>
