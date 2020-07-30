<template>
<nav class="nav">
    <ul class="nav__list">
        <li 
            v-for="filter in $options.contact_filters"
            class="nav__list__link"
            :key="filter.NAME"
        >
            <router-link :to="{ name: 'Home', params: { filter: filter.ROUTE}}">{{filter.NAME}}</router-link>
        </li>
    </ul>
</nav>
</template>

<script>
import contact_filters from '@/enums/contact_filters.js'

export default {
    name: "Navigation",
    contact_filters
}
</script>

<style lang="scss">
.nav {
    margin-top: 50px;
    margin-bottom: 48px;

    &__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &__link {
            font-weight: bold;
            box-sizing: border-box;

            a {
                text-decoration: none;
                height: 22px;
                font-size: 18px;
                letter-spacing: 0;
                line-height: 22px;
            }

            &::after{
                content: "";
                display: inline-block;
                height: 15px;
                width: 1px;
                border-right: 1px solid $text-color;
                margin: 0 30px;
            }

            &:last-child::after {
                border-right: 0px;
                margin: 0;
            }
        }
    }
}
</style>