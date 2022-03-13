export default function Post(props) {
    return (
        <div class="post">
            <Topo imgPerfil={props.imgPerfil} nickname={props.nickname} />
            <Conteudo conteudo={props.conteudo} />
            <Fundo imgCurtida={props.imgCurtida} nomeCurtida={props.nomeCurtida} numCurtidas={props.numCurtidas} />
        </div>
    )
}
function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imgPerfil} />
                {props.nickname}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.conteudo} />
        </div>
    )
}
function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
        <div class="curtidas">
                        <img src={props.imgCurtida} />
                        <div class="texto">
                            Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
                        </div>
                    </div>
        </div>
    )
}
