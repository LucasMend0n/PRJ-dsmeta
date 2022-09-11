import axios from "axios";
import icon from "../../assets/img/button.svg"; 
import { BASE_URL } from "../../utils/requests";
import './styles.css'; 

type Props={
    saleId:number;
}


function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {(console.log("pass"))});
}
function NotificationButton({saleId} : Props){
    return(
        <>
            <div className="dsmeta-red-btn" onClick={()=> handleClick(saleId)}>
                <img src={icon} alt="Botão de notificação de vendas"/>
            </div>
        </>
    )
}

export default NotificationButton; 