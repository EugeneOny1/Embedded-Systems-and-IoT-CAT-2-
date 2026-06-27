function setProtocol(protocol){

    const container =
    document.getElementById('wave-container');

    if(protocol === 'ble'){

        container.innerHTML=`
            <div class="wave-ble"></div>
            <div class="wave-ble delay-2"></div>
        `;

    }else{

        container.innerHTML=`
            <div class="wave-lora"></div>
            <div class="wave-lora delay-2"></div>
        `;
    }
}