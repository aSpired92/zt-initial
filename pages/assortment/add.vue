<script setup lang="ts">

  // import type {productType} from "~/ts/interfaces";

  import type {ProductType} from "~/ts/interfaces";
  import {addProductType, deleteProductType, getProductTypes} from "~/ts/api/product-type";
  import {addProduct} from "~/ts/api/product";


  const {data: productTypes} = await getProductTypes()

  const name = ref(null)
  const description = ref('')
  const price = ref(null)
  const productType = ref<ProductType | null>(null)
  const image = ref<File[] | undefined>()

  const categoryName = ref(null)

  const showEditor = ref(false)
  const addCategoryDialog = ref(false)

  const save = async () => {
    const formData = new FormData()

    if (name.value && description.value && price.value && productType.value && image.value) {
      formData.append('name', name.value)
      formData.append('description', description.value)
      formData.append('price', price.value)
      formData.append('productType', '1')
      formData.append('image', image.value[0])
    }

    await addProduct(formData)
    navigateTo('/assortment')
  }

  const deleteType = async (id: number) => {
    await deleteProductType(id)
    productTypes.value = (await getProductTypes()).data
  }

  const addType = async (name: string) => {
    await addProductType(name)
    productTypes.value = (await getProductTypes()).data
    addCategoryDialog.value = false
  }




  watch(image, () => {
    let file: HTMLImageElement | null = document.getElementById('output') as HTMLImageElement;
    if (image.value) {
      if (file) file.src = URL.createObjectURL(image.value[0]);
    } else {
      if (file) file.src = ''
    }
  })

  console.log(productTypes.value)


  const required = (v: string | null) => {
    return !!v || 'To pole jest wymagane'
  }

  const positiveNumber = (v: string | null) => {
    return Number(v) >= 0 || 'Liczba musi być dodatnia'
  }
</script>

<template>
  <div>
    <PageHeader title="Dodaj produkt" flip>
      <template #actions>
        <v-btn text="powrót" color="secondary" @click="navigateTo('/assortment')">
          <template v-slot:prepend>
            <v-icon icon="mdi-arrow-left" />
          </template>
        </v-btn>
      </template>
    </PageHeader>
    <PageSection>
      <v-form>
        <v-row>
          <v-col cols="8">
            <TextField v-model="name" :rules="[required]" label="Nazwa" placeholder="Nazwa produktu" />
          </v-col>

          <v-col cols="4">
            <NumberField v-model="price" label="Cena" :rules="[required, positiveNumber]" placeholder="Cena produktu" min="0" step="0.01" />
          </v-col>
          <v-col cols="5">
            <SelectField v-model="productType" :rules="[required]" label="Kategoria" placeholder="Kategria produktu" :items="productTypes" v-if="productTypes" @delete="deleteType" @add="addCategoryDialog = true">


            </SelectField>
          </v-col>
          <v-col cols="7">
            <FileField v-model="image" label="Zdjęcie" icon="mdi-camera" />
          </v-col>

        </v-row>
        <div class="w-100 flex justify-center mt-6">
          <v-btn text="Edytuj opis" color="secondary" @click="showEditor = true" />
        </div>

      </v-form>
    </PageSection>

    <PageSection>
      <div class="w-100 flex justify-center">
        <div class="text-h5 mb-10">Podgląd</div>
      </div>

      <div class="w-100 text-center text-h4 font-weight-bold mb-10">{{name}}</div>
      <v-row>
        <v-col class="mb-7 flex justify-center "><img id="output" width="80%" />  	</v-col>
        <v-col class="pt-10 text-h4 text-center" v-if="price">{{price}} PLN</v-col>
      </v-row>
      <div class="w-100 text-h5 px-20 " v-html="description"></div>
    </PageSection>

    <PageSection>
      <div class="w-100 flex justify-center">
        <v-btn text="Zapisz" color="secondary" @click="save" />
      </div>
    </PageSection>

    <v-dialog v-model="showEditor">
      <div class="w-100 flex justify-center">
        <v-sheet style="width: 800px; max-width: 100%">
          <EditorField v-model="description" style="height: 500px" />
        </v-sheet>
      </div>


    </v-dialog>

    <v-dialog v-model="addCategoryDialog">
      <div class="w-100 flex justify-center">
        <v-sheet style="width: 400px; max-width: 100%" class="pa-5">
          <div class="w-100">
            <TextField v-model="categoryName" :rules="[required]" label="Nazwa"/>
          </div>
          <div class="w-100 flex justify-center">
            <v-btn text="dodaj" color="secondary" v-if="categoryName" @click="addType(categoryName)" />
          </div>

        </v-sheet>
      </div>


    </v-dialog>

  </div>

</template>

<style scoped>

</style>