let shelters = [];

fetch("data.json")
.then(res => res.json())
.then(data => {
    shelters = data;
    renderList(data);
});

function renderList(data){

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(s => {

        const item = document.createElement("div");
        item.className = "item";

        item.innerHTML = `
        <div><span class="label">업체 이름:</span> ${s.name}</div>
        <div><span class="label">인스타그램:</span>
        <a href="${s.instagram}" target="_blank">${s.instagram}</a></div>
        <div><span class="label">주소:</span> ${s.address}</div>
        <div><span class="label">사업자등록번호:</span> ${s.business}</div>
        `;

        list.appendChild(item);
    });
}

document.getElementById("search").addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = shelters.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.address.toLowerCase().includes(keyword)
    );

    renderList(filtered);
});
