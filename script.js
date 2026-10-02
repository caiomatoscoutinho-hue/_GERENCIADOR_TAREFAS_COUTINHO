const campoTarefa =
    document.getElementById("campo-tarefa");

const botaoAdicionar =
    document.getElementById("botao-adicionar");

const botaoLimpar =
    document.getElementById("botao-limpar");

const listaTarefas =
    document.getElementById("lista-tarefas");

const contadorTarefas =
    document.getElementById("contador-tarefas");

const botaoModoEscuro =
    document.getElementById("botao-modo-escuro");

const janelaImagem =
    document.getElementById("janela-imagem");

const imagemEster =
    document.getElementById("imagem-ester");

const fecharImagem =
    document.getElementById("fechar-imagem");


botaoAdicionar.addEventListener(
    "click",
    adicionarTarefa
);


campoTarefa.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {
            adicionarTarefa();
        }

    }
);


function adicionarTarefa() {

    const texto =
        campoTarefa.value.trim();


    if (texto.toLowerCase() === "ester") {

        abrirImagemEster();

        campoTarefa.value = "";

        campoTarefa.focus();

        return;
    }


    if (texto === "") {

        mostrarMensagem(
            "✏️ Digite uma tarefa primeiro!"
        );

        campoTarefa.focus();

        return;
    }


    const item =
        document.createElement("li");


    item.classList.add(
        "item-tarefa"
    );


    item.innerHTML = `

        <span class="texto-tarefa">
            ${texto}
        </span>

        <div class="acoes-tarefa">

            <button
                class="botao-acao favorito"
                title="Marcar como importante"
            >
                <i class="fa-regular fa-star"></i>
            </button>

            <button
                class="botao-acao concluir"
                title="Concluir tarefa"
            >
                <i class="fa-solid fa-check"></i>
            </button>

            <button
                class="botao-acao excluir"
                title="Excluir tarefa"
            >
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

    `;


    const botaoConcluir =
        item.querySelector(".concluir");


    botaoConcluir.addEventListener(
        "click",
        function() {

            item.classList.toggle(
                "concluida"
            );

            if (
                item.classList.contains(
                    "concluida"
                )
            ) {

                mostrarMensagem(
                    "🎉 Tarefa concluída! Muito bem!"
                );

            } else {

                mostrarMensagem(
                    "↩️ Tarefa reaberta!"
                );

            }

        }
    );


    const botaoExcluir =
        item.querySelector(".excluir");


    botaoExcluir.addEventListener(
        "click",
        function() {

            item.remove();

            atualizarContador();

            mostrarMensagem(
                "🗑️ Tarefa removida!"
            );

        }
    );


    const botaoFavorito =
        item.querySelector(".favorito");


    botaoFavorito.addEventListener(
        "click",
        function() {

            item.classList.toggle(
                "importante"
            );

            const icone =
                botaoFavorito.querySelector("i");


            if (
                item.classList.contains(
                    "importante"
                )
            ) {

                icone.classList.remove(
                    "fa-regular"
                );

                icone.classList.add(
                    "fa-solid"
                );

                mostrarMensagem(
                    "⭐ Tarefa marcada como importante!"
                );

            } else {

                icone.classList.remove(
                    "fa-solid"
                );

                icone.classList.add(
                    "fa-regular"
                );

                mostrarMensagem(
                    "☆ Tarefa não é mais importante."
                );

            }

        }
    );


    listaTarefas.appendChild(
        item
    );


    campoTarefa.value = "";

    campoTarefa.focus();

    atualizarContador();

}


function atualizarContador() {

    const quantidade =
        listaTarefas.querySelectorAll(
            ".item-tarefa"
        ).length;


    if (quantidade === 0) {

        contadorTarefas.textContent =
            "0 tarefas na lista";

    } else if (quantidade === 1) {

        contadorTarefas.textContent =
            "1 tarefa na lista";

    } else {

        contadorTarefas.textContent =
            `${quantidade} tarefas na lista`;

    }

}


function mostrarMensagem(texto) {

    const mensagemExistente =
        document.querySelector(
            ".mensagem"
        );


    if (mensagemExistente) {
        mensagemExistente.remove();
    }


    const mensagem =
        document.createElement(
            "div"
        );


    mensagem.classList.add(
        "mensagem"
    );


    mensagem.textContent =
        texto;


    document.body.appendChild(
        mensagem
    );


    setTimeout(
        function() {

            mensagem.remove();

        },
        2000
    );

}


botaoLimpar.addEventListener(
    "click",
    function() {

        const quantidade =
            listaTarefas.querySelectorAll(
                ".item-tarefa"
            ).length;


        if (quantidade === 0) {

            mostrarMensagem(
                "🧹 A lista já está vazia!"
            );

            return;
        }


        listaTarefas.innerHTML = "";

        atualizarContador();

        mostrarMensagem(
            "🧹 Todas as tarefas foram removidas!"
        );

    }
);


botaoModoEscuro.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "modoescuro"
        );


        const icone =
            botaoModoEscuro.querySelector(
                "i"
            );


        if (
            document.body.classList.contains(
                "modoescuro"
            )
        ) {

            icone.classList.remove(
                "fa-moon"
            );

            icone.classList.add(
                "fa-sun"
            );

        } else {

            icone.classList.remove(
                "fa-sun"
            );

            icone.classList.add(
                "fa-moon"
            );

        }

    }
);


function abrirImagemEster() {

    janelaImagem.classList.add(
        "mostrar"
    );

}


fecharImagem.addEventListener(
    "click",
    function() {

        janelaImagem.classList.remove(
            "mostrar"
        );

    }
);


janelaImagem.addEventListener(
    "click",
    function(event) {

        if (
            event.target === janelaImagem
        ) {

            janelaImagem.classList.remove(
                "mostrar"
            );

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            janelaImagem.classList.remove(
                "mostrar"
            );

        }

    }
);