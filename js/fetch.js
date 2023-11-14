export async function fetchData() {
    const d = document;
    const $fetch = d.querySelector('.main');
    const $fragment = d.createDocumentFragment();

    try {
        const response = await fetch("./json/commands.json");

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const json = await response.json();

        Object.keys(json.comandos).forEach((comandoKey) => {
            const comando = json.comandos[comandoKey];
        
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

            const $usingMode = d.createElement('p');
            $usingMode.innerHTML = `<b>Modo de uso:</b> ${comando.modo_de_uso}`;
            $usingMode.style.textAlign = "center";

            const $flags = d.createElement('ul');
            $flags.innerHTML = `<b>Banderas / Opciones:</b>`;
            
            Object.keys(comando.banderas).forEach((banderaKey) => { 
                const bandera = comando.banderas[banderaKey];
                
                const $flag = d.createElement('li');
                $flag.innerHTML = `> <b><i>${banderaKey}</i></b> : ${bandera.descripcion || bandera}`;
                
                const $examples = d.createElement('ul');

                if (bandera.ejemplo) {
                    const ejemplo = bandera.ejemplo;

                    const $example = d.createElement('li');
                    $example.innerHTML = `<u>Ejemplo de uso de la bandera</u>:`;
                    $examples.appendChild($example);

                    const $commandExample = d.createElement('li');
                    $commandExample.innerHTML = `Comando: <b><i>${ejemplo.comando}</i></b>`;
                    $examples.appendChild($commandExample);

                    const $resultExample = d.createElement('li');
                    $resultExample.innerHTML = `Resultado: ${ejemplo.resultado}`;
                    $examples.appendChild($resultExample);
                }

                $flag.appendChild($examples);

                $flags.appendChild($flag);
            });

            $content.appendChild($command);
            $content.appendChild($name);
            $content.appendChild($description);
            $content.appendChild($usingMode);
            $content.appendChild($flags);

            $card.appendChild($title);
            $card.appendChild($content);
            
            $fragment.appendChild($card);
        });

        $fetch.appendChild($fragment);

    } catch (error) {
        console.error(error);
        let message = error.message || "Ocurrió un error";
        $fetch.innerHTML = `Error: ${message}`;
    }
    
    // fetch("./json/commands.json")
    // .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    // .then((json) => {

    //     Object.keys(json.comandos).forEach((comandoKey) => {
    //         const comando = json.comandos[comandoKey];
                
    //         const $card = d.createElement('div');
    //         $card.classList.add('command-card');

    //         const $title = d.createElement('div');
    //         $title.classList.add('command-card-title');

    //         const $h3 = d.createElement('h3');
    //         $h3.innerHTML = `Comando ${comando.comando}`;

    //         const $div = d.createElement('div');
    //         const $i = d.createElement('i');
    //         $i.classList.add('fa-solid');
    //         $i.classList.add('fa-chevron-down');
    //         $div.appendChild($i)

    //         $title.appendChild($h3);
    //         $title.appendChild($div);
            
    //         const $content = d.createElement('div');
    //         $content.classList.add('command-card-content');

    //         const $command = d.createElement('h4');
    //         $command.innerHTML = `El comando <i>${comando.comando}</i>`;

    //         const $name = d.createElement('p');
    //         $name.innerHTML = `<b>Nombre:</b> <i>${comando.nombre}</i>`;

    //         const $description = d.createElement('p');
    //         $description.innerHTML = `<b>Descripción:</b> ${comando.descripcion}`;

    //         const $usingMode = d.createElement('p');
    //         $usingMode.innerHTML = `<b>Modo de uso:</b> ${comando.modo_de_uso}`;
    //         $usingMode.style.textAlign = "center";

    //         const $flags = d.createElement('ul');
    //         $flags.innerHTML = `<b>Banderas / Opciones:</b>`;
            
    //         Object.keys(comando.banderas).forEach((banderaKey) => { 
    //             const bandera = comando.banderas[banderaKey];
                
    //             const $flag = d.createElement('li');
    //             $flag.innerHTML = `> <b><i>${banderaKey}</i></b> : ${bandera.descripcion || bandera}`;
                
    //             const $examples = d.createElement('ul');

    //             if (bandera.ejemplo) {
    //                 const ejemplo = bandera.ejemplo;

    //                 const $example = d.createElement('li');
    //                 $example.innerHTML = `<u>Ejemplo de uso de la bandera</u>:`;
    //                 $examples.appendChild($example);

    //                 const $commandExample = d.createElement('li');
    //                 $commandExample.innerHTML = `Comando: <b><i>${ejemplo.comando}</i></b>`;
    //                 $examples.appendChild($commandExample);

    //                 const $resultExample = d.createElement('li');
    //                 $resultExample.innerHTML = `Resultado: ${ejemplo.resultado}`;
    //                 $examples.appendChild($resultExample);
    //             }

    //             $flag.appendChild($examples);

    //             $flags.appendChild($flag);
    //         });

    //         $content.appendChild($command);
    //         $content.appendChild($name);
    //         $content.appendChild($description);
    //         $content.appendChild($usingMode);
    //         $content.appendChild($flags);

    //         $card.appendChild($title);
    //         $card.appendChild($content);
            
    //         $fragment.appendChild($card);
    //     });

    //     $fetch.appendChild($fragment);
    // })
    // .catch((err) => {
    //     console.log(err);
    //     let message = err.statusText || "Ocurrió un error";
    //     $fetch.innerHTML = `Error ${err.status}: ${message}`;
    // })
}
