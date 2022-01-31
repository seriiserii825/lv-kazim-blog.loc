<template>
    <div>
        <div class="row">
            <div class="d-flex justify-content-start">
                <ul class="navbar">
                    <router-link to="/" class="nav-link btn btn-outline-primary mr-3">Posts list</router-link>
                    <router-link to="/posts/create" class="nav-link btn btn-outline-primary">Posts create</router-link>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
