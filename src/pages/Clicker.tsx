import "../styles/drag.css"
export function Clicker() {

    const datalist = [{
        name: "Fim da 2° guerra mundial",
        date: 1945,
        img: "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2019/10/segunda-guerra-mundial-causas-paises-envolvidos-e-consequencias.jpg"
    },{
        name: "Primeiro voo espacial tripulado",
        date: 1961,
        img: "https://aeromagazine.uol.com.br/media/versions/vostok_1_free_big.jpg"
    },{
        name: "Fundação da Coca Cola",
        date: 1892,
        img: "https://www.cocacolaportugal.pt/content/dam/one/pt/pt/body/conhocenos/hist%C3%B3ria/john-pemberton/john-pemberton-2.jpg"
    },]

    
    return(
        <div className="main_container">
            <section className="events">
                <div className="event">
                    <img src={datalist[0].img} alt='event_image' />
                    <span>{datalist[0].name}</span>
                </div>
                <div className="event">
                    <img src={datalist[1].img} alt='event_image' />
                    <span>{datalist[1].name}</span>
                </div>
                <div className="event">
                    <img src={datalist[2].img} alt='event_image' />
                    <span>{datalist[2].name}</span>
                </div>
            </section>
            <section className="dates">
                <div className="date">
                    <span>{datalist[0].date}</span>
                </div>
                <div className="date">
                    <span>{datalist[1].date}</span>
                </div>
                <div className="date">
                    <span>{datalist[2].date}</span>
                </div>
            </section>
        </div>
    )

}

