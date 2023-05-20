<template>
  <Navigation />
  <v-container>
    <v-col>
      <v-row>
        <Item
          v-for="item in items"
          :title="item.attributes.title"
          :description="item.attributes.description"
          :price="
            item.attributes.price.toLocaleString('th-TH', {
              style: 'currency',
              currency: 'THB',
            })
          "
          :information="item.attributes.information"
          :newItem="true"
          :images="getUrls(item)"
          v-bind:key="item.id"
          class="mb-10"
        />
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import useItems from "~/hooks/items";

const category = ref(null);

const getUrls = (item: any) =>
  item.attributes.images.data.map(
    (img: any) => `http://localhost:1337${img.attributes.url}`
  );

const { items, refresh } = useItems("sd");
</script>
