// var, let e const
// const
function iniciarTime(iniciaJogoEmUberlandia) {
    const nome = 'Messi e amigos'; // não consigo trocar mais, fica constante
    let cidade = 'em São Paulo'; // Se usar Let, só posso usar dentro do escopo
    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
    }
    // nome = 'Ronaldo e amigos';
    console.log(`${nome} vão jogar ${cidade}`);
}
iniciarTime(false);
