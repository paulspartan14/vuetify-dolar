<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker
            v-model="date"  
            full-width   
            locale="es-mx"   
            :min="minimDate"    
            :max="maxDate"
          ></v-date-picker>
        </v-card>

        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            650 - {{ date }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data(){
    return {
      date: '',
      minimDate: '1984',
      maxDate: new Date().toISOString().substring(0, 10)
    }
  }
}
</script>
