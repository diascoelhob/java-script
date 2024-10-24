var vel = 40
console.log(`A velocidade do seu carro é ${Number(vel).toFixed(2)} km/h`)

if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
} else {
    console.log('Dirija sempre usando cinto de segurança!')
}