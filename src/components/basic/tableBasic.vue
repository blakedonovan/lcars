<template>
    <table>

        <tr>
            <td>
                info
                <slot v-for='item in items' :item='item'></slot>
            </td>
        </tr>
    </table>
</template>


<script>
export default {

    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>