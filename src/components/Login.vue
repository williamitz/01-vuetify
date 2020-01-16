<template>
    <div >

        <v-app id="inspire">
            <v-content>
            <v-container
                class="fill-height"
                fluid
            >

            <v-row
            align="center"
            justify="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                >
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat >
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Login"
                                name="login"
                                prepend-icon="person"
                                type="text"
                                v-model="user"
                            />

                            <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                type="password"
                                v-model="password"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <router-link to="/singin">registrarse</router-link>
                        <v-spacer />
                        <v-btn color="primary" :loading="loading" @click="onLogin">Login</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
                
            </v-container>
            </v-content>
        </v-app>

    </div>
</template>

<script>

import router from '../router';
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            user: '',
            password: '',
            loading: false
        }
    },
    methods: {
        onLogin() {
            this.loading = true;

            axios.post('/login', { user: this.user, password: this.password })
            .then( (res) => {
                console.log('respuesta server', res);
                this.loading = false;
                if( res.data !== [] ){

                    router.push('dashboard');
                }
            }).catch( (error) => {
                console.error('ha ocurrido un error', error);
                
            });
            
        }
    },
}
</script>