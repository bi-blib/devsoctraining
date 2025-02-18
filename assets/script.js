alert("Script is working!");
function toggle(id) {
    const content = document.getElementById(`content-${id}`);
    if (content) {
        content.classList.toggle("active");
    }
}