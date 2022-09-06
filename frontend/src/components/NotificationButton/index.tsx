import icon from "../../assets/img/button.svg"; 
import './styles.css'; 

function NotificationButton(){
    return(
        <>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Botão de notificação de vendas"/>
            </div>
        </>
    )
}

export default NotificationButton; 