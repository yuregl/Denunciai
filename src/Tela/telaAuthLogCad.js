import React, {Component} from 'react'
import { View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

ImgBack = require('../../imgs/background.png')
ImgLogo = require('../../imgs/DenunciAI.png')

export default class AuthLogCad extends Component{

    state = {
        cadastroOuLogin: false,
        nome: '',
        sobrenome:'',
        email:'',
        senha:'',
        confirmaSenha:'',
        fraseCadastro:''
    }

    render(){
        return(
            <ImageBackground source = {ImgBack} style = {styles.background}>
                <Image source = {ImgLogo} style = {styles.logo}/>

                <View style = {styles.formulario}>
                    {this.state.cadastroOuLogin && 
                        <TextInput placeholder='Nome'
                        style={styles.input}
                        value= {this.state.nome}
                        onChangeText={nome => this.setState({nome})}/>
                    }
                    {this.state.cadastroOuLogin && 
                        <TextInput placeholder='Sobrenome'
                        style={styles.input}
                        value= {this.state.sobrenome}
                        onChangeText={sobrenome => this.setState({sobrenome})}/>
                    }

                    <TextInput placeholder = 'E-mail' style = {styles.input}
                        value= {this.state.email}
                        onChangeText= {email => this.setState({email})}/>

                    <TextInput placeholder = 'Senha' style ={styles.input}
                        value= {this.state.senha}
                        onChangeText= {senha=> this.setState({senha})}/>

                    {this.state.cadastroOuLogin &&
                        <TextInput placeholder='Confirmar Senha'
                            style ={styles.input}
                        value= {this.state.confirmaSenha}
                        onChangeText= {confirmaSenha => this.setState({confirmaSenha})}/>
                    }
                    {!this.state.cadastroOuLogin && 
                        <TouchableOpacity >
                            <View style = {styles.btnEsqSenha}>
                                <Text style = {styles.EsqueceSenha}>Esqueceu sua senha</Text>
                            </View>
                        </TouchableOpacity>}

                    
                    {this.state.cadastroOuLogin &&
                        <View>
                            <Text style = {styles.fraseCad}>
                                {this.state.fraseCadastro}
                        </Text>
                        </View>
                    }
                </View>

                <View>
                    {!this.state.cadastroOuLogin && 
                        <TouchableOpacity  style= {styles.botao}>
                            <View>
                                <Text style = {styles.txtBotao}>
                                    Entrar
                                </Text>
                            </View>
                        </TouchableOpacity>}

                    {!this.state.cadastroOuLogin && 
                        <TouchableOpacity  style= {styles.botao}>
                            <View>
                                <Text style = {styles.txtBotao}>
                                    Entrar com Google
                                </Text>
                            </View>
                        </TouchableOpacity>}

                    {this.state.cadastroOuLogin && 
                        <TouchableOpacity onPress = { () => this.setState({fraseCadastro:'Cadastro realizado com sucesso'})}
                        
                        style = {styles.botao}>
                            <View>
                                <Text style = {styles.txtBotao}>
                                    Confirmar Cadastro
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }

                    {this.state.cadastroOuLogin && 
                        <TouchableOpacity style = {styles.botao}>
                            <View>
                                <Text style = {styles.txtBotao}>
                                    Cadastrar com Google
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress = {
                        () => this.setState({
                            cadastroOuLogin: !this.state.cadastroOuLogin
                        })
                        } style= {styles.botao}>
                        <View>
                            <Text style = {styles.txtBotao}>
                            {this.state.cadastroOuLogin ? 'Voltar':'Fazer Cadastro'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    logo:{
        justifyContent: 'center',
        width: '80%',
        marginTop: 10,
    },
    formulario:{
        padding: 20,
        width: '85%', 
        marginBottom: 10   
    },
    input:{
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#111',
    },

    btnEsqSenha:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    EsqueceSenha:{
        fontSize: 12,
    },

    fraseCad:{
        fontSize: 13,
        color: '#3EC28F'
    },

    botao:{
        backgroundColor: '#FF473A',
        alignItems: 'center',
        padding: 15,
        width: 300,
        marginBottom: 10
    },
    txtBotao:{
        fontSize: 13,
        color: 'white'
    }


})