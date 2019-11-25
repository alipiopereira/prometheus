<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn icon size="20" v-on="on"><v-icon>mdi-whatsapp</v-icon></v-btn>
      </template>
      <v-card :dark='dark'>
        <v-card-title>
          <v-icon color="green">mdi-whatsapp</v-icon>
          <v-spacer></v-spacer>

          <span>Sua messagem</span>

          <v-spacer></v-spacer>
          <v-btn icon color="red" @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Adicione seu nome*" v-model="firstName" required hint="Requerido"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Adicione seu sobrenome" v-model="lastName" hint="Opcional"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-autocomplete
                  :items="['Gostei', ' Parabéns', ' Quero contratar', ' Quero um site', ' Quero um aplicativo', ' Quero uma loja virtual', ' Quero Midias Digitais']"
                  label="Interesses"
                  multiple
                  :dark='dark'
                  chips
                  small-chips
                  solo
                  :msgEdit='msgEdit'
                  v-model="select"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="12">
                <v-textarea
                  solo
                  name="input-7-4"
                v-model="msg"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*campos requeridos</small>
        </v-card-text>
        <v-card-actions style="background-color: green">
          <v-spacer></v-spacer>
          <v-btn color="green" :href="url" @click="sendMessage">
            <v-icon>mdi-whatsapp </v-icon>
            Enviar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'modalSendMessage',
  props: {dark: Boolean},
  data() {
    return {
      dialog: false,
      firstName: 'Usário',
      lastName: '',
      msg: '',
      newMsg: '',
      interesses: '',
      select: ['Gostei'],
    }
  },
  computed: {
    msgEdit() {
      return this.msg = `${'Olá! Me chamo ' + this.firstName + ' ' + this.lastName + '\n'}`
    },
    url() {
      return `${'https://api.whatsapp.com/send?phone=558694788750&text='+this.newMsg}`
    }
  },
  methods: {
    sendMessage() {
      this.newMsg = this.msg.replace(' ', '%20')
      this.interesses = this.select.toString()
      return console.log(this.newMsg += '\n Interesses: ' + this.interesses.replace(' ', '%20'))
    }
  },
}
</script>

<style>
</style>