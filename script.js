document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const currentPage = parseInt(page.replace(".html", "")) || 1;
    const totalPages = 31;

    // Membuat container utama navigasi atas
    const topNav = document.createElement("div");
    topNav.className = "top-pagination"; // Pastikan nama class ini sama dengan di CSS
    
    // Membuat pembungkus angka agar rapi
    const navWrapper = document.createElement("div");
    navWrapper.className = "nav-wrapper";

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = `${i}.html`;
        link.innerText = i;
        if (i === currentPage) link.className = "active";
        navWrapper.appendChild(link);
    }
    
    topNav.appendChild(navWrapper);
    document.body.prepend(topNav);

    // Bagian tombol melayang (Kiri & Kanan)
    if (currentPage > 1) {
        const prevBtn = document.createElement("a");
        prevBtn.href = `${currentPage - 1}.html`;
        prevBtn.innerHTML = "❮";
        prevBtn.className = "float-btn prev";
        document.body.appendChild(prevBtn);
    }

    if (currentPage < totalPages) {
        const nextBtn = document.createElement("a");
        nextBtn.href = `${currentPage + 1}.html`;
        nextBtn.innerHTML = "❯";
        nextBtn.className = "float-btn next";
        document.body.appendChild(nextBtn);
    }
});