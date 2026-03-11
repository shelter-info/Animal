renderList(shelters);

function renderList(data){

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(s => {

        const item = document.createElement("div");
        item.className = "item";

        const labelColor = s.type === "petshop" ? "red" : "green";
        const labelText = s.type === "petshop" ? "펫샵" : "보호소";

        // 홈페이지 처리
        const homepage = s.homepage
            ? `<a href="${s.homepage}" target="_blank">${s.homepage}</a>`
            : "-";

        // 펫샵만 사업자등록번호 표시
        const businessInfo = s.type === "petshop"
            ? `<div><span class="label">동물판매업등록번호:</span> ${s.business}</div>`
            : "";

        // 펫샵만 홈페이지 표시
        const homepageInfo = s.type === "petshop"
            ? `<div><span class="label">홈페이지:</span> ${homepage}</div>`
            : "";

        // 펫샵만 주소 표시
        const addressInfo = s.type === "petshop"
            ? `<div><span class="label">주소:</span> ${s.address}</div>`
            : "";

        item.innerHTML = `
        <div class="type" style="color:${labelColor}">[${labelText}]</div>
        <div><span class="label">업체 이름:</span> ${s.name}</div>
        <div><span class="label">인스타그램:</span>
        <a href="${s.instagram}" target="_blank">${s.instagram}</a></div>
        ${homepageInfo}
        ${addressInfo}
        ${businessInfo}
        `;

        list.appendChild(item);
    });
}


document.getElementById("search").addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = shelters.filter(s =>
        (s.name || "").toLowerCase().includes(keyword)
    );

    renderList(filtered);
});


function filterType(type){

    if(type === "all"){
        renderList(shelters);
        return;
    }

    const filtered = shelters.filter(s => s.type === type);
    renderList(filtered);
}
