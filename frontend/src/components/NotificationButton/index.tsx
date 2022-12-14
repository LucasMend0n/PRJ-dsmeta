import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/button.svg"; 
import { BASE_URL } from "../../utils/requests";
import './styles.css'; 

type Props={
    saleId:number;
}


function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {toast.info("Notificação SMS enviada com sucesso!")});
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