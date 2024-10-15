 // var links = document.querySelectorAll('.links');
        // var sections = document.querySelectorAll('.sections');


        // window.onscroll = () => {
        //     var current = "home";
        //     sections.forEach((section) => {
        //         const sectionTop = section.offsetTop;
        //         if (scrollY >= sectionTop - 60) {
        //             current = section.getAttribute('id');
        //         }
        //     });
        //     links.forEach((item) => {
        //         item.classList.remove('active');
        //         if (item.href.includes(current)) {
        //             item.classList.add('active');
        //         }
        //         else {
        //             item.classList.remove('active');
        //         }
        //     });
        // }

        var links = document.querySelectorAll('.links');
        var sections = document.querySelectorAll('.sections');
        var isScrolling = false;  // Variável para controlar se a rolagem é manual ou automática

        // Função para remover a classe 'active' de todos os links
        function removeActiveClasses() {
            links.forEach((item) => {
                item.classList.remove('active');
            });
        }

        // Função para ativar o link correto durante o scroll
        function handleScroll() {
            if (isScrolling) return; // Se estiver rolando automaticamente, não faz nada

            var current = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;

                if (scrollY >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            links.forEach((item) => {
                if (item.href.includes(current)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // Adiciona o evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Adiciona o evento de clique em cada link
        links.forEach((link) => {
            link.addEventListener('click', function (event) {
                event.preventDefault();  // Impede o comportamento padrão de navegação

                // Remove a classe 'active' de todos os links
                removeActiveClasses();

                // Adiciona a classe 'active' ao link clicado
                link.classList.add('active');

                // Desativa o controle de scroll enquanto o clique rola a página
                isScrolling = true;

                // Faz o scroll suave até a seção correspondente
                const sectionId = link.getAttribute('href').substring(1);  // Remove o '#' do ID
                const targetSection = document.getElementById(sectionId);

                // Rola suavemente até a seção alvo
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                // Após 1 segundo (tempo estimado para o scroll), reativa o evento de scroll
                setTimeout(() => {
                    isScrolling = false;  // Reativa o controle de scroll
                }, 1000);  // Ajuste o tempo se o scroll suave for mais lento ou rápido
            });
        });
