export default function FundoMobile() {
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return (
        <div class="fundo-mobile">
        {icons.map(icon => {
            return (
                <ion-icon name={icon}></ion-icon>
            )
        })
        }
        </div>
    );
}