export function fetchData() {
    const d = document;
    const $fetch = d.querySelector('.main');
    const $fragment = d.createDocumentFragment();
    
    fetch("../json/commands.json")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {

        Object.keys(json.comandos).forEach((comandoKey) => {
            const comando = json.comandos[comandoKey];

            console.log(comando)
            console.log(comando.banderas)
    
            const $card = d.createElement('div');
            $card.classList.add('command-card');

            const $title = d.createElement('div');
            $title.classList.add('command-card-title');

            const $h3 = d.createElement('h3');
            $h3.innerHTML = `Comando ${comando.comando}`;

            const $div = d.createElement('div');
            const $i = d.createElement('i');
            $i.classList.add('fa-solid');
            $i.classList.add('fa-chevron-down');
            $div.appendChild($i)

            $title.appendChild($h3);
            $title.appendChild($div);
            
            const $content = d.createElement('div');
            $content.classList.add('command-card-content');

            const $command = d.createElement('h4');
            $command.innerHTML = `El comando <i>${comando.comando}</i>`;

            const $name = d.createElement('p');
            $name.innerHTML = `<b>Nombre:</b> <i>${comando.nombre}</i>`;

            const $description = d.createElement('p');
            $description.innerHTML = `<b>Descripción:</b> ${comando.descripcion}`;

            const $flags = d.createElement('ul');
            $flags.innerHTML = `Banderas:`;

            // const $flag = d.createElement('li');
            // $flag.innerHTML = `Nombre: ${comando.banderas}`;

            $content.appendChild($command);
            $content.appendChild($name);
            $content.appendChild($description);

            $card.appendChild($title);
            $card.appendChild($content);
            
            $fragment.appendChild($card);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
}
