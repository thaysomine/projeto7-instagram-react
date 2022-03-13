export default function Sidebar() {
    return (
        <div class="sidebar">
                <Usuario />
                <Sugestoes />
                <Links />
                <Copyright />                
            </div>
    );
}

function Usuario() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                        Catana
            </div>
        </div>
    )
}
function Sugestoes() {
    const sugestoes = [
        {
            imagem:"assets/img/bad.vibes.memes.svg",
            nome:"bad.vibes.memes",
            razao:"Segue você"
        },
        {
            imagem:"assets/img/chibirdart.svg",
            nome:"chibirdart",
            razao:"Segue você"
        },
        {
            imagem:"assets/img/razoesparaacreditar.svg",
            nome:"razoesparaacreditar",
            razao:"Novo no Instagram"
        },
        {
            imagem:"assets/img/adorable_animals.svg",
            nome:"adorable_animals",
            razao:"Segue você"
        },
        {
            imagem:"assets/img/smallcutecats.svg",
            nome:"smallcutecats",
            razao:"Segue você"
        }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(sugestao => {
                return (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={sugestao.imagem} />
                            <div class="texto">
                                <div class="nome">{sugestao.nome}</div>
                                <div class="razao">{sugestao.razao}</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                )
            })}
        </div>
    )
}
function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
    )
}
function Copyright() {
    return (
        <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
    )
}