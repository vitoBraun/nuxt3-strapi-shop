<template>
  <v-card class="mx-auto my-10" max-width="360" height="450">
    <v-carousel height="230">
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-card-item>
      <v-card-title
        >{{ title }}
        <v-icon
          v-if="newItem"
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon
      ></v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ description }}</span>
      </v-card-subtitle>
    </v-card-item>

    <div class="text-center">
      <v-chip class="ma-2 font-weight-black" color="green" label size="large">
        {{ price }}
      </v-chip>
      <v-btn rounded="sm" color="green" class="my-4 mx-4">BUY</v-btn>

      <div class="text-h5"></div>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    information: { type: String },
    price: { type: Number },
    newItem: { type: Boolean },
    images: { type: Array },
  },
};
</script>
