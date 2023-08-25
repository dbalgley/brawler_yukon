<!-- src/components/PageTemplate.vue -->

<template>
    <div>
        <h1>{{ title }}</h1>
        <v-card>
            <v-card-text>
                <slot></slot>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            required: true
        }
    });
</script>