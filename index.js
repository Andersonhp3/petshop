

const PETSHOP = "Petshop DH";

console.log("** " + PETSHOP + " **");



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
        

    } else {
       
    }
}


const listarPets = (pets) => {
    console.log("Projeto Petshop");

    for (let i = 0; i < pets.length; i++) {

        console.log("----------------------");

        console.log("Nome: " + pets[i].nome);

        console.log("Raça: " + pets[i].raca);

        console.log("Idade: " + pets[i].idade);

        console.log("Genero: " + (pets[i].genero == "m" ? "Macho" : "Femea"));

        console.log("Serviços: " + pets[i].servicos);

        console.log("Tipo: " + pets[i].tipo);

        console.log("Vacinado: " + (pets[i].vacinado ? "Sim" : "Não"));
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
    console.log(pet.nome + " foi tosado");
}

const darBanhoPet = pet =>{
    pet.servicos.push('banho');
    console.log(pet.nome + " : banho foi realizado com sucesso!");
}


const cortarUnhasPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(pet.nome +  " unhas foram cortadas!");
}


const atenderPet = (pet, operacoes) => {
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

// const contarPetsVacinados = ()

const contPetsVacinados = pets => {
    let vacinados = 0;
    let nVacinados = 0;
    for (let i = 0; i < pets.length; i++){
       if (pets[i].vacinado) {
           vacinados++;
       }
       else {
           nVacinados++;
       }      
    }
    console.log("Foram encontrados " + vacinados + " vacinados e foram encontrados " + nVacinados + " não vacinados" );
    
}
const campanhaVacinha = (pets, vacinar)  => {
    let foiVacinado = 0;
    for (let i = 0; i < pets.length; i++) {
        if(!pets[i].vacinado){
            vacinar(pets[i]);
            foiVacinado ++;
        }
        
    }
    console.log(foiVacinado + " pets foram vacinados nessa campanha") ;
    
}
contPetsVacinados(pets);
campanhaVacinha(pets, vacinar);


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

        // pets.push(novoPet);
        // console.log(novoPet.nome + " foi adicionado com sucesso!");
    }
}


adicionarPet({
    nome: "silvio",
    raca: "gato",
    idade: "22",
    genero: "m",
    servicos: ["banho"],
    tipo: "pequeno",
    vacinado: true
});


// atenderPet(pets[0],[tosarPet, cortarUnhasPet]);