import './donar.css'

import QR from "../../assets/img/QR.png"
function PageDonar() {
    return (
        <div className="donar_container">


            <div class="container-fluid">
                <div class="banner_main">
                    <div class="container">
                    
                                <div class="col-sm-1">
                                    <p class="consectetur_text">Con tu aporte podemos crear un mejor mundo para ellos</p>
                                    <div class="banner_bt">
                                        <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
                                            <input type="hidden" name="hosted_button_id" value="WPYGJLLFKP7DY" />
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                                                border="0" name="submit" title="PayPal - The safer, easier way to pay online!"
                                                alt="Donate with PayPal button" />
                                            <img alt="" border="0" src="https://www.sandbox.paypal.com/en_PE/i/scr/pixel.gif" width="1" height="1" />
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <img src={QR} alt="" />
                                    <p class="consectetur_text2">Escanea el QR</p>
                                </div>
                    
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageDonar;