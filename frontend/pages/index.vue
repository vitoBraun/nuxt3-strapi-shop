<template>
  <div>
    <title>Название сайта</title>
  </div>
  <v-container>
    <v-col cols="auto">
      <v-row>
        <Item
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
          v-for="item in items"
          v-bind:key="item.id"
          class="mb-10"
        />
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import useItems from "~/hooks/items";

const getUrls = (item: any) =>
  item.attributes.images.data.map(
    (img: any) => `http://localhost:1337${img.attributes.url}`
  );

const items: any = useItems();
</script>
