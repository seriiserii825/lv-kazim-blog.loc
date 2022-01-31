<template>
    <div>
        <div class="row">
            <div class="d-flex justify-content-start">
                <ul class="navbar-nav d-flex flex-row border-bottom">
                    <li class="nav-item">
                        <router-link exact :to="{name: 'posts.index'}" class="nav-link mr-3">Posts list</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact :to="{name: 'posts.create'}" class="nav-link">Posts create</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
