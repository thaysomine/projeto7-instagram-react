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
    const posts = [{
        user: {
            imgProfile: "assets/img/meowed.svg",
            nickname: "meowed"
        },
        content: "assets/img/gato-telefone.svg",
        likes: {
            imgLike: "assets/img/respondeai.svg",
            nameLike: "respondeai",
            numLikes: "101.523"
        }
    }, {
        user: {
            imgProfile: "assets/img/barked.svg",
            nickname: "barked"
        },
        content: "assets/img/dog.svg",
        likes: {
            imgLike: "assets/img/adorable_animals.svg",
            nameLike: "adorable_animals",
            numLikes: "99.159"
        }
    }];
    return (
        <div class="posts">
            {posts.map(post => {
            return (    
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.user.imgProfile} />
                            {post.user.nickname}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={post.content} />
                    </div>

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
                            <img src={post.likes.imgLike} />
                            <div class="texto">
                                Curtido por <strong>{post.likes.nameLike}</strong> e <strong>outras {post.likes.numLikes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )}
