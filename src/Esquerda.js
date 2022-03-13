import Post from './Post';

export default function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />    
            <Posts />
            </div>
    );
}

function Stories() {
    const stories = [
        {
        imagem:"assets/img/9gag.svg",
        usuario:"9gag"
    },
        {
        imagem:"assets/img/meowed.svg",
        usuario:"meowed"
    },
        {
        imagem:"assets/img/barked.svg",
        usuario:"barked"
    },
        {
        imagem:"assets/img/nathanwpylestrangeplanet.svg",
        usuario:"nathanwpylestrangeplanet"
    },
        {
        imagem:"assets/img/wawawicomics.svg",
        usuario:"wawawicomics"
    },
        {
        imagem:"assets/img/respondeai.svg",
        usuario:"respondeai"
    },
        {
        imagem:"assets/img/filomoderna.svg",
        usuario:"filomoderna"
    },
        {
        imagem:"assets/img/memeriagourmet.svg",
        usuario:"memeriagourmet"
    }];
    return (
        <div class="stories">
            {stories.map(storie => {
                return (
                <div class="story">
                    <div class="imagem">
                        <img src={storie.imagem} />
                    </div>
                    <div class="usuario">
                        {storie.usuario}
                    </div>   
                </div> 
                )
            })}
            <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>                  
        </div>
    );
}
function Posts() {
    const posts = [
        <Post imgPerfil="assets/img/meowed.svg" nickname="meowed" conteudo="assets/img/gato-telefone.svg" imgCurtida="assets/img/respondeai.svg" nomeCurtida="respondeai" numCurtidas="outras 101.523 pessoas" />,
        <Post imgPerfil="assets/img/barked.svg" nickname="barked" conteudo="assets/img/dog.svg" imgCurtida="assets/img/adorable_animals.svg" nomeCurtida="adorable_animals" numCurtidas="outras 99.159 pessoas" />
    ]
    return (
        <div class="posts">
            {posts.map(post => post)}
        </div>
    )
}
