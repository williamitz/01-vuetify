<template>
    <div>
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
                        <v-toolbar-title>Sing-in</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>

                            <v-text-field
                                label="Nombre"
                                name="name"
                                prepend-icon="person"
                                type="text"
                            />

                            <v-text-field
                                label="Apellidos"
                                name="name"
                                prepend-icon="person"
                                type="text"
                            />

                            <v-text-field
                                label="Login"
                                name="login"
                                prepend-icon="person"
                                type="text"
                            />

                            <v-text-field
                                id="password"
                                label="Clave"
                                name="password"
                                prepend-icon="lock"
                                type="password"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <router-link to="/">login</router-link>
                        <v-spacer />
                        <v-btn color="primary">Sing-in</v-btn>
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
export default {
    name: 'Singin'
}
</script>