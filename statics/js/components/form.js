function createForm(data) {
    const formContainer = document.getElementById("dynamic-form");

    // Formun ana yapısı
    const row = document.createElement("div");
    row.className = "row justify-between mb-20px items-center form-test-container";

    // Sol taraf (form kısmı)
    const formBox = document.createElement("div");
    formBox.className = "col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12 form-box pad-10px";

    const formItem = document.createElement("div");
    formItem.className = "partnyor-item partnyor-form border-col p-24px height-50";

    // Başlıklar
    const header = document.createElement("div");
    header.className = "partnyor-item-header";

    const sendMsg = document.createElement("p");
    sendMsg.className = "send-msg";
    sendMsg.textContent = data.formHeader.title;

    const heading = document.createElement("h5");
    heading.className = "partnyor-item-heading";
    heading.textContent = data.formHeader.subtitle;

    const description = document.createElement("p");
    description.className = "partnyor-text-select";
    description.textContent = data.formHeader.description;

    // Header elemanlarını ekle
    header.appendChild(sendMsg);
    header.appendChild(heading);
    header.appendChild(description);

    // Kurs seçim kutuları
    const courseRow = document.createElement("div");
    courseRow.className = "row";

    data.courses.forEach(course => {
        const courseBox = document.createElement("div");
        courseBox.className = "course-box";

        const button = document.createElement("button");
        const link = document.createElement("a");
        link.href = course.url;
        link.textContent = course.name;

        button.appendChild(link);
        courseBox.appendChild(button);
        courseRow.appendChild(courseBox);
    });

    // Form elemanları
    const formWrapper = document.createElement("div");
    formWrapper.className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12";

    const formElement = document.createElement("form");
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "input-wrapper";

    data.formFields.forEach(field => {
        const inputBox = document.createElement("div");
        inputBox.className = "input-box";
        const input = document.createElement("input");
        input.type = field.type;
        input.placeholder = field.placeholder;

        inputBox.appendChild(input);
        inputWrapper.appendChild(inputBox);
    });

    formElement.appendChild(inputWrapper);

    // Başvuru butonu
    const submitWrapper = document.createElement("div");
    const submitButton = document.createElement("button");
    submitButton.className = "submit-btn";
    submitButton.type = "submit";
    const submitLink = document.createElement("a");
    submitLink.href = data.formButton.url;
    submitLink.textContent = data.formButton.text;

    submitButton.appendChild(submitLink);
    submitWrapper.appendChild(submitButton);

    formElement.appendChild(submitWrapper);
    formWrapper.appendChild(formElement);

    // Form kutusunu birleştir
    formItem.appendChild(header);
    formItem.appendChild(courseRow);
    formItem.appendChild(formWrapper);

    formBox.appendChild(formItem);

    // Sağ taraf (test kısmı)
    const testBox = document.createElement("div");
    testBox.className = "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-24px test-box pad-10px";

    const testItem = document.createElement("div");
    testItem.className = "partnyor-test-box border-col p-24px height-50";

    const testHeader = document.createElement("div");
    testHeader.className = "partnyor-test-box-header";
    const testImg = document.createElement("img");
    testImg.src = data.testSection.imgSrc;
    testHeader.appendChild(testImg);

    const testContent = document.createElement("div");
    testContent.className = "partnyor-test-box-content";
    const helpText = document.createElement("h6");
    helpText.className = "help-text";
    helpText.textContent = data.testSection.helpText;

    const quizText = document.createElement("p");
    quizText.className = "quiz";
    quizText.textContent = data.testSection.quizText;

    testContent.appendChild(helpText);
    testContent.appendChild(quizText);

    const testButtonWrapper = document.createElement("div");
    const testButton = document.createElement("button");
    testButton.type = "submit";
    testButton.className = "btn-test";
    testButton.textContent = data.testSection.testButton;

    testButtonWrapper.appendChild(testButton);

    // Test kutusunu birleştir
    testItem.appendChild(testHeader);
    testItem.appendChild(testContent);
    testItem.appendChild(testButtonWrapper);

    testBox.appendChild(testItem);

    // Ana rowa ekle
    row.appendChild(formBox);
    row.appendChild(testBox);

    // Sayfaya ekle
    formContainer.appendChild(row);
}