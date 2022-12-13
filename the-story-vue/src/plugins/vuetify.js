import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            background: '#254525', // Velvet Green
          },
          dark: {
            background: '#50485b' // Purple
          },
          
        },
      },
});
