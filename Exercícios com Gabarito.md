# JavaScript

### HOFs
    
    HOF significa Higher Order Function, ou seja, uma função que recebe outra função como parâmetro ou retorna uma função como resultado.
    
    - [ ]  As HOFs são funções que operam em outras funções, seja recebendo uma função como argumento ou retornando uma função como resultado.
    - [ ]  As HOFs são usadas para abstrair comportamentos comuns entre diferentes funções e tornar o código mais modular e reutilizável.
    - [ ]  As HOFs podem receber uma ou mais funções como argumento.
    - [ ]  As HOFs podem retornar uma nova função que encapsula o comportamento das funções recebidas como argumento.
    
    ### Exemplos de HOFs em JavaScript
    
    1. `**map**`: recebe um array e uma função e retorna um novo array com os resultados da função aplicada a cada elemento do array original.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const duplicados = numeros.map(numero => numero * 2);
            console.log(duplicados); // output: [2, 4, 6, 8, 10]
            
            ```
            
        - **Outro exemplo**
            
            ```jsx
            const nomes = ["Ana", "Bruno", "Carla", "Daniel"];
            const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
            console.log(nomesMaiusculos); // output: ["ANA", "BRUNO", "CARLA", "DANIEL"]
            
            ```
            
        - [ ]  Neste exemplo, a função `(nome => nome.toUpperCase())` é aplicada a cada elemento do array `nomes`, resultando em um novo array com os valores `["ANA", "BRUNO", "CARLA", "DANIEL"]`.
        - [ ]  O `map` é muito útil para transformar um array em outro array com os mesmos elementos, mas com alguma diferença na forma ou no conteúdo.
        - **Exemplo com array de objetos**
            
            ```jsx
            const usuarios = [
              { nome: "Ana", idade: 20 },
              { nome: "Bruno", idade: 25 },
              { nome: "Carla", idade: 30 },
              { nome: "Daniel", idade: 35 }
            ];
            
            const nomes = usuarios.map(usuario => usuario.nome);
            console.log(nomes); // output: ["Ana", "Bruno", "Carla", "Daniel"]
            
            const idades = usuarios.map(usuario => usuario.idade);
            console.log(idades); // output: [20, 25, 30, 35]
            
            const cumprimentos = usuarios.map(usuario => `Olá, ${usuario.nome}!`);
            console.log(cumprimentos); // output: ["Olá, Ana!", "Olá, Bruno!", "Olá, Carla!", "Olá, Daniel!"]
            
            ```
            
        - [ ]  Aqui, temos um exemplo de um array de objetos sendo percorrido com a função `map()` em JavaScript.
        - [ ]  No primeiro uso da função `map()`, estamos acessando a propriedade `nome` de cada objeto do array `usuarios`, retornando um novo array apenas com os nomes dos usuários.
        - [ ]  No segundo uso da função `map()`, estamos acessando a propriedade `idade` de cada objeto do array `usuarios`, retornando um novo array apenas com as idades dos usuários.
        - [ ]  No terceiro uso da função `map()`, estamos criando um novo array de strings com um cumprimento personalizado para cada usuário, utilizando a propriedade `nome` de cada objeto do array `usuarios`.
        - [ ]  A função `map()` é uma HOF que recebe um array e uma função e retorna um novo array com os resultados da função aplicada a cada elemento do array original.
        - [ ]  A função passada como parâmetro para o `map()` recebe como argumento cada elemento do array original e deve retornar um novo valor que será adicionado ao novo array resultante.
    2. `**filter**`: recebe um array e uma função e retorna um novo array com todos os elementos do array original que retornam `true` quando aplicados à função.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const pares = numeros.filter(numero => numero % 2 === 0);
            console.log(pares); // output: [2, 4]
            
            ```
            
        - **Outro exemplo**
            
            ```jsx
            const pessoas = [
              { nome: "João", idade: 25 },
              { nome: "Maria", idade: 17 },
              { nome: "Pedro", idade: 30 }
            ];
            
            const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
            console.log(maioresDeIdade);
            // output: [{ nome: 'João', idade: 25 }, { nome: 'Pedro', idade: 30 }]
            
            ```
            
        - [ ]  Exemplo de uso do `filter` com array de objetos:
        - [ ]  Neste exemplo, a função `filter()` é utilizada para filtrar apenas as pessoas que são maiores de idade (idade maior ou igual a 18). A função de filtragem é definida como `pessoa => pessoa.idade >= 18`, ou seja, uma função que recebe como parâmetro um objeto `pessoa` e retorna `true` se a idade da pessoa for maior ou igual a 18.
        - [ ]  O resultado do `filter()` é um novo array contendo apenas as pessoas que satisfazem a condição de filtragem.
        - [ ]  Em resumo, a função `filter()` é utilizada para filtrar elementos de um array com base em uma condição especificada em uma função de filtragem.
    3. `**reduce**`: recebe um array e uma função e retorna um valor único que é o resultado da aplicação da função a todos os elementos do array.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const soma = numeros.reduce((acumulador, numero) => acumulador + numero);
            console.log(soma); // output: 15
            
            ```
            
        - [ ]  A função `reduce()` é uma das mais poderosas e úteis funções de array em JavaScript. Ela permite reduzir um array a um único valor, aplicando uma função de redução a todos os elementos do array. Essa função de redução recebe dois argumentos: um acumulador e um elemento do array. Ela deve retornar um novo valor para o acumulador a cada iteração.
        - [ ]  O valor inicial do acumulador pode ser especificado como um argumento opcional da função `reduce()`. Se o valor inicial não for especificado, o acumulador começará com o primeiro elemento do array e a função de redução será aplicada a partir do segundo elemento.
        - **Aqui está um exemplo de uso da função `reduce()` para calcular a soma de todos os elementos de um array**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const soma = numeros.reduce((acumulador, numero) => acumulador + numero);
            console.log(soma); // output: 15
            
            ```
            
        - [ ]  Neste exemplo, a função de redução é `(acumulador, numero) => acumulador + numero`, que simplesmente adiciona o valor do elemento atual do array ao valor acumulado anteriormente. O resultado final é a soma de todos os elementos do array, que é 15.
        - [ ]  Mas a função `reduce()` pode ser usada para muito mais do que apenas somar elementos de um array. Aqui estão alguns exemplos:
        - Calcular o produto de todos os elementos de um array:
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const produto = numeros.reduce((acumulador, numero) => acumulador * numero);
            console.log(produto); // output: 120
            
            ```
            
        - Concatenar todos os elementos de um array em uma única string:
            
            ```jsx
            const palavras = ["olá", "mundo", "!"];
            const frase = palavras.reduce((acumulador, palavra) => acumulador + " " + palavra);
            console.log(frase); // output: "olá mundo !"
            
            ```
            
        - Encontrar o maior número em um array:
            
            ```jsx
            const numeros = [10, 2, 5, 8, 3];
            const maior = numeros.reduce((acumulador, numero) => numero > acumulador ? numero : acumulador);
            console.log(maior); // output: 10
            
            ```
            
        - Contar a quantidade de vezes que um elemento aparece em um array:
            
            ```jsx
            const palavras = ["olá", "mundo", "olá", "javascript", "olá"];
            const contagem = palavras.reduce((acumulador, palavra) => {
              acumulador[palavra] = (acumulador[palavra] || 0) + 1;
              return acumulador;
            }, {});
            console.log(contagem); // output: { olá: 3, mundo: 1, javascript: 1 }
            
            ```
            
        - [ ]  Em resumo, a função `reduce()` é uma das funções mais poderosas e úteis de array em JavaScript.
        - [ ]  Ela permite reduzir um array a um único valor, aplicando uma função de redução a todos os elementos do array. O valor inicial do acumulador pode ser especificado como um argumento opcional.
        - [ ]  A função de redução recebe dois argumentos: um acumulador e um elemento do array, e deve retornar um novo valor para o acumulador a cada iteração.
    4. `**forEach**`: recebe um array e uma função e aplica a função a cada elemento do array.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            numeros.forEach(numero => console.log(numero));
            // output:
            // 1
            // 2
            // 3
            // 4
            // 5
            
            ```
            
    5. `**sort**`: recebe um array e uma função de comparação e retorna um novo array com os elementos do array original ordenados de acordo com a função de comparação.
        - **Código**
            
            ```jsx
            const numeros = [5, 1, 4, 2, 3];
            const ordenados = numeros.sort((a, b) => a - b);
            console.log(ordenados); // output: [1, 2, 3, 4, 5]
            
            ```
            
    6. `**find**`: recebe um array e uma função de teste e retorna o primeiro elemento do array que satisfaz a função de teste.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const primeiroPar = numeros.find(numero => numero % 2 === 0);
            console.log(primeiroPar); // output: 2
            
            ```
            
    7. `**some**`: recebe um array e uma função de teste e retorna `true` se pelo menos um elemento do array satisfaz a função de teste.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const temPar = numeros.some(numero => numero % 2 === 0);
            console.log(temPar); // output: true
            
            ```
            
    8. `**every**`: recebe um array e uma função de teste e retorna `true` se todos os elementos do array satisfazem a função de teste.
        - **Código**
            
            ```jsx
            const numeros = [1, 2, 3, 4, 5];
            const saoImpares = numeros.every(numero => numero % 2 !== 0);
            console.log(saoImpares); // output: false
            
            ```
            
        - **Outro exemplo**
            
            ```jsx
            const pessoas = [
              { nome: "João", idade: 25 },
              { nome: "Maria", idade: 17 },
              { nome: "Pedro", idade: 30 }
            ];
            
            const saoMaioresDeIdade = pessoas.every(pessoa => pessoa.idade >= 18);
            console.log(saoMaioresDeIdade); // output: false
            
            ```
            
        - [ ]  Neste exemplo, a função `every()` é usada para verificar se todas as pessoas no array `pessoas` são adultos (com 18 anos ou mais). A função de teste é definida como `pessoa => pessoa.idade >= 18`, que retorna `true` se a pessoa for um adulto e `false` caso contrário. Como o array `pessoas` contém pelo menos uma pessoa que não é adulta (Maria, que tem 17 anos), o resultado de `every()` é `false`.
    9. `**flatMap**`: recebe um array e uma função que retorna um novo array e retorna um novo array com todos os elementos dos arrays retornados pela função aplicada a cada elemento do array original.
        - **Código**
            
            ```jsx
            const frutas = ["maçã", "banana", "laranja"];
            const letras = frutas.flatMap(fruta => fruta.split(""));
            console.log(letras); // output: ["m", "a", "ç", "ã", "b", "a", "n", "a", "n", "a", "l", "a", "r", "a", "n", "j", "a"]
            
            ```
            
    10. `**filterMap**`: recebe um array e uma função que retorna um novo array ou `null` e retorna um novo array com todos os elementos dos arrays retornados pela função aplicada a cada elemento do array original, excluindo os `null`.
        - **Código**
            
            ```jsx
              const numeros = [1, 2, 3, 4, 5];
              const dobradosPares = numeros.filterMap(numero => {
                if (numero % 2 === 0) {
                  return numero * 2;
                } else {
                  return null;
                }
              });
              console.log(dobradosPares); // output: [4, 8]
            ```
            
        - [ ]  Neste exemplo, estamos usando uma função de filtragem e mapeamento para transformar um array de números em um array de números dobrados apenas para números pares.
        - [ ]  A função `filterMap()` é definida como uma função que recebe como parâmetro um número `numero` e retorna o dobro desse número se ele for par e `null` caso contrário. A função de filtragem é definida como `numero => numero !== null`, o que remove todos os elementos `null` do array resultante.
        - [ ]  O resultado final é um array contendo apenas os números pares dobrados, que é `[4, 8]`.
        
        ### Exemplos de exercícios resolvidos com HOFs em JavaScript
        
        1. Use a função `map()` para transformar um array de números em um array de seus quadrados.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const quadrados = numeros.map(numero => numero ** 2);
        console.log(quadrados); // output: [1, 4, 9, 16, 25]
        
        ```
        
        1. Use a função `reduce()` para calcular a soma de todos os números em um array.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const soma = numeros.reduce((acumulador, numero) => acumulador + numero);
        console.log(soma); // output: 15
        
        ```
        
        1. Use a função `filter()` para filtrar apenas os números pares de um array.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const pares = numeros.filter(numero => numero % 2 === 0);
        console.log(pares); // output: [2, 4]
        
        ```
        
        1. Use a função `map()` e `filter()` para transformar um array de números em um array de seus quadrados, filtrando apenas os números pares.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const quadradosPares = numeros
          .filter(numero => numero % 2 === 0)
          .map(numero => numero ** 2);
        console.log(quadradosPares); // output: [4, 16]
        
        ```
        
        1. Use a função `reduce()` e `filter()` para calcular a média dos números pares em um array.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const numerosPares = numeros.filter(numero => numero % 2 === 0);
        const media = numerosPares.reduce((acumulador, numero) => acumulador + numero) / numerosPares.length;
        console.log(media); // output: 3
        
        ```
        
        1. Use a função `map()` para transformar um array de strings em um array de seus comprimentos.
        
        ```jsx
        const palavras = ["olá", "mundo", "!"];
        const comprimentos = palavras.map(palavra => palavra.length);
        console.log(comprimentos); // output: [3, 5, 1]
        
        ```
        
        1. Use a função `map()` para transformar um array de objetos em um array de suas propriedades.
        
        ```jsx
        const pessoas = [
          { nome: "João", idade: 25 },
          { nome: "Maria", idade: 17 },
          { nome: "Pedro", idade: 30 }
        ];
        
        const nomes = pessoas.map(pessoa => pessoa.nome);
        console.log(nomes); // output: ["João", "Maria", "Pedro"]
        
        const idades = pessoas.map(pessoa => pessoa.idade);
        console.log(idades); // output: [25, 17, 30]
        
        ```
        
        1. Use a função `map()` para transformar um array de objetos em um array de strings formatadas.
        
        ```jsx
        const pessoas = [
          { nome: "João", idade: 25 },
          { nome: "Maria", idade: 17 },
          { nome: "Pedro", idade: 30 }
        ];
        
        const formatados = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`);
        console.log(formatados); // output: ["João tem 25 anos.", "Maria tem 17 anos.", "Pedro tem 30 anos."]
        
        ```
        
        1. Use a função `map()` para transformar um array de objetos em um array de objetos com novas propriedades.
        
        ```jsx
        const pessoas = [
          { nome: "João", idade: 25 },
          { nome: "Maria", idade: 17 },
          { nome: "Pedro", idade: 30 }
        ];
        
        const comSobrenome = pessoas.map(pessoa => ({ nomeCompleto: `${pessoa.nome} Silva`, idade: pessoa.idade }));
        console.log(comSobrenome); // output: [{ nomeCompleto: "João Silva", idade: 25 }, { nomeCompleto: "Maria Silva", idade: 17 }, { nomeCompleto: "Pedro Silva", idade: 30 }]
        
        ```
        
        1. Use a função `filter()` para filtrar apenas pessoas com mais de 18 anos de um array de objetos.
        
        ```jsx
        const people = [
          { name: "John", age: 25 },
          { name: "Mary", age: 17 },
          { name: "Peter", age: 30 }
        ];
        
        const adults = people.filter(person => person.age >= 18);
        console.log(adults); // output: [{ name: "John", age: 25 }, { name: "Peter", age: 30 }]
        
        ```
        
        1. Use a função `filter()` para filtrar apenas strings com mais de 5 caracteres de um array de strings.
        
        ```jsx
        const words = ["hello", "world", "this", "is", "a", "test"];
        const longWords = words.filter(word => word.length > 5);
        console.log(longWords); // output: ["hello", "world"]
        
        ```
        
        1. Use a função `filter()` para filtrar apenas produtos com preço maior que $10 de um array de objetos.
        
        ```jsx
        const products = [
          { name: "apple", price: 0.99 },
          { name: "orange", price: 1.49 },
          { name: "banana", price: 0.49 },
          { name: "pear", price: 1.99 }
        ];
        
        const expensiveProducts = products.filter(product => product.price > 1.0);
        console.log(expensiveProducts); // output: [{ name: "orange", price: 1.49 }, { name: "pear", price: 1.99 }]
        
        ```
        
        1. Use a função `filter()` para filtrar apenas elementos únicos de um array.
        
        ```jsx
        const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5];
        const uniqueNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);
        console.log(uniqueNumbers); // output: [1, 2, 3, 4, 5, 6]
        
        ```
        
        1. Use a função `reduce()` para calcular o produto de todos os números em um array.
        
        ```jsx
        const numbers = [1, 2, 3, 4, 5];
        const product = numbers.reduce((accumulator, number) => accumulator * number, 1);
        console.log(product); // output: 120
        
        ```
        
        1. Use a função `reduce()` para encontrar o número máximo em um array.
        
        ```jsx
        const numbers = [1, 7, 3, 9, 5];
        const max = numbers.reduce((accumulator, number) => number > accumulator ? number : accumulator, numbers[0]);
        console.log(max); // output: 9
        
        ```
        
        1. Use a função `reduce()` para agrupar um array de objetos por um valor de propriedade.
        
        ```jsx
        const people = [
          { name: "John", age: 25, country: "USA" },
          { name: "Mary", age: 17, country: "Canada" },
          { name: "Peter", age: 30, country: "USA" },
          { name: "Anna", age: 22, country: "Canada" }
        ];
        
        const groupedByCountry = people.reduce((accumulator, person) => {
          if (!accumulator[person.country]) {
            accumulator[person.country] = [];
          }
          accumulator[person.country].push(person);
          return accumulator;
        }, {});
        
        console.log(groupedByCountry);
        // output: { USA: [{ name: "John", age: 25, country: "USA" }, { name: "Peter", age: 30, country: "USA" }], Canada: [{ name: "Mary", age: 17, country: "Canada" }, { name: "Anna", age: 22, country: "Canada" }] }
        
        ```
        
        1. Use a função `every()` para verificar se todos os números em um array são pares.
        
        ```jsx
        const numerosPares = [2, 4, 6, 8];
        const numerosImpares = [1, 3, 5, 7];
        
        const saoPares1 = numerosPares.every(numero => numero % 2 === 0);
        console.log(saoPares1); // output: true
        
        const saoPares2 = numerosImpares.every(numero => numero % 2 === 0);
        console.log(saoPares2); // output: false
        
        ```
        
        1. Use a função `every()` para verificar se todos os elementos de um array são strings.
        
        ```jsx
        const palavras = ["olá", "mundo", "!"];
        const numeros = [1, 2, 3];
        
        const saoStrings1 = palavras.every(palavra => typeof palavra === "string");
        console.log(saoStrings1); // output: true
        
        const saoStrings2 = numeros.every(numero => typeof numero === "string");
        console.log(saoStrings2); // output: false
        
        ```
        
        1. Use a função `every()` para verificar se todos os elementos de um array são verdadeiros.
        
        ```jsx
        const valoresVerdadeiros = [true, "hello", 1];
        const valoresFalsos = [false, 0, ""];
        const valoresMistos = [true, 0, ""];
        
        const saoVerdadeiros1 = valoresVerdadeiros.every(valor => valor);
        console.log(saoVerdadeiros1); // output: true
        
        const saoVerdadeiros2 = valoresFalsos.every(valor => valor);
        console.log(saoVerdadeiros2); // output: false
        
        const saoVerdadeiros3 = valoresMistos.every(valor => valor);
        console.log(saoVerdadeiros3); // output: false
        
        ```
        
        ### Exemplos de uso do Local Storage em JavaScript
        
        - [ ]  O objeto `localStorage` permite armazenar dados no navegador do usuário.
        - [ ]  Os dados são armazenados como pares chave-valor, onde a chave é uma string e o valor pode ser qualquer tipo de dado suportado pelo JavaScript.
        - [ ]  Armazenando um valor no local storage:
        
        ```
        localStorage.setItem("nome", "João");
        
        ```
        
        - [ ]  Recuperando um valor do local storage:
        
        ```
        const nome = localStorage.getItem("nome");
        console.log(nome); // output: "João"
        
        ```
        
        - [ ]  Removendo um valor do local storage:
        
        ```
        localStorage.removeItem("nome");
        
        ```
        
        - [ ]  Armazenando um objeto no local storage (conversão para JSON):
        
        ```
        const pessoa = { nome: "João", idade: 25 };
        localStorage.setItem("pessoa", JSON.stringify(pessoa));
        
        ```
        
        - [ ]  Recuperando um objeto do local storage (conversão de volta para objeto):
        
        ```
        const storedPessoa = localStorage.getItem("pessoa");
        const pessoa = JSON.parse(storedPessoa);
        console.log(pessoa); // output: { nome: "João", idade: 25 }
        
        ```
        
        - [ ]  Armazenando um array no local storage (conversão para JSON):
        
        ```
        const numeros = [1, 2, 3, 4, 5];
        localStorage.setItem("numeros", JSON.stringify(numeros));
        
        ```
        
        - [ ]  Recuperando um array do local storage (conversão de volta para array):
        
        ```
        const storedNumeros = localStorage.getItem("numeros");
        const numeros = JSON.parse(storedNumeros);
        console.log(numeros); // output: [1, 2, 3, 4, 5]
        
        ```
        
        - [ ]  Armazenando um objeto complexo no local storage (conversão para JSON):
        
        ```
        const pessoa = {
          nome: "João",
          idade: 25,
          endereco: {
            rua: "Rua A",
            numero: 123
          }
        };
        localStorage.setItem("pessoa", JSON.stringify(pessoa));
        
        ```
        
        - [ ]  Recuperando um objeto complexo do local storage (conversão de volta para objeto):
        
        ```
        const storedPessoa = localStorage.getItem("pessoa");
        const pessoa = JSON.parse(storedPessoa);
        console.log(pessoa); // output: { nome: "João", idade: 25, endereco: { rua: "Rua A", numero: 123 } }
        
        ```
        
        - [ ]  Verificando se um valor existe no local storage:
        
        ```
        if (localStorage.getItem("nome")) {
          console.log("O valor existe no local storage.");
        } else {
          console.log("O valor não existe no local storage.");
        }
        
        ```
        
        - [ ]  Limpando todo o local storage:
        
        ```
        localStorage.clear();
        
        ```
        
        ### Fetch - Async/Await - Try/Catch
        
        - [ ]  Exemplo de como usar o `fetch()` em JavaScript com `async` e `await`:
        
        ```
        async function fetchUsers() {
          const response = await fetch("<https://jsonplaceholder.typicode.com/users>");
          const data = await response.json();
          console.log(data);
        }
        
        fetchUsers();
        
        ```
        
        - [ ]  Este exemplo chama a API JSONPlaceholder para recuperar uma lista de usuários e, em seguida, usa `console.log()` para imprimir a resposta.
        - [ ]  Exemplo de como usar o `fetch()` em JavaScript com tratamento de erros:
        
        ```
        async function fetchUsers() {
          try {
            const response = await fetch("<https://jsonplaceholder.typicode.com/users>");
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        }
        
        fetchUsers();
        
        ```
        
        - [ ]  Este exemplo é semelhante ao anterior, mas adiciona um bloco `try-catch` para lidar com erros.
        - [ ]  Se houver um erro na chamada da API, ele será capturado e impresso na saída de erro do console.
        - [ ]  Exemplo de como usar o `fetch()` em JavaScript com parâmetros de consulta:
        
        ```
        async function fetchUsersByCity(city) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users?city=${city}`);
          const data = await response.json();
          console.log(data);
        }
        
        fetchUsersByCity("New York");
        
        ```
        
        - [ ]  Este exemplo chama a API JSONPlaceholder com um parâmetro de consulta para encontrar usuários em uma cidade específica. O parâmetro de consulta é adicionado à URL usando a sintaxe `${}` do template string.
        - [ ]  Exemplo de como usar o `fetch()` em JavaScript com um método HTTP diferente:
        
        ```
        async function createNewUser(user) {
          const response = await fetch("<https://jsonplaceholder.typicode.com/users>", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.json();
          console.log(data);
        }
        
        const newUser = {
          name: "John Doe",
          username: "johndoe",
          email: "johndoe@example.com"
        };
        
        createNewUser(newUser);
        
        ```
        
        - [ ]  Este exemplo usa o método HTTP `POST` para criar um novo usuário na API JSONPlaceholder.
        - [ ]  O objeto `user` é convertido em uma string JSON usando `JSON.stringify()`, e os cabeçalhos HTTP são definidos para especificar que o tipo de conteúdo é JSON.
        - [ ]  O resultado é impresso no console usando `console.log()`.
        
        ### Exercício - Fetch e Async/Await
        
        1. Crie uma função assíncrona chamada `fetchJokes` que use o `fetch()` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console.
        2. Modifique a função `fetchJokes` para usar o `try-catch` e tratar erros. Se ocorrer um erro na chamada da API, imprima a mensagem de erro no console.
        3. Crie uma nova função assíncrona chamada `fetchJokesParallel` que use o `Promise.all()` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console. Certifique-se de imprimir as piadas na ordem em que foram retornadas pela API.
        4. Crie uma nova função assíncrona chamada `fetchJokesSerial` que use um loop `for-of` e o `await` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console. Certifique-se de imprimir as piadas na ordem em que foram solicitadas.
        
        ### Gabarito
        
        - [ ]  Resolução do Item 1
        
        ```
        async function fetchJokes() {
          const response = await fetch("<https://api.chucknorris.io/jokes/random?count=5>");
          const data = await response.json();
          data.forEach(joke => console.log(joke.value));
        }
        
        fetchJokes();
        
        ```
        
        - [ ]  Resolução do Item 2
        
        ```
        async function fetchJokes() {
          try {
            const response = await fetch("<https://api.chucknorris.io/jokes/random?count=5>");
            const data = await response.json();
            data.forEach(joke => console.log(joke.value));
          } catch (error) {
            console.error(error);
          }
        }
        
        fetchJokes();
        
        ```
        
        - [ ]  Resolução do Item 3
        
        ```
        async function fetchJokesParallel() {
          const urls = Array.from({ length: 5 }, () => "<https://api.chucknorris.io/jokes/random>");
          const responses = await Promise.all(urls.map(url => fetch(url)));
          const data = await Promise.all(responses.map(response => response.json()));
          data.forEach(joke => console.log(joke.value));
        }
        
        fetchJokesParallel();
        
        ```
        
        - [ ]  Resolução do Item 4
        
        ```
        async function fetchJokesSerial() {
          for (let i = 0; i < 5; i++) {
            const response = await fetch("<https://api.chucknorris.io/jokes/random>");
            const data = await response.json();
            console.log(data.value);
          }
        }
        
        fetchJokesSerial();
        
        ```
        
        ### Exercício - Fetch e Async/Await
        
        1. Crie uma função assíncrona chamada `fetchCep` que use o `fetch()` para buscar informações de endereço a partir de um CEP digitado pelo usuário. A URL da API para fazer a busca é `https://viacep.com.br/ws/{cep}/json/`, onde `{cep}` deve ser substituído pelo valor do CEP. As informações a serem buscadas são: logradouro, complemento, bairro, cidade e estado. As informações devem ser retornadas em um objeto com esses campos. Caso o CEP seja inválido, a função deve retornar um objeto com a mensagem "CEP inválido".
        2. Modifique a função `fetchCep` para usar o `try-catch` e tratar erros. Se ocorrer um erro na chamada da API, imprima a mensagem de erro no console.
        3. Crie uma nova função assíncrona chamada `fetchWeather` que use o `fetch()` para buscar informações climáticas de uma cidade digitada pelo usuário. A URL da API para fazer a busca é `https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={api_key}&lang=pt_br&units=metric`, onde `{cidade}` deve ser substituído pelo nome da cidade e `{api_key}` deve ser substituído por uma chave de API válida do OpenWeatherMap. As informações a serem buscadas são: temperatura, sensação térmica, umidade, descrição do clima e velocidade do vento. As informações devem ser retornadas em um objeto com esses campos. Caso a cidade seja inválida ou a chave de API seja inválida, a função deve retornar um objeto com a mensagem "Dados climáticos não encontrados".
        4. Modifique a função `fetchWeather` para usar o `try-catch` e tratar erros. Se ocorrer um erro na chamada da API, imprima a mensagem de erro no console.
        
        ### Gabarito
        
        - [ ]  Resolução do Item 1
        
        ```
        async function fetchCep(cep) {
          try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
              return { message: "CEP inválido" };
            }
            return {
              logradouro: data.logradouro,
              complemento: data.complemento,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            };
          } catch (error) {
            console.error(error);
          }
        }
        
        fetchCep("01310100").then(console.log);
        fetchCep("00000000").then(console.log);
        
        ```
        
        - [ ]  Resolução do Item 2
        
        ```
        async function fetchCep(cep) {
          try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
              return { message: "CEP inválido" };
            }
            return {
              logradouro: data.logradouro,
              complemento: data.complemento,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            };
          } catch (error) {
            console.error(error);
            return { message: "Erro ao buscar CEP" };
          }
        }
        
        fetchCep("01310100").then(console.log);
        fetchCep("00000000").then(console.log);
        
        ```
        
        - [ ]  Resolução do Item 3
        
        ```
        async function fetchWeather(city) {
          const apiKey = "sua_chave_de_api_aqui";
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
            );
            const data = await response.json();
            if (response.status === 404 || data.cod === "404") {
              return { message: "Dados climáticos não encontrados" };
            }
            return {
              temperatura: data.main.temp,
              sensacaoTermica: data.main.feels_like,
              umidade: data.main.humidity,
              descricao: data.weather[0].description,
              velocidadeVento: data.wind.speed
            };
          } catch (error) {
            console.error(error);
          }
        }
        
        fetchWeather("São Paulo").then(console.log);
        fetchWeather("Cidade Inexistente").then(console.log);
        
        ```
        
        - [ ]  Resolução do Item 4
        
        ```
        async function fetchWeather(city) {
          const apiKey = "sua_chave_de_api_aqui";
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
            );
            const data = await response.json();
            if (response.status === 404 || data.cod === "404") {
              return { message: "Dados climáticos não encontrados" };
            }
            return {
              temperatura: data.main.temp,
              sensacaoTermica: data.main.feels_like,
              umidade: data.main.humidity,
              descricao: data.weather[0].description,
              velocidadeVento: data.wind.speed
            };
          } catch (error) {
            console.error(error);
            return { message: "Erro ao buscar dados climáticos" };
          }
        }
        
        fetchWeather("São Paulo").then(console.log);
        fetchWeather("Cidade Inexistente").
        ```