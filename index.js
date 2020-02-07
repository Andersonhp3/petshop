
const PETSHOP = "Petshop DH";

console.log(`** ${PETSHOP} **`);


let pets = [pet = {
    nome: "Adolfo",
    raca: "Cão",
    idade: 12,
    genero: "M",
    servicos: [],
    tipo: "Grande",
    vacinado: false
},
pet2 = {
    nome: "fii",
    raca: "Cão",
    idade: 6,
    genero: "M",
    servicos: [],
    tipo: "pequeno",
    vacinado: true
},
pet3 = {
    nome: "tooo",
    raca: "gato",
    idade: 3,
    genero: "M",
    servicos: ["Tosa"],
    tipo: "Grande",
    vacinado: false
},
pet4 = {
    nome: "julio",
    raca: "Cão",
    idade: 8,
    genero: "m",
    servicos: ["Banho"],
    tipo: "pequeno",
    vacinado: false
}
];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinar = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;   
    }
}

const listarPets = (pets) => {
    console.log("Projeto Petshop");
    for(let dado in pets){
        console.log(`----------------------
        Nome: ${pets[dado].nome}
        Raça: ${pets[dado].raca}
        Idade: ${pets[dado].idade}
        Genero: ${pets[dado].genero == "m" ? "Macho" : "Femea"}
        Serviços: ${pets[dado].servicos}
        Tipo: ${pets[dado].tipo}
        Vacinado: ${pets[dado].vacinado ? "Sim" : "Não"}`);
    }
}

const validarInfo = novoPet => {
    return (
        novoPet.nome &&
        novoPet.idade && 
        novoPet.tipo &&
        novoPet.genero && 
        novoPet.raca
    );
};

const tosarPet = pet =>{
    pet.servicos.push('tosa')
    console.log(`${pet.nome} +  foi tosado`);
}

const cortarUnhasPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(`${pet.nome} unhas foram cortadas!`);
}

const atenderPet = (pet, ...operacoes) => {
    console.log("Bem vindo, " + pet.nome);
    for (let i = 0; i < operacoes.length; i++) {
       operacoes[i](pet);
    }    
    const pagar = () => {
        console.log("Pagamento realizado com sucesso!");        
    }
    pagar();

    console.log("Volte sempre!");
}

const contPetsVacinados = pets => {
    let vacinados = pets.filter(pet => pet.vacinado).length;
    let nVacinados = pets.filter(pet => !pet.vacinado).length;
    console.log(`Foram encontrados   ${vacinados}  vacinados e foram encontrados  ${nVacinados}  não vacinados` );    
}

const campanhaVacinha = (pets, vacinar)  => {
    let foiVacinado = 0;
    for(let dado of pets){
        if(!pets[dado].vacinado){
            vacinar(pets[dado]);
            foiVacinado ++;
        }
    }
    console.log(`${foiVacinado}  pets foram vacinados nessa campanha`) ;  
}

const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarInfo(novoPet)) {
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);
        if(!novoPet.servicos){
            novoPet.servicos = [];
        }
        novoPet.vacinado
        if (!novoPet.vacinado) {
            novoPet.vacinado = false;            
        }

        pets.push(novoPet);
        console.log(` ${novoPet.nome} foi adicionado com sucesso!`);
    }
}


//fazer depois com o filter
// let buscarPetNomeForIn = (nomePet, pets) => {
//     for(let pet in pets){
//         if(pets[pet].nome == nomePet){
//             console.log(pets[pet]);
//         }
//     }
// }

let buscarPetNomeForIn = (nomePet, pets) => {
    for(let pet in pets){
        if(pets[pet].nome == nomePet){
            console.log(pets[pet]);
        }
    }
}
//contPetsVacinados(pets);
//campanhaVacinha(pets, vacinar);
//listarPets(pets);
//atenderPet(pets[0],tosarPet, cortarUnhasPet);
buscarPetNome("tooo", pets);