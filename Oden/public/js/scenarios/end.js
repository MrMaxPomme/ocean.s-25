function End_Page() {
    // 选择 <body> 元素并清空其内容
    let body = document.querySelector("body");
    body.innerHTML = "";

    // 设置背景颜色，移除背景图像
    document.body.style.backgroundImage = "none";
    document.body.style.background = "linear-gradient(to bottom, #0F3D40, #0B2B2D)";

    // 创建主容器 div
    let div = document.createElement("div");
    div.classList.add("guide");

    // 创建 ODEN 标志
    let logo = document.createElement("img");
    logo.classList.add("oden-logo");
    logo.src = "assets/logo.png"; // 设置 logo 图片路径

    // 创建通知部分的容器
    let notificationContainer = document.createElement("div");
    notificationContainer.classList.add("notification-container");

    // 创建警告图标
    let warningIcon = document.createElement("img");
    warningIcon.classList.add("icon", "warning-icon");
    warningIcon.src = "assets/right.png";

    // 创建通知标题
    let notificationTitle = document.createElement("div"); // 创建通知标题元素
    notificationTitle.classList.add("section-title");// 添加 CSS 类以应用样式
    notificationTitle.innerHTML = "<br>STATUT";// 设置标题文本内容

    // 创建通知内容的容器
    let notification = document.createElement("div");
    notification.classList.add("notification"); // 添加 CSS 类以应用样式

    // 创建通知文本元素
    let notifText = document.createElement("p");
    notifText.innerHTML = "ODEN, GRÂCE À L'UTILISATION DE ROBOTS AUTOMATIQUES, A EFFICACEMENT COLLECTÉ LA MARÉE NOIRE ET L'A TRANSPORTÉE VERS LE CENTRE DE TRAITEMENT."; // 设置通知文本内容

    // 将通知文本添加到内部容器
    notification.appendChild(notifText);

    // 将各个部分添加到通知容器中
    notificationContainer.appendChild(warningIcon);
    notificationContainer.appendChild(notificationTitle);
    notificationContainer.appendChild(notification);

    // 创建说明部分的容器
    let instructionsContainer = document.createElement("div");
    instructionsContainer.classList.add("notification-container");

    // 创建信息图标
    let infoIcon = document.createElement("img");
    infoIcon.classList.add("icon", "info-icon");
    infoIcon.src = "assets/!.png";

    // 创建说明标题
    let instructionsTitle = document.createElement("div");
    instructionsTitle.classList.add("section-title");
    instructionsTitle.innerHTML = "<br>NOTIFICATION";

    // 创建说明内容
    let instructions = document.createElement("div");
    instructions.classList.add("notification");

    let instrText = document.createElement("p");
    instrText.innerHTML = "CLIQUEZ SUR LE BOUTON DU MODULE POUR VOIR COMMENT LES HYDROCARBURES COLLECTÉS SONT TRAITÉS AVEC DES BACTÉRIES SPÉCIFIQUES.";
    
    // 将文本添加到说明内容中
    instructions.appendChild(instrText);
    // 将各个部分添加到说明容器中
    instructionsContainer.appendChild(infoIcon);
    instructionsContainer.appendChild(instructionsTitle);
    instructionsContainer.appendChild(instructions);

    // 将所有元素添加到主容器中
    div.appendChild(logo);
    div.appendChild(notificationContainer);
    div.appendChild(instructionsContainer);
    
    // 将主容器添加到 body
    body.appendChild(div);
}
