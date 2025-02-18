function toggle(id) {
    const content = document.getElementById(`content-${id}`);
    content.style.display = content.style.display === "none" ? "block" : "none";
}
