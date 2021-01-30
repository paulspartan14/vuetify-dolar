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
            @change="getDolar(date)"
          ></v-date-picker>
        </v-card>

        <v-card
         color="error" dark>
          <v-card-text class="display-1 text-center">
            {{ value }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      date: new Date().toISOString().substring(0, 10),
      minimDate: '1984',
      maxDate: new Date().toISOString().substring(0, 10),
      value: null,
    }
  },
  methods: {
    ...mapMutations(['showLoading', 'hideLoading']),

    async getDolar(day) {
      // acomodar la fecha del picker al formato que pide la api
      const arrayDate = day.split(['-'])
      let ddmmyy = arrayDate[2] + '-' + arrayDate[1] + '-' + arrayDate[0]

      try {

        this.showLoading({tittle:'Accediendo a informacion', color: 'secondary'})

        let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)

        if (datos.data.serie.length > 0) {
          this.value = await datos.data.serie[0].valor
        }else {
          this.value = 'Hoy no hay novedades :/'
        }
      } catch (err) {
        //console.log(err)
      }finally{
        this.hideLoading()
      }
    },
  },
  created() {
    this.getDolar(this.date)
  },
}
</script>
